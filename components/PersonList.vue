<template>
  <div class="people-list">
    <h1>Lista de Personas</h1>
    <ul>
      <li v-for="person in people" :key="person.id" class="person-card">
        <div class="person-header">
          <img :src="person.picture_url" :alt="`Imagen de perfil de ${person.name}`" loading="lazy" class="profile-picture">
          <h2>{{ person.name }}</h2>
        </div>
        <p>{{ person.cv }}</p>
      </li>
    </ul>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import db from '@/plugins/db.js';

export default {
  async asyncData({ error }) {
    try {
      const query = "SELECT * FROM People";
      return new Promise((resolve, reject) => {
        db.all(query, [], (err, rows) => {
          if (err) {
            console.error(err.message);
            error({ statusCode: 500, message: 'Error al cargar la lista de personas' });
            reject(err);
          } else {
            resolve({ people: rows });
          }
        });
      });
    } catch (e) {
      error({ statusCode: 500, message: 'Error al cargar la lista de personas' });
      return { people: [], error: 'Error al cargar la lista de personas' };
    }
  },
  data() {
    return {
      people: [],
      error: null,
    };
  },
};
</script>

<style scoped>
.people-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.person-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.3s;
}

.person-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.person-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.profile-picture {
  border-radius: 50%;
  margin-right: 12px;
  width: 50px;
  height: 50px;
}

h2 {
  margin: 0;
  font-size: 1.2em;
}

.error {
  color: red;
  text-align: center;
  margin-top: 20px;
}

@media (max-width: 600px) {
  .person-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .person-header {
    flex-direction: column;
    align-items: center;
  }

  .profile-picture {
    margin-right: 0;
    margin-bottom: 12px;
  }
}
</style>
