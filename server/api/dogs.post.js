import {useDogsDb} from "~/composables/db.js";

const db = useDogsDb()
export default defineEventHandler(async (e)=>{
    try {
        const body = await readBody(e)
        const dog = JSON.parse(body)
        return await db.create(dog)
    }catch (e) {
        setResponseStatus(e,500)
    }
})