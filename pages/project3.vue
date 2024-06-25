<template>
  <div class="project-page">
    <div class="container">
      <h2>{{ project.title }}</h2>
      <img :src="project.picture_url" :alt="`Image of ${project.title}`" class="project-image">
      <p>{{ project.description }}</p>
      <div class="responsible-details">
        <br>
        <hr>
        <p>Responsible person:</p>
        <div class="responsible-person">
          <img :src="responsiblePerson.picture_url" :alt="`Image of ${responsiblePerson.name}`" class="responsible-image" />
          <div class="responsible-name">
            <router-link class="link-item" v-if="responsiblePerson.id" :to="{ path: '/people', hash: `#person-${responsiblePerson.id}` }">{{ responsiblePerson.name }}</router-link>
            <span v-else>{{ responsiblePerson.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useProjectsStore } from '~/stores/projects';
import { usePeopleStore } from '~/stores/people';

export default {
  name: 'Project3Page',
  setup() {
    const projectsStore = useProjectsStore();
    const peopleStore = usePeopleStore();

    // Simulate data fetching
    onMounted(async () => {
      await projectsStore.fetchProjects(); // Replace with actual fetch function
      await peopleStore.fetchPeople(); // Replace with actual fetch function
    });

    const project = computed(() => {
      return projectsStore.projects.find(project => project.id === 3);
    });

    const responsiblePerson = computed(() => {
      if (project.value) {
        return peopleStore.people.find(person => String(person.id) === String(project.value.responsible_person_id)) || {};
      }
      return {};
    });

    return { project, responsiblePerson };
  }
};
</script>

<style scoped>
.container {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  text-align: center;
}

.project-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.responsible-details {
  width: 100%;
  text-align: left;
}

.responsible-person {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}

.responsible-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.responsible-name {
  flex: 1;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #6a0dad;
}

p {
  font-size: 1rem;
}

.link-item {
  color: #6a0dad;
  text-decoration: none;
  transition: color 0.3s, border-bottom 0.3s;
}

.link-item:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .container {
    padding: 1rem;
  }

  .project-image {
    max-height: 300px;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 0.875rem;
  }
}
</style>
