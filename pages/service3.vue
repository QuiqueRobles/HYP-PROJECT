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
        <li><strong>Dedicated Staff:</strong> The Shelter Accommodation service is supported by a dedicated team of 40
          trained professionals, including social workers, counselors, and volunteers.</li>
        <li><strong>Languages Supported:</strong> The service operates in multiple languages, including English,
          Spanish, French, and Mandarin, ensuring accessibility for diverse communities.</li>
        <li><strong>Training Programs:</strong> Regular training programs are conducted for the staff to stay updated on
          the latest support strategies and safety protocols.</li>
      </ul>
      <h4>Community Outreach:</h4>
      <ul>
        <li><strong>Workshops and Seminars:</strong> The service organizes community workshops and seminars to raise
          awareness about the availability of shelter accommodations and the process to access them. These events are
          attended by over 1500 participants annually.</li>
        <li><strong>Partnerships:</strong> Collaboration with local law enforcement, healthcare providers, and NGOs to
          ensure a holistic support system for the beneficiaries.</li>
        <li><strong>Awareness Campaigns:</strong> Active social media presence and educational campaigns to inform the
          community about the services and how to seek help.</li>
      </ul>
      <h4>Technology and Accessibility:</h4>
      <ul>
        <li><strong>Online Booking System:</strong> A dedicated online system allows users to check availability and
          book shelter accommodations quickly and discreetly.</li>
        <li><strong>Website Resources:</strong> The website offers a wealth of resources, including guides on how to
          access shelters, legal information, and links to support services.</li>
      </ul>
      <h4>Service Statistics:</h4>
      <ul>
        <li><strong>Total Shelter Requests Handled:</strong> 4000</li>
        <li><strong>Successful Placements:</strong> 3200</li>
        <li><strong>Ongoing Cases:</strong> 250</li>
        <li><strong>Success Stories:</strong> 200</li>
      </ul>
      <h4>Impact Stories:</h4>
      <ul>
        <li><strong>Safe Haven:</strong> One success story involves a woman who, after being placed in a shelter, was
          able to rebuild her life with the support of the service, eventually securing permanent housing and
          employment.</li>
        <li><strong>Family Reunification:</strong> Another success story includes a mother who, with the help of the
          shelter accommodation service, was able to reunite with her children in a safe environment.</li>
        <li><strong>Community Support:</strong> A woman found solidarity and strength through support groups organized
          by the shelter, helping her to overcome trauma and rebuild her confidence.</li>
      </ul>
      <h4>Future Goals:</h4>
      <ul>
        <li><strong>Expansion:</strong> Plans to expand the service's reach to more rural and underserved areas to
          ensure that all women have access to safe shelter.</li>
        <li><strong>Enhanced Services:</strong> Introduction of additional support services such as mental health
          counseling and job training programs.</li>
        <li><strong>Volunteer Program:</strong> Launch of a volunteer program to involve community members in supporting
          the shelter's mission and operations.</li>
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
  name: 'Service3Page',
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
      return servicesStore.services.find(service => service.id === 3);
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
