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
        <h3>Core Services and Benefits</h3>
        <ul>
          <li><strong>Legal Consultations:</strong> Provides free legal consultations to women dealing with domestic
            violence, family disputes, and other related issues.</li>
          <li><strong>Representation:</strong> Offers representation in court for cases involving domestic violence,
            child custody, and other family law matters.</li>
          <li><strong>Workshops and Seminars:</strong> Conducts regular workshops to educate women about their legal
            rights and how to navigate the legal system.</li>
        </ul>

        <h3>Achievements and Impact</h3>
        <ul>
          <li><strong>Legal Cases Resolved:</strong> Successfully resolved over 1500 legal cases, providing justice and
            peace of mind to women in need.</li>
          <li><strong>Community Reach:</strong> Engaged with over 5000 women through outreach programs and legal
            workshops.</li>
          <li><strong>Policy Advocacy:</strong> Actively involved in policy advocacy, contributing to the development of
            laws that protect women's rights.</li>
        </ul>

        <h3>Success Stories</h3>
        <ul>
          <li><strong>Empowerment Through Legal Aid:</strong> One client, Ana Martinez, secured a restraining order and
            full custody of her children with our legal assistance.</li>
          <li><strong>Justice Served:</strong> Another client, Lisa Wong, successfully won a case against her abusive
            partner, ensuring her safety and that of her children.</li>
        </ul>

        <h3>Future Goals</h3>
        <ul>
          <li><strong>Expansion of Services:</strong> Plans to expand legal aid services to rural areas where access to
            legal assistance is limited.</li>
          <li><strong>Digital Legal Aid:</strong> Introducing online legal consultations to reach more women in need of
            urgent legal advice.</li>
          <li><strong>Volunteer Lawyers Program:</strong> Launching a program to recruit volunteer lawyers to extend our
            capacity to provide legal support.</li>
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
  name: 'Project3Page',
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
      return projectsStore.projects.find(project => project.id === 3);
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
