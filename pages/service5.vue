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
              :to="{ path: '/people', hash: `#person-${responsiblePerson.id}` }">{{ responsiblePerson.name
              }}</router-link>
            <span v-else>{{ responsiblePerson.name }}</span>
          </div>
        </div>
      </div>
      <br>
      <h3>Additional Information:</h3>
      <h4>Team and Operations:</h4>
      <ul>
        <li><strong>Dedicated Staff:</strong> The Community Support Groups service is supported by a dedicated team of
          15 trained professionals, including facilitators, counselors, and volunteers.</li>
        <li><strong>Languages Supported:</strong> The service operates in multiple languages, including English,
          Spanish, French, and Mandarin, ensuring accessibility for diverse communities.</li>
        <li><strong>Training Programs:</strong> Regular training programs are conducted for the staff to stay updated on
          the latest support group facilitation techniques and strategies.</li>
      </ul>
      <h4>Community Outreach:</h4>
      <ul>
        <li><strong>Workshops and Seminars:</strong> The service organizes community workshops and seminars to educate
          people about the benefits of support groups and how to join them. These events are attended by over 800
          participants annually.</li>
        <li><strong>Partnerships:</strong> Collaboration with local healthcare providers, mental health organizations,
          and NGOs to ensure comprehensive support for group members.</li>
        <li><strong>Awareness Campaigns:</strong> Active social media presence and educational campaigns to spread
          awareness about the importance of community support and how to participate.</li>
      </ul>
      <h4>Technology and Accessibility:</h4>
      <ul>
        <li><strong>Online Support Groups:</strong> A dedicated online platform allows users to join support groups
          remotely, ensuring accessibility for those who cannot attend in person.</li>
        <li><strong>Website Resources:</strong> The website offers a wealth of resources, including group schedules,
          articles on mental health, and self-help guides.</li>
      </ul>
      <h4>Service Statistics:</h4>
      <ul>
        <li><strong>Total Support Groups Conducted:</strong> 250</li>
        <li><strong>Participants Served:</strong> 4000</li>
        <li><strong>Ongoing Support Groups:</strong> 50</li>
        <li><strong>Success Stories:</strong> 180</li>
      </ul>
      <h4>Impact Stories:</h4>
      <ul>
        <li><strong>Community Healing:</strong> One success story involves a participant who, after joining a support
          group, was able to find emotional healing and build a strong support network.</li>
        <li><strong>Ongoing Support:</strong> Another success story includes a group of participants who formed a
          lasting support community, providing ongoing emotional support and friendship.</li>
        <li><strong>Personal Growth:</strong> A participant found new coping strategies and emotional resilience through
          the support groups, significantly improving their quality of life.</li>
      </ul>
      <h4>Future Goals:</h4>
      <ul>
        <li><strong>Expansion:</strong> Plans to expand the service's reach to more rural and underserved areas to
          ensure that everyone has access to community support groups.</li>
        <li><strong>Enhanced Services:</strong> Introduction of specialized support groups focusing on specific issues
          such as grief, trauma, and chronic illness.</li>
        <li><strong>Volunteer Program:</strong> Launch of a volunteer program to involve community members in supporting
          the groups and facilitating sessions.</li>
      </ul>
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
  name: 'Service5Page',
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
      return servicesStore.services.find(service => service.id === 5);
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
