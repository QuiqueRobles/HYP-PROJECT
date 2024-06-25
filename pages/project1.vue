<template>
  <div class="project-page" v-if="!loading">
    <div class="container">
      <h2>{{ project.title }}</h2>
      <div class="content">
        <img :src="project.picture_url" :alt="`Image of ${project.title}`" class="project-image">
        <div class="description">
          <p>{{ project.description }}</p>
          <br>
          <hr>
          <div class="responsible-details">
            <br>
            <div class="responsible-person">
              <div>Responsible person:</div>
              <img :src="responsiblePerson.picture_url" :alt="`Image of ${responsiblePerson.name}`" class="responsible-image" />
              <div class="responsible-name">
                <router-link class="link-item" v-if="responsiblePerson.id" :to="{ path: '/people', hash: `#person-${responsiblePerson.id}` }">{{ responsiblePerson.name }}</router-link>
                <span v-else>{{ responsiblePerson.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="loading">
    <p>Loading...</p>
  </div>
</template>




<script>
import { ref, computed, onMounted } from 'vue';
import { useProjectsStore } from '~/stores/projects';
import { usePeopleStore } from '~/stores/people';

export default {
  name: 'Project1Page',
  setup() {
    const projectsStore = useProjectsStore();
    const peopleStore = usePeopleStore();
    const loading = ref(true);

    // Simulate data fetching
    onMounted(async () => {
      try {
        await projectsStore.fetchProjects(); // Replace with actual fetch function
        await peopleStore.fetchPeople(); // Replace with actual fetch function
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loading.value = false;
      }
    });

    const project = computed(() => {
      return projectsStore.projects.find(project => project.id === 1);
    });

    const responsiblePerson = computed(() => {
      if (project.value) {
        return peopleStore.people.find(person => String(person.id) === String(project.value.responsible_person_id)) || {};
      }
      return {};
    });

    return { project, responsiblePerson, loading };
  }
};
</script>

<style scoped>
.container {
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
}

h2 {
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #6a0dad;
  text-align: center;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  border: 2px solid #6a0dad; /* Borde morado */
  border-radius: 8px; /* Bordes redondeados */
  padding: 1rem; /* Espacio interno */
}

.project-image {
  width: 100%;
  max-width: 400px; /* Tamaño máximo de la imagen */
  max-height: 400px; /* Tamaño máximo de la imagen */
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  flex: 1;
}

.description {
  flex: 1;
  margin-left: 2rem;
  font-size: 0.9rem; /* Texto más pequeño */
  text-align: justify; /* Texto justificado */
}

.separator {
  border: 0;
  height: 2px;
  background: #6a0dad;
  margin: 2rem 0;
}

.responsible-details {
  font-size: 1rem;
  text-align: left;
}

.responsible-label {
  font-weight: bold;
}

.responsible-person {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}

.responsible-name {
  margin-right: 1rem;   
}

.responsible-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

p {
  font-size: 0.9rem; /* Texto más pequeño */
  color: #333;
  text-align: justify; /* Texto justificado */
}

.link-item {
  color: #6a0dad;
  text-decoration: none;
  transition: color 0.3s, border-bottom 0.3s;
}

.link-item:hover {
  text-decoration: underline;
}

.loading {
  text-align: center;
  font-size: 1.5rem;
  color: #6a0dad;
  padding: 2rem;
}

@media (max-width: 800px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .description {
    margin-left: 0;
  }
}

@media (max-width: 600px) {
  .container {
    padding: 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  .project-image {
    max-height: 300px;
  }

  p {
    font-size: 0.875rem;
  }
}
</style>
