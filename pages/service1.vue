<template>
  <div class="service-page" v-if="!loading">
    <div class="container">
      <h2>{{ service.title }}</h2>
      <p>{{ service.description }}</p>
      <div class="responsible-details" v-if="responsiblePerson">
        <br>
        <hr>
        <p>Responsible person:</p>
        <div class="responsible-person">
          <img :src="responsiblePerson.picture_url" :alt="`Image of ${responsiblePerson.name}`"
            class="responsible-image" />
          <div class="responsible-name">
            <router-link class="link-item" v-if="responsiblePerson.id"
              :to="{ path: '/people', hash: `#person-${responsiblePerson.id}` }">
              {{ responsiblePerson.name }}
            </router-link>
            <span v-else>{{ responsiblePerson.name }}</span>
          </div>
        </div>
      </div>
      <br>
      <h3>Additional Information:</h3>
      <h4>Team and Operations:</h4>
      <ul>
        <li><strong>Dedicated Staff:</strong> The Crisis Hotline is supported by a dedicated team of 50 trained
          professionals, including counselors, social workers, and volunteers.</li>
        <li><strong>Languages Supported:</strong> The service operates in multiple languages, including English,
          Spanish, French, and Mandarin, ensuring accessibility for diverse communities.</li>
        <li><strong>Training Programs:</strong> Regular training programs are conducted for the staff to stay updated on
          the latest intervention techniques and support strategies.</li>
      </ul>
      <h4>Community Outreach:</h4>
      <ul>
        <li><strong>Workshops and Seminars:</strong> The hotline organizes community workshops and seminars to raise
          awareness about domestic violence and family maltreatment. These events are attended by over 2000 participants
          annually.</li>
        <li><strong>Partnerships:</strong> Collaboration with local law enforcement, healthcare providers, and NGOs to
          provide comprehensive support to victims.</li>
        <li><strong>Education Campaigns:</strong> Active social media presence and educational campaigns to spread
          awareness and provide information on how to seek help.</li>
      </ul>
      <h4>Technology and Accessibility:</h4>
      <ul>
        <li><strong>Mobile App:</strong> A dedicated mobile app allows users to contact the hotline quickly, access
          resources, and find nearby shelters.</li>
        <li><strong>Website Resources:</strong> The website offers a wealth of resources, including safety planning
          guides, legal information, and links to support services.</li>
      </ul>
      <ServiceStatistics />
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

    // Simulate data fetching
    onMounted(async () => {
      try {
        await servicesStore.fetchServices(); // Replace with actual fetch function
        await peopleStore.fetchPeople(); // Replace with actual fetch function
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
  max-width: 800px;
  margin: auto;
  text-align: left;
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

h3 {
  font-size: 1.75rem;
  margin-top: 1.5rem;
  color: #6a0dad;
}

h4 {
  font-size: 1.25rem;
  margin-top: 1rem;
  color: #6a0dad;
}

p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

ul {
  list-style-type: none;
  padding: 0;
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
}
</style>
