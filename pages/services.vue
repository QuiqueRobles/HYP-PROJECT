<template>
  <div class="container">
    <h1>Our Activities</h1>
    <p class="subtitle">Discover the diverse range of services and activities we offer to support women in need.</p>

    <AccordionComponent :items="activities" />

    <div class="call-to-action">
      <h2>Ready to Get Help?</h2>
      <p>If you or someone you know is experiencing domestic violence, reach out to us for support.</p>
      <router-link to="/contact" class="cta-button">Contact Us</router-link>
    </div>

    <FeedbackForm />
  </div>
</template>

<script>
import AccordionComponent from '@/components/AccordionComponent.vue';
import FeedbackForm from '@/components/FeedbackForm.vue';
import { useServicesStore } from '~/stores/services';
import { usePeopleStore } from '~/stores/people';

export default {
  name: 'ServicesPage',
  components: {
    AccordionComponent,
    FeedbackForm
  },
  setup() {
    const servicesStore = useServicesStore();
    const peopleStore = usePeopleStore();

    const activities = computed(() => servicesStore.services.map(service => {
      const responsiblePerson = peopleStore.people.find(person => person.id === service.responsible_person_id);
      return {
        title: service.title,
        content: service.description,
        responsiblePerson
      };
    }));

    return { activities };
  }
}
</script>

<style scoped>
.container {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #6a0dad;
  font-size: 2.5rem;
}

.subtitle {
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
}

.call-to-action {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.call-to-action h2 {
  color: #6a0dad;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.cta-button {
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: #6a0dad;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-size: 1.2rem;
}

.cta-button:hover {
  background-color: #550099;
}

/* Styling for accordion */
.accordion-item {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.accordion-button {
  width: 100%;
  padding: 1rem;
  background-color: #6a0dad;
  color: white;
  border: none;
  text-align: center; /* Centering titles */
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1.4rem;
}

.accordion-button:hover {
  background-color: #550099;
}

.accordion-content {
  padding: 1rem;
  background-color: #fff;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
}

.responsible-person {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.responsible-person img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}

.responsible-person-info {
  font-size: 1.2rem;
  color: #333;
}
</style>
