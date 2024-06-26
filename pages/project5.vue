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
              <img :src="responsiblePerson.picture_url" :alt="`Image of ${responsiblePerson.name}`"
                class="responsible-image" />
              <div class="responsible-name">
                <router-link class="link-item" v-if="responsiblePerson.id"
                  :to="{ path: '/people', hash: `#person-${responsiblePerson.id}` }">{{ responsiblePerson.name
                  }}</router-link>
                <span v-else>{{ responsiblePerson.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="additional-info">
        <h3>Program Highlights</h3>
        <ul>
          <li><strong>Awareness Campaigns:</strong> Organizes campaigns to educate the community about domestic
            violence, women's rights, and available support services.</li>
          <li><strong>Community Events:</strong> Hosts events such as health fairs, workshops, and seminars to engage
            with the community and provide valuable resources.</li>
          <li><strong>Partnerships:</strong> Collaborates with local businesses, schools, and organizations to amplify
            the reach and impact of our initiatives.</li>
        </ul>

        <h3>Achievements and Impact</h3>
        <ul>
          <li><strong>Community Engagement:</strong> Reached over 10,000 individuals through various outreach
            activities, significantly raising awareness about our services.</li>
          <li><strong>Resource Distribution:</strong> Distributed over 5,000 educational materials, including brochures,
            booklets, and posters, to inform the community about available resources.</li>
          <li><strong>Volunteer Involvement:</strong> Engaged more than 200 volunteers in our outreach efforts,
            fostering a spirit of community support and involvement.</li>
        </ul>

        <h3>Success Stories</h3>
        <ul>
          <li><strong>Empowered Community:</strong> "I learned about my rights and the support available through one of
            the outreach events. It changed my life," says Laura Smith, a program beneficiary.</li>
          <li><strong>Collective Action:</strong> "The community events brought us together and made us realize the
            power of collective action," shares John Doe, a local community leader.</li>
        </ul>

        <h3>Future Goals</h3>
        <ul>
          <li><strong>Expand Outreach:</strong> Plan to extend outreach activities to more rural and underserved areas,
            ensuring that everyone has access to information and support.</li>
          <li><strong>Digital Campaigns:</strong> Launching digital campaigns to reach a broader audience through social
            media and online platforms.</li>
          <li><strong>Collaborative Projects:</strong> Initiating collaborative projects with more local organizations
            to create a more integrated support network for the community.</li>
        </ul>
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
  name: 'Project5Page',
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
      return projectsStore.projects.find(project => project.id === 5);
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
  border: 2px solid #6a0dad;
  /* Borde morado */
  border-radius: 8px;
  /* Bordes redondeados */
  padding: 1rem;
  /* Espacio interno */
}

.project-image {
  width: 100%;
  max-width: 400px;
  /* Tamaño máximo de la imagen */
  max-height: 400px;
  /* Tamaño máximo de la imagen */
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  flex: 1;
}

.description {
  flex: 1;
  margin-left: 2rem;
  font-size: 0.9rem;
  /* Texto más pequeño */
  text-align: justify;
  /* Texto justificado */
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

.additional-info {
  margin-top: 2rem;
}

h3 {
  color: #6a0dad;
  margin-bottom: 1rem;
}

ul {
  list-style-type: disc;
  margin-left: 2rem;
}

p {
  font-size: 0.9rem;
  color: #333;
  text-align: justify;
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
