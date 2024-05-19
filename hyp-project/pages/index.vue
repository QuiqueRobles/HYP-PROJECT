<template>
  <div class="container">
    <main>
      <HeroBanner />
      <Carousel />
      <section class="centers-section">
        <h2>Anti-Violence Centers</h2>
        <div class="center-list">
          <div v-for="(center, index) in centers" :key="index">
            <CenterCard :center="center" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>

import Carousel from '@/components/Carousel.vue'
import HeroBanner from '@/components/HeroBanner.vue'
import CenterCard from '@/components/CenterCard.vue'

export default {
  components: {
    
    HeroBanner,
    Carousel,   
    CenterCard,
    
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
/* Estilos para el contenedor principal */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Estilos para la sección de los centros */
.centers-section {
  padding: 50px 0;
}

.centers-section h2 {
  font-size: 24px;
  margin-bottom: 30px;
}

.center-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* Estilos para los componentes internos */
/* Puedes añadir estilos adicionales según sea necesario */
</style>
