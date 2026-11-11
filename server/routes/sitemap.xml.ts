import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async (event) => {
  // Pages only: `_dir.yml` folder settings and `_` partials have no URL.
  const docs = await serverQueryContent(event)
    .where({ _partial: false, _draft: false, _extension: "md" })
    .find();
  const sitemap = new SitemapStream({
    hostname: "https://fatduckgaming.com",
  });
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: "monthly",
    });
  }
  sitemap.end();
  return streamToPromise(sitemap);
});
