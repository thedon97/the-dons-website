const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname);
const preferredPort = Number(process.env.PORT || 4173);
const diamondApiUrl = process.env.LABGROWN_DIAMOND_API_URL || "https://lgdusallc.com/developer-api/diamond";
const diamondApiKey = process.env.LABGROWN_DIAMOND_API_KEY || "";
const diamondCacheFile = path.join(root, ".diamond-cache.json");
const allowedColors = new Set(["D", "E", "F"]);
const allowedClarities = new Set(["VS1", "VS2", "VVS1", "VVS2"]);
const diamondCacheTtlMs = Number(process.env.DIAMOND_CACHE_TTL_MS || 15 * 60 * 1000);
let diamondCache = {
  diamonds: [],
  fetchedAt: 0,
  source: "",
};

function loadDiamondCache() {
  try {
    if (!fs.existsSync(diamondCacheFile)) return;
    const cached = JSON.parse(fs.readFileSync(diamondCacheFile, "utf8"));
    if (Array.isArray(cached.diamonds) && cached.diamonds.length && Number(cached.fetchedAt)) {
      diamondCache = {
        diamonds: cached.diamonds,
        fetchedAt: Number(cached.fetchedAt),
        source: cached.source || "Labgrown Diamond API",
      };
    }
  } catch (error) {
    console.error("Unable to read diamond cache:", error?.message || error);
  }
}

function saveDiamondCache() {
  try {
    fs.writeFileSync(diamondCacheFile, JSON.stringify(diamondCache), "utf8");
  } catch (error) {
    console.error("Unable to write diamond cache:", error?.message || error);
  }
}

loadDiamondCache();
process.on("uncaughtException", (error) => {
  console.error("Preview server recovered from error:", error?.message || error);
});
process.on("unhandledRejection", (error) => {
  console.error("Preview server recovered from async error:", error?.message || error);
});
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store, no-cache, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  });
  res.end(body);
}

function sendJson(res, status, payload) {
  send(res, status, JSON.stringify(payload), "application/json; charset=utf-8");
}

function firstValue(source, names) {
  const lookup = {};
  for (const [key, value] of Object.entries(source || {})) {
    lookup[key.replace(/[^a-z0-9]/gi, "").toLowerCase()] = value;
  }
  for (const name of names) {
    if (source && source[name] !== undefined && source[name] !== null && source[name] !== "") return source[name];
    const normalizedName = name.replace(/[^a-z0-9]/gi, "").toLowerCase();
    if (lookup[normalizedName] !== undefined && lookup[normalizedName] !== null && lookup[normalizedName] !== "") return lookup[normalizedName];
  }
  return "";
}

