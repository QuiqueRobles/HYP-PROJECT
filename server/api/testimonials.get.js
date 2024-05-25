import { useTestimonialsDb } from "~/composables/db.js";

const db = useTestimonialsDb();
export default defineEventHandler(async (e) => {
  return await db.findAll();
});
