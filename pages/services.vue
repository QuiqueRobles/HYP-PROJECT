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

export default {
  name: 'ServicesPage',
  components: {
    AccordionComponent,
    FeedbackForm
  },
  data() {
    return {
      activities: [
        {
          title: 'Counseling Services',
          content: 'We offer individual and group counseling sessions to help women process their experiences and develop coping strategies.'
        },
        {
          title: 'Legal Assistance',
          content: 'Our legal team provides guidance and support for women navigating the legal system.'
        },
        {
          title: 'Emergency Shelter',
          content: 'We provide a safe and secure place for women and their children who need immediate protection from violence.'
        },
        {
          title: 'Support Groups',
          content: 'Our support groups offer a space for women to share their experiences and receive emotional support.'
        },
        {
          title: 'Educational Workshops',
          content: 'We conduct workshops on a variety of topics, including self-defense, financial independence, and healthy relationships.'
        },
        {
          title: 'Childcare Services',
          content: 'To support mothers who are seeking our services, we offer on-site childcare.'
        },
        {
          title: 'Job Training and Placement',
          content: 'We provide job training programs to help women develop new skills and increase their employability.'
        },
        {
          title: 'Health Services',
          content: 'Our center offers health services, including routine check-ups, mental health evaluations, and referrals to specialized medical care.'
        },
        {
          title: 'Outreach and Advocacy',
          content: 'We engage in outreach activities to raise awareness about gender violence and advocate for policies that protect and empower women.'
        }
      ]
    };
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
}
</style>
