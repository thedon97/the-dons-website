const CACHE_TTL_MS = 15 * 60 * 1000;
const FALLBACK_MESSAGE = "Live diamond inventory is being updated. Contact us for real-time diamond options.";

const feedCache = {
  certified: { diamonds: [], fetchedAt: 0, error: "" },
  "certified-color": { diamonds: [], fetchedAt: 0, error: "" },
};

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=900");
  res.end(JSON.stringify(payload));
}

function envStatus() {
  return {
    LGD_API_KEY: Boolean(process.env.LGD_API_KEY),
    LGD_CERTIFIED_URL: Boolean(process.env.LGD_CERTIFIED_URL),
    LGD_CERTIFIED_COLOR_URL: Boolean(process.env.LGD_CERTIFIED_COLOR_URL),
  };
}

function missingEnv(feed) {
  const missing = [];
  if (!process.env.LGD_API_KEY) missing.push("LGD_API_KEY");
  if (feed === "certified" && !process.env.LGD_CERTIFIED_URL) missing.push("LGD_CERTIFIED_URL");
  if (feed === "certified-color" && !process.env.LGD_CERTIFIED_COLOR_URL) missing.push("LGD_CERTIFIED_COLOR_URL");
  return missing;
}

function cleanBaseUrl(baseUrl) {
  const value = String(baseUrl || "").trim();
  if (!value) return "";
  try {
    const url = new URL(value);
    url.searchParams.delete("page");
    url.searchParams.delete("key");
    return url.toString();
  } catch {
    return value
      .replace(/([?&])(page|key)=[^&]*/gi, "")
      .replace(/[?&]$/g, "");
  }
}

function buildLgdUrl(feed, page) {
  const missing = missingEnv(feed);
  if (missing.length) {
    throw new Error(`Missing server environment variable${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}`);
  }
  const base = cleanBaseUrl(feed === "certified-color" ? process.env.LGD_CERTIFIED_COLOR_URL : process.env.LGD_CERTIFIED_URL);
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}page=${encodeURIComponent(page)}&key=${encodeURIComponent(process.env.LGD_API_KEY)}`;
}

function firstValue(source, names) {
  const lookup = {};
  for (const [key, value] of Object.entries(source || {})) {
    lookup[key.replace(/[^a-z0-9]/gi, "").toLowerCase()] = value;
  }
  for (const name of names) {
    if (source && source[name] !== undefined && source[name] !== null && source[name] !== "") return source[name];
    const normalized = name.replace(/[^a-z0-9]/gi, "").toLowerCase();
    if (lookup[normalized] !== undefined && lookup[normalized] !== null && lookup[normalized] !== "") return lookup[normalized];
  }
  return "";
}

function collectUrls(value, urls = []) {
  if (value === null || value === undefined) return urls;
  if (typeof value === "string") {
    urls.push(...(value.match(/https?:\/\/[^\s"'<>]+/gi) || []).map((url) => url.replace(/[),.;]+$/g, "")));
    return urls;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectUrls(item, urls));
    return urls;
  }
  if (typeof value === "object") Object.values(value).forEach((item) => collectUrls(item, urls));
  return urls;
}

function firstUrl(source, names) {
  const value = firstValue(source, names);
  if (Array.isArray(value)) return value.find((item) => typeof item === "string" && /^https?:\/\//i.test(item)) || "";
  if (value && typeof value === "object") return firstUrl(value, Object.keys(value));
  const url = String(value || "").trim();
  return /^https?:\/\//i.test(url) ? url : "";
}

function uniqueUrls(urls) {
  return [...new Set(urls.filter((url) => /^https?:\/\//i.test(url)))];
}

function reportUrlFromNumber(reportNumber) {
  const clean = String(reportNumber || "").trim();
  if (!clean) return "";
  const reportId = /^LG/i.test(clean) ? clean : `LG${clean}`;
  return `https://www.igi.org/verify-your-report/?r=${encodeURIComponent(reportId)}`;
}

