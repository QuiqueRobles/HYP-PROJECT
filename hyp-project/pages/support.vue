<template>
  <div class="support-page">
    <HeroBannerSupport />
    <CallToAction />
    
    <div class="container">
      <h2>Resources for Women</h2>
      <div class="resource-cards">
        <ResourceCard v-for="(resource, index) in resources" :key="index" :resource="resource" />
      </div>

      <Testimonials />
      
      <FAQAccordion />
    </div>
  </div>
</template>

<script>
import HeroBanner from '@/components/HeroBannerSupport.vue'
import CallToAction from '@/components/CallToAction.vue'
import ResourceCard from '@/components/ResourceCard.vue'
import Testimonials from '@/components/Testimonials.vue'
import FAQAccordion from '@/components/FAQAccordion.vue'

export default {
  name: 'SupportPage',
  components: {
    HeroBanner,
    CallToAction,
    ResourceCard,
    Testimonials,
    FAQAccordion
  },
  data() {
    return {
      resources: [
        {
          title: 'Counseling Services',
          description: 'Professional counseling sessions to help women process their experiences and develop coping strategies.',
          image: '/images/counseling.jpg'
        },
        {
          title: 'Legal Assistance',
          description: 'Guidance and support for women navigating the legal system, including assistance with restraining orders and divorce proceedings.',
          image: '/images/legal.jpg'
        },
        {
          title: 'Emergency Shelter',
          description: 'Safe and secure shelter for women and their children who need immediate protection from violence.',
          image: '/images/shelter.jpg'
        },
        {
          title: 'Support Groups',
          description: 'Spaces for women to share experiences and receive emotional support from others who have faced similar challenges.',
          image: '/images/support.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  padding: 2rem;
}

.resource-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

h2 {
  text-align: center;
  margin-top: 4rem;
  color: #6a0dad;
  font-size: 2.5rem;
}
</style>
