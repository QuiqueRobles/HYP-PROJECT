import { usePeopleDb } from "~/composables/db.js";

const db = usePeopleDb();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const newPerson = await db.create(body);
  return newPerson;
});
