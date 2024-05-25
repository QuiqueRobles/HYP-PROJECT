import { useServicesDb } from "~/composables/db.js";

const db = useServicesDb();
export default defineEventHandler(async (e) => {
  return await db.findAll();
});