function firstUrl(source, names) {
  const value = firstValue(source, names);
  if (Array.isArray(value)) {
    const found = value.find((item) => typeof item === "string" && /^https?:\/\//i.test(item));
    return found || "";
  }
  if (value && typeof value === "object") {
    return firstUrl(value, Object.keys(value));
  }
  const url = String(value || "").trim();
  return /^https?:\/\//i.test(url) ? url : "";
}

function collectUrls(value, urls = []) {
  if (value === null || value === undefined) return urls;
  if (typeof value === "string") {
    const matches = value.match(/https?:\/\/[^\s"'<>]+/gi) || [];
    urls.push(...matches.map((url) => url.replace(/[),.;]+$/g, "")));
    return urls;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectUrls(item, urls));
    return urls;
  }
  if (typeof value === "object") {
    Object.values(value).forEach((item) => collectUrls(item, urls));
  }
  return urls;
}

function uniqueUrls(urls) {
  return [...new Set(urls.filter((url) => /^https?:\/\//i.test(url)))];
}

function igiReportUrl(reportNumber) {
  const clean = String(reportNumber || "").trim();
  if (!clean) return "";
  const reportId = /^LG/i.test(clean) ? clean : `LG${clean}`;
  return `https://www.igi.org/verify-your-report/?r=${encodeURIComponent(reportId)}`;
}

function reportNumberFromUrl(url) {
  const match = String(url || "").match(/(?:^|[^\dA-Z])(LG\d{6,}|[A-Z]{1,4}\d{6,}|\d{6,})(?:[^\dA-Z]|$)/i);
  return match ? match[1].toUpperCase() : "";
}

function vendorAssetUrl(id, file) {
  const cleanId = String(id || "").trim();
  return cleanId ? `https://dna3.dnalinks.in/${encodeURIComponent(cleanId)}/${file}` : "";
}

function normalizeDiamond(raw, index) {
  const media = raw.media || raw.medias || raw.assets || raw.links || {};
  const id = String(firstValue(raw, ["id", "diamondId", "diamond_id", "stockNumber", "stock_number", "stock", "stockId", "stock_id", "sku", "lot", "lotNo", "Stone ID", "StoneID", "Stock #", "Stock No"]) || `lgd-${index}`);
  const allUrls = uniqueUrls(collectUrls(raw));
  const cert = firstValue(raw, ["cert", "certificate", "lab", "lab_name", "labName", "Lab Name", "Lab"]);
  const reportNumber = firstValue(raw, ["reportNumber", "report_number", "certificateNumber", "certificate_number", "certNumber", "cert_number", "labReportNo", "lab_report_no", "igi_no", "igiNo", "Report No", "ReportNo", "Cert No", "CertNo", "Certificate No"]);
  const imageUrl = firstUrl(raw, ["imageUrl", "image_url", "image", "diamondImage", "diamond_image", "imageLink", "image_link", "thumbnail", "photo", "photoUrl", "Image Link", "ImageLink", "Diamond Image"])
    || allUrls.find((url) => /still|image|photo|picture|jpg|jpeg|png|webp/i.test(url) && !/certificate|cert|report|pdf/i.test(url))
    || vendorAssetUrl(id, "still.jpg");
  const videoUrl = firstUrl(raw, ["videoUrl", "video_url", "video", "videoLink", "video_link", "movie", "movieUrl", "video360", "video_360", "view360", "view_360", "Video Link", "VideoLink", "Video Url", "VideoUrl", "360 View"])
    || allUrls.find((url) => /video|360|movie|mp4|view/i.test(url) && !/certificate|cert|report|pdf/i.test(url))
    || vendorAssetUrl(id, "video.mp4");
  const reportUrl = firstUrl(raw, ["reportUrl", "report_url", "certificateUrl", "certificate_url", "certUrl", "cert_url", "igiReport", "igi_report", "labReport", "lab_report", "Certificate Link", "CertificateLink", "Cert Link", "CertLink", "Report Link"])
    || allUrls.find((url) => /certificate|cert|report|igi|pdf/i.test(url))
    || igiReportUrl(reportNumber);
  const finalReportNumber = reportNumber || reportNumberFromUrl(reportUrl);
  const mediaLinks = [
    ["View Vendor Image", imageUrl, "image"],
    ["View 360 / Video", videoUrl || firstUrl(media, ["video", "videoUrl", "video_url", "view360", "view_360", "html", "url"]), "video"],
    ["View IGI Report", reportUrl || firstUrl(media, ["report", "reportUrl", "certificate", "certificateUrl", "cert"]), "report"],
  ].filter(([, url]) => url).map(([label, url, type]) => ({ label, url, type }));

  return {
    id,
    shape: String(firstValue(raw, ["shape", "diamondShape", "diamond_shape", "Shape Name", "ShapeName"]) || "Lab-grown").trim(),
    carat: Number(firstValue(raw, ["carat", "carats", "cts", "ct", "size", "weight", "caratWeight", "carat_weight", "Carat Wt", "CaratWt"])) || "",
    color: String(firstValue(raw, ["color", "diamondColor", "diamond_color", "col"]) || "").trim(),
    clarity: String(firstValue(raw, ["clarity", "diamondClarity", "diamond_clarity", "cla", "purity"]) || "").trim(),
    cut: String(firstValue(raw, ["cut", "cutGrade", "cut_grade", "make", "Cut Grade", "CutGrade"]) || "").trim(),
    certificate: String(cert || (finalReportNumber ? "IGI" : "")).trim(),
    reportNumber: String(finalReportNumber || "").trim(),
    reportUrl: reportUrl || "",
    videoUrl: videoUrl || "",
    imageUrl: imageUrl || "",
    mediaUrl: imageUrl || videoUrl || "",
    mediaLinks,
    measurements: String(firstValue(raw, ["measurements", "measurement", "measure", "dimensions", "dimension", "lengthWidthDepth", "length_width_depth", "Measurement", "Measurement Details", "LxWxD", "Length Width Depth"]) || "").trim(),
    availability: String(firstValue(raw, ["availability", "status", "stockStatus", "stock_status", "available"]) || "").trim(),
  };
}

function allowedDiamond(diamond) {
  const availability = String(diamond.availability || "").toUpperCase();
  return Number(diamond.carat) > 1
    && allowedColors.has(String(diamond.color || "").toUpperCase())
    && allowedClarities.has(String(diamond.clarity || "").toUpperCase())
    && availability === "AVAILABLE"
    && Boolean(diamond.imageUrl)
    && Boolean(diamond.reportUrl)
    && Boolean(diamond.reportNumber);
}

function extractDiamondRows(payload) {
  if (Array.isArray(payload)) return payload;
  const candidates = ["Stock", "stock", "data", "diamonds", "results", "items", "inventory", "records", "rows"];
  for (const key of candidates) {
    if (Array.isArray(payload?.[key])) return payload[key];
    if (Array.isArray(payload?.[key]?.data)) return payload[key].data;
  }
  return [];
}

async function handleDiamondApi(req, res) {
  if (!diamondApiKey) {
    sendJson(res, 500, { ok: false, diamonds: [], error: "LABGROWN_DIAMOND_API_KEY is not set" });
    return;
  }
  const incoming = new URL(req.url, `http://${req.headers.host || "127.0.0.1"}`);
  const now = Date.now();
  if (diamondCache.diamonds.length && now - diamondCache.fetchedAt < diamondCacheTtlMs) {
    sendJson(res, 200, {
      ok: true,
      count: diamondCache.diamonds.length,
      diamonds: diamondCache.diamonds,
      source: diamondCache.source || "Labgrown Diamond API",
      cached: true,
      fetchedAt: new Date(diamondCache.fetchedAt).toISOString(),
      refreshAfterSeconds: Math.max(0, Math.ceil((diamondCacheTtlMs - (now - diamondCache.fetchedAt)) / 1000)),
      page: incoming.searchParams.get("page") || "1",
    });
    return;
  }
  const vendorUrl = new URL(diamondApiUrl);
  vendorUrl.searchParams.set("type", "certified");
  vendorUrl.searchParams.set("page", incoming.searchParams.get("page") || "1");
  vendorUrl.searchParams.set("key", diamondApiKey);

  const response = await fetch(vendorUrl, { headers: { Accept: "application/json" } });
  const text = await response.text();
  let payload;
  try {
    payload = JSON.parse(text);
  } catch {
    if (diamondCache.diamonds.length) {
      sendJson(res, 200, {
        ok: true,
        count: diamondCache.diamonds.length,
        diamonds: diamondCache.diamonds,
        source: diamondCache.source || "Labgrown Diamond API",
        cached: true,
        stale: true,
        fetchedAt: new Date(diamondCache.fetchedAt).toISOString(),
        refreshAfterSeconds: 15 * 60,
        vendorMessage: `Diamond API returned non-JSON response (${response.status})`,
        page: incoming.searchParams.get("page") || "1",
      });
      return;
    }
    throw new Error(`Diamond API returned non-JSON response (${response.status})`);
  }
  if (!response.ok) {
    if (diamondCache.diamonds.length) {
      sendJson(res, 200, {
        ok: true,
        count: diamondCache.diamonds.length,
        diamonds: diamondCache.diamonds,
        source: diamondCache.source || "Labgrown Diamond API",
        cached: true,
        stale: true,
        fetchedAt: new Date(diamondCache.fetchedAt).toISOString(),
        refreshAfterSeconds: 15 * 60,
        vendorMessage: payload?.message || payload?.error || "Diamond API request failed",
        page: incoming.searchParams.get("page") || "1",
      });
      return;
    }
    sendJson(res, response.status, { ok: false, diamonds: [], error: payload?.message || payload?.error || "Diamond API request failed" });
    return;
  }
  const vendorMessage = String(payload?.Message || payload?.message || "");
  if (/15 minute|limit|throttle|too many/i.test(vendorMessage) && extractDiamondRows(payload).length === 0) {
    if (diamondCache.diamonds.length) {
      sendJson(res, 200, {
        ok: true,
        count: diamondCache.diamonds.length,
        diamonds: diamondCache.diamonds,
        source: diamondCache.source || "Labgrown Diamond API",
        cached: true,
        stale: true,
        fetchedAt: new Date(diamondCache.fetchedAt).toISOString(),
        refreshAfterSeconds: 15 * 60,
        vendorMessage,
        page: incoming.searchParams.get("page") || "1",
      });
      return;
    }
    sendJson(res, 429, { ok: false, diamonds: [], error: vendorMessage, retryAfterSeconds: 15 * 60 });
    return;
  }
  const diamonds = extractDiamondRows(payload).map(normalizeDiamond).filter(allowedDiamond);
  if (diamonds.length) {
    diamondCache = {
      diamonds,
      fetchedAt: Date.now(),
      source: "Labgrown Diamond API",
    };
    saveDiamondCache();
  }
  sendJson(res, 200, {
    ok: true,
    count: diamonds.length,
    diamonds,
    source: "Labgrown Diamond API",
    cached: false,
    fetchedAt: new Date(diamondCache.fetchedAt || Date.now()).toISOString(),
    refreshAfterSeconds: Math.ceil(diamondCacheTtlMs / 1000),
    page: incoming.searchParams.get("page") || "1",
  });
}

function resolveFile(req) {
  let pathname = decodeURIComponent(req.url.split("?")[0]);
  if (pathname === "/") pathname = "/index.html";
  const file = path.resolve(path.join(root, pathname));
  if (!file.startsWith(root + path.sep) && file !== root) return { forbidden: true };
  return { file };
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/api/diamonds")) {
    handleDiamondApi(req, res).catch((error) => {
      sendJson(res, 502, { ok: false, diamonds: [], error: error.message || "Diamond API unavailable" });
    });
    return;
  }
  if (req.url.startsWith("/api/")) {
    sendJson(res, 404, { ok: false, error: "API route not found" });
    return;
  }
  const { file, forbidden } = resolveFile(req);
  if (forbidden) {
    send(res, 403, "Forbidden");
    return;
  }

  const finalFile = fs.existsSync(file) && fs.statSync(file).isFile()
    ? file
    : path.join(root, "index.html");
  fs.readFile(finalFile, (error, buffer) => {
    if (error) {
      send(res, 404, "Not found");
      return;
    }
    send(res, 200, buffer, types[path.extname(finalFile)] || "application/octet-stream");
  });
});

function listen(port) {
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && port < preferredPort + 20) {
      listen(port + 1);
      return;
    }
    throw error;
  });
  server.listen(port, "127.0.0.1", () => {
    console.log(`Clean frontend preview running at http://127.0.0.1:${port}/`);
  });
}

listen(preferredPort);
