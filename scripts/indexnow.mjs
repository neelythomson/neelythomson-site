// Tells Bing (and every IndexNow participant) which URLs changed, right after
// a production build. Runs as the npm postbuild step on Vercel; skipped
// elsewhere so local builds don't ping anyone.
import { readFileSync } from "node:fs";

const KEY = "9d79577e28d5528e8e2ec593f284c6c8";
const HOST = "neelythomson.com";

if (process.env.VERCEL_ENV !== "production") {
  console.log("indexnow: not a production build, skipping");
  process.exit(0);
}

const pages = JSON.parse(readFileSync(new URL("../src/data/pages.json", import.meta.url), "utf8"));
const urlList = pages.map((p) => `https://${HOST}${p.path}`);

try {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
  });
  console.log(`indexnow: ${res.status} for ${urlList.length} urls`);
} catch (e) {
  console.log("indexnow: failed", String(e));
}
