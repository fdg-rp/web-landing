// Serves built/public the way the production host does: a folder's
// index.html for its path, and 404.html (with a 404 status) for anything
// else. Used by the Playwright tests: `node test/support/serve.mjs [port]`.

import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(import.meta.dirname, "../../built/public");
const port = Number(process.argv[2] ?? process.env.PORT ?? 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".xml": "application/xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".wasm": "application/wasm",
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function fileFor(urlPath) {
  const path = normalize(decodeURIComponent(urlPath.split(/[?#]/)[0]));
  const base = join(root, path);
  if (!base.startsWith(root)) return undefined;
  for (const candidate of [base, join(base, "index.html"), `${base}.html`]) {
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }
  return undefined;
}

createServer((req, res) => {
  const file = fileFor(req.url ?? "/");
  const served = file ?? join(root, "404.html");
  res.writeHead(file ? 200 : 404, {
    "content-type": types[extname(served)] ?? "application/octet-stream",
  });
  createReadStream(served).pipe(res);
}).listen(port, () => console.log(`Serving ${root} on http://localhost:${port}`));
