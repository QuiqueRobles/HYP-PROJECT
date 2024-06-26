<template>
  <div class="service-page" v-if="!loading">
    <div class="container">
      <h2>{{ service.title }}</h2>
      <div class="content">
        <p>{{ service.description }}</p>
        <div class="responsible-details" v-if="responsiblePerson">
          <hr class="separator" />
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
      <br>
      <div class="additional-info">
        <h3>Additional Information:</h3>
        <h4>Team and Operations:</h4>
        <ul>
          <li>
            <strong>Dedicated Staff:</strong> The Crisis Hotline is supported by a
            dedicated team of 50 trained professionals, including counselors, social
            workers, and volunteers.
          </li>
          <li>
            <strong>Languages Supported:</strong> The service operates in multiple
            languages, including English, Spanish, French, and Mandarin, ensuring
            accessibility for diverse communities.
          </li>
          <li>
            <strong>Training Programs:</strong> Regular training programs are
            conducted for the staff to stay updated on the latest intervention
            techniques and support strategies.
          </li>
        </ul>
        <h4>Community Outreach:</h4>
        <ul>
          <li>
            <strong>Workshops and Seminars:</strong> The hotline organizes community
            workshops and seminars to raise awareness about domestic violence and
            family maltreatment. These events are attended by over 2000 participants
            annually.
          </li>
          <li>
            <strong>Partnerships:</strong> Collaboration with local law enforcement,
            healthcare providers, and NGOs to provide comprehensive support to
            victims.
          </li>
          <li>
            <strong>Education Campaigns:</strong> Active social media presence and
            educational campaigns to spread awareness and provide information on how
            to seek help.
          </li>
        </ul>
        <h4>Technology and Accessibility:</h4>
        <ul>
          <li>
            <strong>Mobile App:</strong> A dedicated mobile app allows users to
            contact the hotline quickly, access resources, and find nearby shelters.
          </li>
          <li>
            <strong>Website Resources:</strong> The website offers a wealth of
            resources, including safety planning guides, legal information, and links
            to support services.
          </li>
        </ul>
        <ServiceStatistics />
      </div>
    </div>
  </div>
  <div v-else class="loading">
    <p>Loading...</p>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useServicesStore } from '~/stores/services';
import { usePeopleStore } from '~/stores/people';
import ServiceStatistics from '~/components/ServiceStatistics.vue';

export default {
  name: 'Service1Page',
  components: { ServiceStatistics },
  setup() {
    const servicesStore = useServicesStore();
    const peopleStore = usePeopleStore();
    const loading = ref(true);

    onMounted(async () => {
      try {
        await servicesStore.fetchServices();
        await peopleStore.fetchPeople();
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loading.value = false;
      }
    });

    const service = computed(() => {
      return servicesStore.services.find(service => service.id === 1);
    });

    const responsiblePerson = computed(() => {
      if (service.value) {
        return peopleStore.people.find(person => String(person.id) === String(service.value.responsible_person_id)) || {};
      }
      return {};
    });

    return { service, responsiblePerson, loading };
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
  padding: 1.5rem;
  border: 2px solid #6a0dad;
  border-radius: 8px;
  transition: box-shadow 0.3s;
  box-shadow: 0 0 20px rgba(106, 13, 173, 0.9);
}

.content:hover {
  box-shadow: 0 0 50px rgba(106, 13, 173, 0.9);
}

p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: justify;
}

.responsible-details {
  margin-top: 1rem;
}

.separator {
  border: 0;
  height: 2px;
  background: #6a0dad;
  margin: 1rem 0;
}

.responsible-person {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.responsible-label {
  font-weight: bold;
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
}

h3 {
  font-size: 1.75rem;
  color: #6a0dad;
  margin-bottom: 1rem;
}

h4 {
  font-size: 1.25rem;
  margin-top: 1rem;
  color: #6a0dad;
}

ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

strong {
  font-weight: bold;
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
  .container {
    padding: 1rem;
  }

  .content {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 600px) {
  .container {
    padding: 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 0.875rem;
  }

  .responsible-image {
    width: 60px;
    height: 60px;
  }
}
</style>
