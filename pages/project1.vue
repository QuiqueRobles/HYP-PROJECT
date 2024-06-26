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
        <section>
          <h3>Key Activities and Achievements</h3>
          <ul>
            <li>
              <strong>Workshops and Training:</strong> Conducted over 50 workshops
              focusing on skills development, financial literacy, and leadership.
            </li>
            <li>
              <strong>Community Outreach:</strong> Engaged with more than 5000 women
              through various community outreach programs.
            </li>
            <li>
              <strong>Partnerships:</strong> Established collaborations with local
              businesses, NGOs, and government agencies to create job opportunities
              and support networks.
            </li>
          </ul>
        </section>

        <section>
          <h3>Program Impact</h3>
          <ul>
            <li>
              <strong>Employment:</strong> Successfully helped 1000 women secure
              employment in various sectors.
            </li>
            <li>
              <strong>Entrepreneurship:</strong> Supported 200 women in starting their
              own businesses with mentorship and financial aid.
            </li>
            <li>
              <strong>Education:</strong> Facilitated educational programs that
              benefited over 1500 women, enhancing their skills and knowledge.
            </li>
          </ul>
        </section>

        <section>
          <h3>Success Stories</h3>
          <ul>
            <li>
              <strong>Transformative Journey:</strong> One participant, Jane Doe,
              leveraged the training programs to launch a successful catering
              business.
            </li>
            <li>
              <strong>Breaking Barriers:</strong> Maria Smith, another participant,
              secured a managerial position in a local firm after completing our
              leadership workshop.
            </li>
          </ul>
        </section>

        <section>
          <h3>Future Plans</h3>
          <ul>
            <li>
              <strong>Expansion:</strong> Plan to extend the program to rural areas to
              reach more women in need of support.
            </li>
            <li>
              <strong>New Initiatives:</strong> Introduce digital literacy programs to
              help women navigate and leverage online platforms for business and
              learning.
            </li>
            <li>
              <strong>Volunteer Program:</strong> Launch a volunteer program to engage
              community members in supporting the empowerment initiatives.
            </li>
          </ul>
        </section>
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

    onMounted(async () => {
      try {
        await projectsStore.fetchProjects();
        await peopleStore.fetchPeople();
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
        return (
          peopleStore.people.find(
            person => String(person.id) === String(project.value.responsible_person_id)
          ) || {}
        );
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