function vendorAssetUrl(stockNumber, file) {
  const clean = String(stockNumber || "").trim();
  return clean ? `https://dna3.dnalinks.in/${encodeURIComponent(clean)}/${file}` : "";
}

function reportNumberFromUrl(url) {
  const match = String(url || "").match(/(?:^|[^\dA-Z])(LG\d{5,}|[A-Z]{1,5}\d{5,}|\d{6,})(?:[^\dA-Z]|$)/i);
  return match ? match[1].toUpperCase() : "";
}

function searchableRawText(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) return value.map(searchableRawText).join(" ");
  if (typeof value === "object") return Object.entries(value).map(([key, item]) => `${key} ${searchableRawText(item)}`).join(" ");
  return "";
}

function isAllowedLooseCvdDiamond(raw, diamond) {
  const rawText = searchableRawText(raw);
  const combined = `${rawText} ${Object.values(diamond).filter((value) => typeof value === "string" || typeof value === "number").join(" ")}`;
  const carat = Number(diamond.carat);
  const hasCvd = /\bCVD\b/i.test(combined);
  const hasHpht = /\bHPHT\b/i.test(combined);
  const jewelryTerms = /\b(ring|rings|setting|settings|mounting|mountings|pendant|pendants|bracelet|bracelets|earring|earrings|necklace|necklaces|chain|chains|watch|watches|band|bands|semi[-\s]?mount|jewelry|jewellery)\b/i;
  const lab = String(diamond.lab || diamond.certificate || "").trim();
  const hasCertificate = lab || diamond.reportNumber || diamond.reportUrl;

  return (
    carat >= 1 &&
    hasCvd &&
    !hasHpht &&
    hasCertificate &&
    !jewelryTerms.test(combined)
  );
}

function extractRows(payload) {
  if (Array.isArray(payload)) return payload;
  const keys = ["Stock", "stock", "data", "diamonds", "results", "items", "inventory", "records", "rows"];
  for (const key of keys) {
    if (Array.isArray(payload?.[key])) return payload[key];
    if (Array.isArray(payload?.[key]?.data)) return payload[key].data;
  }
  return [];
}

