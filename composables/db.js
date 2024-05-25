import {DataTypes, Sequelize} from "sequelize";
import {join} from "path";


const db = new Sequelize({
    dialect: 'sqlite',
    storage: join('/mnt/Data/Didattica/Hypermedia/23_24/t06-nuxt','database.sqlite')
})

await db.authenticate()

const Dogs = db.define('dogs',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    createdAt: false,
    updatedAt: false,

})

await Dogs.sync()
if(await Dogs.count()===0)
    await Dogs.bulkCreate([
        {
            name: 'Rex',
            breed: 'German Shepherd'
        },
        {
            name: 'Fuffy',
            breed: 'Labrador'
        },
        {
            name: 'Doggo',
            breed: 'Basset town'
        }
    ])

export function useDogsDb(){
    return Dogs
}