<template>
  <div>
    <h1>Lista de Personas</h1>
    <ul>
      <li v-for="person in people" :key="person.id">
        <h2>{{ person.name }}</h2>
        <img :src="person.picture_url" alt="Imagen de perfil">
        <p>{{ person.cv }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// Importa la conexión a la base de datos SQLite
import db from '@/plugins/db.js';

export default {
  data() {      
    return {
      people: []
    };
  },
  created() {
    this.fetchPeople();
  },
  methods: {
    fetchPeople() {
      // Consulta para obtener todas las personas de la tabla
      const query = "SELECT * FROM People";

      // Realiza la consulta a la base de datos
      db.all(query, [], (err, rows) => {
        if (err) {
          console.error(err.message);
          return;
        }
        // Asigna los resultados a la propiedad 'people'
        this.people = rows;
      });
    }
  }
};
</script>
