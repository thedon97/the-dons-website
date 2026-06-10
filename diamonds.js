const { FALLBACK_MESSAGE, fetchFeed, sendJson } = require("./_diamond-utils");

module.exports = async function handler(req, res) {
  const page = Math.max(1, Number(new URL(req.url, "http://localhost").searchParams.get("page") || 1) || 1);

  try {
    const results = await Promise.allSettled([
      fetchFeed("certified", page),
      fetchFeed("certified-color", page),
    ]);
    const diamonds = results.flatMap((result) => result.status === "fulfilled" ? result.value.diamonds : []);
    const errors = results
      .filter((result) => result.status === "rejected")
      .map((result) => result.reason?.message || "LGD feed unavailable.");

    sendJson(res, 200, {
      ok: diamonds.length > 0,
      cached: false,
      page,
      count: diamonds.length,
      diamonds,
      message: diamonds.length ? "" : FALLBACK_MESSAGE,
      error: errors.join(" | "),
    });
  } catch (error) {
    sendJson(res, 200, {
      ok: false,
      cached: false,
      page,
      count: 0,
      diamonds: [],
      message: FALLBACK_MESSAGE,
      error: error?.message || FALLBACK_MESSAGE,
    });
  }
};
