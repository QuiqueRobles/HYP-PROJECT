import { useProjectsDb } from "~/composables/db.js";

const db = useProjectsDb();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const newProject = await db.create(body);
  return newProject;
});
