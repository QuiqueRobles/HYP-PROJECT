<template>
  <div>
    <HeroBanner />
    <div class="container">
      <main>
        <!-- <Carousel /> -->
        <section class="centers-section">
          <h2>Anti-Violence Centers</h2>
          <div class="center-list">
            <div v-for="(center, index) in centers" :key="index" class="center-card-wrapper">
              <CenterCard :center="center" />
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import HeroBanner from '@/components/HeroBanner.vue'
import CenterCard from '@/components/CenterCard.vue'

export default {
  components: {
    HeroBanner,
    CenterCard
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
  padding: 20px;
}

/* Estilos para la sección de los centros */
.centers-section {
  padding: 50px 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.centers-section h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.center-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Estilos para los componentes internos */
.center-card-wrapper {
  flex: 1 1 calc(33.333% - 20px);
  display: flex;
  justify-content: center;
  max-width: 400px;
}

@media (max-width: 1024px) {
  .center-card-wrapper {
    flex: 1 1 calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  .center-card-wrapper {
    flex: 1 1 100%;
  }
}

/* Estilos adicionales para mejorar la apariencia */
.center-card-wrapper {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.center-card-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>
