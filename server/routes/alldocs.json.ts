// Every page's path, title and description, as JSON (prerendered).
export default defineEventHandler(async (event) => {
  const [landing, docs] = await Promise.all([
    queryCollection(event, "landing").select("path", "title", "description").all(),
    // Pages only: folder settings (.navigation.yml) are stored as rows too.
    queryCollection(event, "docs").where("extension", "=", "md").select("path", "title", "description").all(),
  ]);
  return [...landing, ...docs].map((d) => ({
    path: d.path,
    title: d.title,
    description: d.description ?? "",
  }));
});
