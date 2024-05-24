// db.js

const sqlite3 = require('sqlite3').verbose();

// Ruta de tu base de datos SQLite
const DB_PATH = 'instance/database.db';

// Abre la conexión a la base de datos
const db = new sqlite3.Database(DB_PATH, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error('Error al abrir la base de datos', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite');
    }
});

// Exporta la conexión para que pueda ser utilizada en otros módulos
module.exports = db;
