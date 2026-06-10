const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname);
const preferredPort = Number(process.env.PORT || 4173);
const diamondHandler = require("./api/diamonds");
const diamondCertifiedHandler = require("./api/diamonds/certified");
const diamondCertifiedColorHandler = require("./api/diamonds/certified-color");
const testDiamondHandler = require("./api/test-diamond-api");
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

function resolveFile(req) {
  let pathname = decodeURIComponent(req.url.split("?")[0]);
  if (pathname === "/") pathname = "/index.html";
  const file = path.resolve(path.join(root, pathname));
  if (!file.startsWith(root + path.sep) && file !== root) return { forbidden: true };
  return { file };
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/api/test-diamond-api")) {
    testDiamondHandler(req, res).catch((error) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=900");
      res.end(JSON.stringify({
        ok: false,
        message: "Diamond API test route is unavailable.",
        error: error?.message || "Diamond API test failed.",
      }));
    });
    return;
  }

  if (req.url.startsWith("/api/diamonds/certified-color")) {
    diamondCertifiedColorHandler(req, res).catch((error) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=900");
      res.end(JSON.stringify({
        ok: false,
        diamonds: [],
        count: 0,
        message: "Live diamond inventory is being updated. Contact us for real-time diamond options.",
        error: error?.message || "Certified color diamond API unavailable.",
      }));
    });
    return;
  }

  if (req.url.startsWith("/api/diamonds/certified")) {
    diamondCertifiedHandler(req, res).catch((error) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=900");
      res.end(JSON.stringify({
        ok: false,
        diamonds: [],
        count: 0,
        message: "Live diamond inventory is being updated. Contact us for real-time diamond options.",
        error: error?.message || "Certified diamond API unavailable.",
      }));
    });
    return;
  }

  if (req.url.startsWith("/api/diamonds")) {
    diamondHandler(req, res).catch((error) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=900");
      res.end(JSON.stringify({
        ok: false,
        diamonds: [],
        count: 0,
        message: "Live diamond inventory is being updated. Contact us for real-time diamond options.",
        error: error?.message || "Diamond API unavailable.",
      }));
    });
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
  server.listen(port, "0.0.0.0", () => {
    console.log(`Clean frontend preview running on port ${port}`);
  });
}

listen(preferredPort);
