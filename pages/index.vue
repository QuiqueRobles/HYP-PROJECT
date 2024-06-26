<template>
  <div>
    <HeroBanner />
    <div class="container">
      <main>
        <section class="intro-section">
          <h1>AGAINST WOMEN'S VIOLENCE</h1>
          <p>The National Anti-violence Network run by women's organizations</p>
          <br><br>
          <!-- New buttons section -->
          <div class="buttons-section">
            <router-link to="/projects" class="btn btn-projects">
              <i class="fas fa-project-diagram"></i> Our Projects
            </router-link>
            <router-link to="/services" class="btn btn-services">
              <i class="fas fa-concierge-bell"></i> Our Services
            </router-link>
          </div>
          <br><br>
          <CallToAction />
        </section>
        <Valores />
        <Features />
        <section class="centers-section">
          <h2>Anti-Violence Centers</h2>
          <div class="center-list">
            <div v-for="(center, index) in centers" :key="index" class="center-card-wrapper">
              <CenterCard :center="center" />
            </div>
          </div>
        </section>
        <FAQ />
      </main>
    </div>
  </div>
</template>

<script>
import HeroBanner from '@/components/HeroBanner.vue'
import CenterCard from '@/components/CenterCard.vue'
import Valores from '@/components/Valores.vue'
import Testimonials from '@/components/Testimonials.vue'
import CallToAction from '@/components/CallToAction.vue'
import Features from '@/components/Features.vue'
import FAQ from '@/components/FAQ.vue'

export default {
  components: {
    HeroBanner,
    CenterCard,
    Valores,
    Testimonials,
    CallToAction,
    Features,
    FAQ
  },
  data() {
    return {
      centers: [
        {
          title: "'Alda Merini' Anti-Violence Center financed by Roma Capitale",
          address: "Via Cassia, 5 00135 Rome",
          phone: "cell. 338 4715860",
          email: "centroantiviolenzacassia@gmail.com",
          services: [
            '24-hour Telephone Helpline',
            'Support interviews',
            'Legal advice',
            'Emotional-relational support',
            'Orientation to social and health services',
            'Guidance and job counseling'
          ]
        },
        {
          title: "'Alessia e Martina Capasso' Anti-Violence Center financed by Roma Capitale",
          address: "Circonvallazione Trionfale, 19 00195 Rome",
          phone: "tel. 06.69617913 tel. 06.69617873 h 24.00 331 649 3913",
          email: "cavtrionfale@differenzadonna.it",
          services: [
            'Hours: Monday 9am-4pm, Tuesday 9am-4pm, Wednesday 9am-4pm, Thursday 9am-5pm, Friday 9am-4pm',
            '24-hour Telephone Helpline',
            'Support interviews',
            'Legal advice',
            'Emotional-relational support',
            'Orientation to social and health services',
            'Guidance and job counseling'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.intro-section {
  text-align: center;
  margin-bottom: 40px;
}

.intro-section h1 {
  font-size: 36px;
  color: #4a148c;
}

.intro-section p {
  font-size: 18px;
  color: #555;
}

.buttons-section {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.btn {
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
}

.btn i {
  margin-right: 10px;
}

.btn-projects {
  background-color: #4a148c;
}

.btn-projects:hover {
  background-color: #7b1fa2;
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.btn-services {
  background-color: #00796b;
}

.btn-services:hover {
  background-color: #004d40;
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.centers-section {
  padding: 50px 20px;
  background-color: #f4f0f8;
  border-radius: 8px;
  background-image: url('assets/styles/fondo.jpg');
  background-size: cover;
  background-position: center;
}

.centers-section h2 {
  font-size: 32px;
  color: #4a148c;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.center-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.center-card-wrapper {
  flex: 1 1 calc(33.333% - 20px);
  display: flex;
  justify-content: center;
  max-width: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  overflow: hidden;
  position: relative;
}

.center-card-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.center-card-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.3s;
}

.center-card-wrapper:hover::before {
  opacity: 1;
}

.center-card-wrapper h3 {
  font-size: 24px;
  color: #4a148c;
  margin-bottom: 15px;
}

.center-card-wrapper p {
  font-size: 16px;
  color: #555;
}

.center-card-wrapper a {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #4a148c;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.center-card-wrapper a:hover {
  background-color: #7b1fa2;
}
</style>
