import {useFetch} from "#app";
import init from "@parcel/watcher-wasm";

interface Dog {
    name:string,
    breed:string
}

export const useDogStore = defineStore('dogs',()=>{
    const dogs = reactive([] as Dog[])
    async function addDog(dog:Dog) {
        const body = JSON.stringify(dog)
        const response = await fetch('/api/dogs',{method:'POST',body})
        if(response.ok) dogs.push(dog)
    }
    async function init() {
        const {data} = await useFetch<any[]>('/api/dogs')
        const list = data.value
        if(list!=null) {
            dogs.splice(0,dogs.length)  //Clear the list
            dogs.push(...list)
        }
    }

    init()

    return {dogs,addDog}
})

