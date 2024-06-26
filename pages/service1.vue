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
          <img :src="responsiblePerson.picture_url" :alt="`Image of ${responsiblePerson.name}`" class="responsible-image" />
          <div class="responsible-name">
            <router-link class="link-item" v-if="responsiblePerson.id" :to="{ path: '/people', hash: `#person-${responsiblePerson.id}` }">{{ responsiblePerson.name }}</router-link>
            <span v-else>{{ responsiblePerson.name }}</span>
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
import { useServicesStore } from '~/stores/services';
import { usePeopleStore } from '~/stores/people';

export default {
  name: 'Service1Page',
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
  text-align: center;
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