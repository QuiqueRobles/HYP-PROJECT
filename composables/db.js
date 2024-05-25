import { DataTypes, Sequelize } from "sequelize";
import { join } from "path";

const db = new Sequelize({
  dialect: 'sqlite',
  storage: join('C:', 'Users', 'qrobl', 'OneDrive - Fundación Universitaria San Pablo CEU', 'Escritorio', 'QUIQUE', 'CEU', 'Quinto', 'Secondo Cuatrimestre', 'Hypermedia Applications', 'HYP-PROJECT', 'database.db')
});

await db.authenticate();

const People = db.define('People', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  picture_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cv: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  createdAt: false,
  updatedAt: false,
});

await People.sync();

export function usePeopleDb() {
  return People;
}
