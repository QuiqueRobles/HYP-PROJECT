import { usePeopleDb } from "~/composables/db.js";

const db = usePeopleDb();
export default defineEventHandler(async (e) => {
  return await db.findAll();
});
