import {useDogsDb} from "~/composables/db.js";

const db = useDogsDb()
export default defineEventHandler(async (e)=>{
    return await db.findAll()
})