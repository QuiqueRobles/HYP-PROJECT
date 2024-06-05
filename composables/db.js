import { DataTypes, Sequelize } from "sequelize";
import path from "path";
const basePath = process.cwd();
const dbPath = path.join(basePath, 'database.db');
const db = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath
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

const Projects = db.define('Projects', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  picture_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  responsible_person_id: {
    type: DataTypes.INTEGER,
    references: {
      model: People,
      key: 'id'
    }
  },
}, {
  createdAt: false,
  updatedAt: false,
});

const Services = db.define('Services', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  picture_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  practical_info: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  responsible_person_id: {
    type: DataTypes.INTEGER,
    references: {
      model: People,
      key: 'id'
    }
  },
}, {
  createdAt: false,
  updatedAt: false,
});

const Testimonials = db.define('Testimonials', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  service_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Services,
      key: 'id'
    }
  },
  testimonial: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  createdAt: false,
  updatedAt: false,
});

await People.sync();
await Projects.sync();
await Services.sync();
await Testimonials.sync();

export function usePeopleDb() {
  return People;
}

export function useProjectsDb() {
  return Projects;
}

export function useServicesDb() {
  return Services;
}

export function useTestimonialsDb() {
  return Testimonials;
}
