import { useTestimonialsDb } from "~/composables/db.js";

const db = useTestimonialsDb();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const newTestimonial = await db.create(body);
  return newTestimonial;
});
