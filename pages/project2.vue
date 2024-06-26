<template>
  <div class="project-page" v-if="!loading">
    <div class="container">
      <h2>{{ project.title }}</h2>
      <div class="content">
        <img
          :src="project.picture_url"
          :alt="`Image of ${project.title}`"
          class="project-image"
        />
        <div class="description">
          <p>{{ project.description }}</p>
          <hr class="separator" />
          <div class="responsible-details">
            <div class="responsible-person">
              <div>
                <span class="responsible-label">Responsible person:</span>
                <span class="responsible-name">
                  <router-link
                    class="link-item"
                    v-if="responsiblePerson.id"
                    :to="{ path: '/people', hash: `#person-${responsiblePerson.id}` }"
                    >{{ responsiblePerson.name }}</router-link
                  >
                  <span v-else>{{ responsiblePerson.name }}</span>
                </span>
              </div>
              <img
                :src="responsiblePerson.picture_url"
                :alt="`Image of ${responsiblePerson.name}`"
                class="responsible-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="additional-info">
        <h3>Key Features and Services</h3>
        <ul>
          <li><strong>Comprehensive Support:</strong> The Safe Haven Shelter provides a safe and secure environment for
            women and children fleeing domestic violence. Services include emergency housing, meals, and personal care
            items.</li>
          <li><strong>24/7 Accessibility:</strong> The shelter is open 24/7, ensuring that support is available whenever
            it is needed, including crisis intervention and counseling services.</li>
          <li><strong>Tailored Programs:</strong> We offer personalized programs to address the unique needs of each
            resident, including legal assistance, job training, and educational workshops.</li>
        </ul>

        <h3>Impact and Outcomes</h3>
        <ul>
          <li><strong>Safety and Security:</strong> Since its inception, the shelter has provided refuge to over 3000
            women and children, ensuring their safety and well-being.</li>
          <li><strong>Empowerment:</strong> Through various empowerment programs, 70% of residents have successfully
            transitioned to independent living.</li>
          <li><strong>Community Integration:</strong> Over 200 women have been reintegrated into the community with
            stable jobs and housing, thanks to the comprehensive support provided.</li>
        </ul>

        <h3>Success Stories</h3>
        <ul>
          <li><strong>New Beginnings:</strong> One resident, Sarah Johnson, escaped an abusive relationship and, with
            the help of the shelter, secured a job and an apartment, providing a stable environment for her children.
          </li>
          <li><strong>From Fear to Confidence:</strong> Another resident, Emily Brown, attended our job training
            programs and is now employed as a manager in a local business.</li>
        </ul>

        <h3>Future Initiatives</h3>
        <ul>
          <li><strong>Expansion Plans:</strong> We plan to expand our facilities to accommodate more residents and offer
            additional services such as child care and health care.</li>
          <li><strong>Community Outreach:</strong> Launching awareness campaigns to educate the community about domestic
            violence and the resources available at the shelter.</li>
          <li><strong>Volunteer Engagement:</strong> Developing a volunteer program to involve more community members in
            supporting the shelter's operations and programs.</li>
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
  name: 'Project2Page',
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
      return projectsStore.projects.find(project => project.id === 2);
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
  max-width: 900px;
  margin: auto;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #6a0dad;
  text-align: center;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  border: 2px solid #6a0dad;
  border-radius: 8px;
  padding: 1.5rem;
  transition: box-shadow 0.3s;
  box-shadow: 0 0 20px rgba(106, 13, 173, 0.9);
}

.content:hover {
  box-shadow: 0 0 50px rgba(106, 13, 173, 0.9);
}

.project-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  flex: 1;
}

.description {
  flex: 1;
  margin-left: 2rem;
  font-size: 1rem;
  text-align: justify;
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
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.5rem;
}

.responsible-name {
  margin-left: 0.5rem;
}

.responsible-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-top: 0.5rem;
}

.additional-info {
  margin-top: 2rem;
  font-size: 1rem;
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
  font-size: 1rem;
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
