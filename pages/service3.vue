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
      <h3 class="additional-info">Additional Information:</h3>
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