function normalizeDiamond(raw, index, feed) {
  const feedType = feed === "certified-color" ? "certified_color" : "certified";
  const urls = uniqueUrls(collectUrls(raw));
  const stockNumber = String(firstValue(raw, ["stockNumber", "stock_number", "stock", "stockId", "stock_id", "sku", "lot", "lotNo", "stoneNo", "stone_no", "stoneId", "stone_id", "id", "diamondId", "diamond_id", "Stone ID", "StoneID", "Stone No", "Stone_No", "Stock #", "Stock No", "Stock_No"]) || `${feedType}-${index + 1}`).trim();
  const firstReportNumber = String(firstValue(raw, ["reportNumber", "report_number", "certificateNumber", "certificate_number", "certificateNo", "certificate_no", "certNumber", "cert_number", "certNo", "cert_no", "certiNo", "certi_no", "certiNumber", "certi_number", "labReportNo", "lab_report_no", "igi_no", "igiNo", "Report No", "ReportNo", "Report No.", "Cert No", "CertNo", "Cert No.", "Certificate No", "CertificateNo", "Certificate No.", "Certi_NO", "CERTI_NO", "CERTIFICATE_NO", "REPORTNO"]) || "").trim();
  const imageUrl = firstUrl(raw, ["imageUrl", "image_url", "image", "diamondImage", "diamond_image", "imageLink", "image_link", "thumbnail", "photo", "photoUrl", "Image Link", "ImageLink", "Diamond Image"])
    || urls.find((url) => /still|image|photo|picture|jpg|jpeg|png|webp/i.test(url) && !/certificate|cert|report|pdf/i.test(url))
    || vendorAssetUrl(stockNumber, "still.jpg");
  const reportUrl = firstUrl(raw, ["reportUrl", "report_url", "certificateUrl", "certificate_url", "certUrl", "cert_url", "igiReport", "igi_report", "labReport", "lab_report", "Certificate Link", "CertificateLink", "Cert Link", "CertLink", "Report Link"])
    || urls.find((url) => /certificate|cert|report|igi|pdf/i.test(url))
    || reportUrlFromNumber(firstReportNumber);
  const reportNumber = firstReportNumber || reportNumberFromUrl(reportUrl);
  const lab = String(firstValue(raw, ["lab", "cert", "certificate", "lab_name", "labName", "Lab Name", "Lab"]) || (reportNumber ? "IGI" : "")).trim();
  const price = firstValue(raw, ["price", "totalPrice", "total_price", "cashPrice", "cash_price", "salePrice", "sale_price", "netPrice", "net_price", "amount", "rate", "Price", "Total Price", "Sale Price", "Net Price", "Cash Price"]);
  const videoUrl = firstUrl(raw, ["videoUrl", "video_url", "video", "movie", "360", "view360", "view_360", "Video Link", "VideoLink"])
    || urls.find((url) => /video|360|mp4|html/i.test(url) && !/certificate|cert|report|pdf/i.test(url))
    || "";
  const growthMethod = String(firstValue(raw, ["growthMethod", "growth_method", "diamondType", "diamond_type", "type2", "Type2", "method", "Method", "grown", "Grown", "grownBy", "grown_by"]) || "").trim();

  return {
    id: stockNumber,
    stockNumber,
    shape: String(firstValue(raw, ["shape", "diamondShape", "diamond_shape", "Shape Name", "ShapeName"]) || "").trim(),
    carat: Number(firstValue(raw, ["carat", "carats", "weight", "cts", "ct", "size", "caratWeight", "carat_weight", "Carat Wt", "CaratWt"])) || "",
    color: String(firstValue(raw, ["color", "diamondColor", "diamond_color", "fancyColor", "fancy_color", "col"]) || "").trim(),
    clarity: String(firstValue(raw, ["clarity", "diamondClarity", "diamond_clarity", "cla", "purity"]) || "").trim(),
    cut: String(firstValue(raw, ["cut", "cutGrade", "cut_grade", "make", "Cut Grade", "CutGrade"]) || "").trim(),
    polish: String(firstValue(raw, ["polish", "polishGrade", "polish_grade", "Polish"]) || "").trim(),
    symmetry: String(firstValue(raw, ["symmetry", "symmetryGrade", "symmetry_grade", "Symmetry"]) || "").trim(),
    certificate: lab,
    lab,
    reportNumber,
    price: price === "" ? "" : String(price).trim(),
    imageUrl,
    reportUrl,
    videoUrl,
    growthMethod,
    mediaUrl: imageUrl || "",
    mediaLinks: [
      ["View Diamond Photo", imageUrl, "image"],
      ["View IGI Report", reportUrl, "report"],
      ["View Diamond Video", videoUrl, "media"],
    ].filter(([, url]) => url).map(([label, url, type]) => ({ label, url, type })),
    diamondType: feed === "certified-color" ? "Certified Color Diamond" : "Certified Diamond",
    feedType,
  };
}

async function fetchFeed(feed, page = 1) {
  const url = buildLgdUrl(feed, page);
  const response = await fetch(url, { headers: { Accept: "application/json" } });
  const text = await response.text();
  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    throw new Error(`LGD ${feed} feed returned a non-JSON response.`);
  }
  const rows = extractRows(payload);
  const message = String(payload?.Message || payload?.message || payload?.error || "");
  if (!response.ok) throw new Error(message || `LGD ${feed} feed failed with status ${response.status}.`);
  if (/15 minute|limit|throttle|too many/i.test(message) && rows.length === 0) throw new Error(message);
  const diamonds = rows
    .map((row, index) => ({ raw: row, diamond: normalizeDiamond(row, index, feed) }))
    .filter(({ raw, diamond }) => isAllowedLooseCvdDiamond(raw, diamond))
    .map(({ diamond }) => diamond);
  return {
    statusCode: response.status,
    diamonds,
  };
}

