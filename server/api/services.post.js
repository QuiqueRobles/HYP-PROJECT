import { useServicesDb } from "~/composables/db.js";

const db = useServicesDb();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const newService = await db.create(body);
  return newService;
});
