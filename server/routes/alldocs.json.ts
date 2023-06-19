import { serverQueryContent } from "#content/server";
export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).where({_partial: false, _draft: false}).find();
  return docs.map((d) => ({
    path: d._path,
    title: d.title,
    description: d.description
  }));
});
