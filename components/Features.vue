<template>
  <section class="features-section">
    <h2>Our Key Features</h2>
    <div class="features-list">
      <FeatureCard
        v-for="(feature, index) in features"
        :key="index"
        :feature="feature"
      />
    </div>
  </section>
</template>

<script>
import FeatureCard from '@/components/FeatureCard.vue'

export default {
  components: {
    FeatureCard
  },
  data() {
    return {
      features: [
        {
          title: '24/7 Helpline',
          description: 'Our helpline is available 24/7 for immediate support.',
          icon: 'phone'
        },
        {
          title: 'Legal Advice',
          description: 'Receive free legal advice from our experienced team.',
          icon: 'gavel'
        },
        {
          title: 'Counseling Services',
          description: 'Emotional and psychological support for those in need.',
          icon: 'heart'
        }
      ]
    }
  }
}
</script>

<style scoped>
.features-section {
  padding: 50px 20px;
  background-color: #f0f4f8;
  text-align: center;
}

.features-section h2 {
  font-size: 32px;
  color: #4a148c;
  margin-bottom: 30px;
}

.features-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
