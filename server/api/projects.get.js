import { useProjectsDb } from "~/composables/db.js";

const db = useProjectsDb();
export default defineEventHandler(async (e) => {
  return await db.findAll();
});