function routeFeed(feed) {
  return async function handler(req, res) {
    const page = Math.max(1, Number(new URL(req.url, "http://localhost").searchParams.get("page") || 1) || 1);
    const missing = missingEnv(feed);
    if (missing.length) {
      sendJson(res, 500, {
        ok: false,
        diamonds: [],
        count: 0,
        missingEnv: missing,
        message: FALLBACK_MESSAGE,
        error: `Missing server environment variable${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}`,
      });
      return;
    }

    const cache = feedCache[feed];
    const now = Date.now();
    if (cache.diamonds.length && now - cache.fetchedAt < CACHE_TTL_MS) {
      sendJson(res, 200, {
        ok: true,
        cached: true,
        feed,
        page,
        count: cache.diamonds.length,
        diamonds: cache.diamonds,
        fetchedAt: new Date(cache.fetchedAt).toISOString(),
        message: "",
      });
      return;
    }

    try {
      const result = await fetchFeed(feed, page);
      if (!result.diamonds.length) {
        if (cache.diamonds.length) {
          sendJson(res, 200, {
            ok: true,
            cached: true,
            stale: true,
            feed,
            page,
            count: cache.diamonds.length,
            diamonds: cache.diamonds,
            fetchedAt: new Date(cache.fetchedAt).toISOString(),
            message: FALLBACK_MESSAGE,
            error: "The LGD feed returned no diamonds for this page.",
          });
          return;
        }
        sendJson(res, 200, { ok: false, cached: false, feed, page, count: 0, diamonds: [], message: FALLBACK_MESSAGE, error: "The LGD feed returned no diamonds for this page." });
        return;
      }

      feedCache[feed] = { diamonds: result.diamonds, fetchedAt: Date.now(), error: "" };
      sendJson(res, 200, {
        ok: true,
        cached: false,
        feed,
        page,
        count: result.diamonds.length,
        diamonds: result.diamonds,
        fetchedAt: new Date(feedCache[feed].fetchedAt).toISOString(),
        message: "",
      });
    } catch (error) {
      if (cache.diamonds.length) {
        sendJson(res, 200, {
          ok: true,
          cached: true,
          stale: true,
          feed,
          page,
          count: cache.diamonds.length,
          diamonds: cache.diamonds,
          fetchedAt: new Date(cache.fetchedAt).toISOString(),
          message: FALLBACK_MESSAGE,
          error: error?.message || FALLBACK_MESSAGE,
        });
        return;
      }
      sendJson(res, 200, { ok: false, cached: false, feed, page, count: 0, diamonds: [], message: FALLBACK_MESSAGE, error: error?.message || FALLBACK_MESSAGE });
    }
  };
}

async function testDiamondApi(req, res) {
  const payload = {
    ok: true,
    environment: {
      "LGD_API_KEY loaded": envStatus().LGD_API_KEY ? "yes" : "no",
      "LGD_CERTIFIED_URL loaded": envStatus().LGD_CERTIFIED_URL ? "yes" : "no",
      "LGD_CERTIFIED_COLOR_URL loaded": envStatus().LGD_CERTIFIED_COLOR_URL ? "yes" : "no",
    },
    certified: { statusCode: null, sampleItemCount: 0, error: "" },
    certifiedColor: { statusCode: null, sampleItemCount: 0, error: "" },
  };

  for (const [feed, key] of [["certified", "certified"], ["certified-color", "certifiedColor"]]) {
    try {
      const result = await fetchFeed(feed, 1);
      payload[key].statusCode = result.statusCode;
      payload[key].sampleItemCount = result.diamonds.length;
    } catch (error) {
      payload[key].error = error?.message || "Diamond API test failed.";
    }
  }

  sendJson(res, 200, payload);
}

module.exports = {
  FALLBACK_MESSAGE,
  envStatus,
  fetchFeed,
  routeFeed,
  sendJson,
  testDiamondApi,
};
