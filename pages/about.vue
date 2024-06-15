<template>
  <div class="wrapper">
    <div class="container">
      <header class="header-bg">
        <h1>ABOUT US</h1>
      </header>

      <section class="mission">
        <h2>Our Mission</h2>
        <div class="cuadro">
          <p>Our mission is to assist and protect women who have been victims of gender violence, empowering them to become stronger and regain control of their lives. We strive to provide a safe and supportive environment where women can heal and rebuild their confidence.</p>
        </div>
      </section>

      <section class="image-slider-section">
        <ImageSlider :images="imageList" />
      </section>

      <section class="history">
        <h2>Our History</h2>
        <div class="history-content">
          <p>The Gender Violence Help Center was founded in response to the urgent need for a safe haven for women affected by gender violence. Our story began with a small group of survivors who, having endured the horrors of violence and harassment, decided to transform their pain into a source of strength and empowerment for others.</p>
          <p>Initially, the center operated out of a modest space, driven by the dedication of these brave women who knew firsthand the challenges and traumas faced by victims. Their personal journeys from suffering to freedom became the foundation of our organization, inspiring others to join and expand our mission.</p>
          <p>Over the years, the center has grown significantly, both in terms of the scope of our services and the number of women we have supported. Our team now includes professional counselors, social workers, and volunteers, many of whom are also survivors of gender violence. This unique composition of our staff creates a deeply empathetic and supportive environment, as our team members are not just providing assistance, but also sharing their personal experiences and insights.</p>
          <p>We are proud of the community we have built—a community where every woman is valued, supported, and empowered to reclaim her life. Our history is a testament to the resilience and strength of women who refuse to be defined by their past traumas but instead use their experiences to foster a brighter, safer future for others.</p>
        </div>
      </section>

      <section class="map-section">
        <h2>Find Us</h2>
        <Map />
      </section>

      <section class="calendar-section">
        <h2>Upcoming Events</h2>
        <Calendar />
      </section>
    </div>
  </div>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue';
import Map from '@/components/Map.vue';
import Calendar from '@/components/Calendar.vue';

export default {
  name: 'AboutPage',
  components: {
    ImageSlider,
    Map,
    Calendar
  },
  setup() {
    const imageList = [
      { src: 'carrusel-1.jpeg', alt: 'Image 1' },
      { src: 'carrusel-2.jpg', alt: 'Image 2' },
      { src: 'carrusel-3.jpg', alt: 'Image 3' },
      { src: 'carrusel-4.jpeg', alt: 'Image 4' },
    ];
    return { imageList };
  }
}
</script>

<style scoped>
.wrapper {
  min-height: calc(100vh - 6rem);
  background-color: #f9f9f9;
}

.container {
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.header-bg {
  background-image: url('@/public/header_about_us.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  text-align: center;
  padding: 100px 0;
}

h1 {
  font-family: "Copperplate Gothic Bold", sans-serif;
  font-size: 3.5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.mission {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.mission h2 {
  text-align: center;
  color: #6a0dad;
}

.history {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.history h2 {
  text-align: center;
  color: #6a0dad;
}

.history-content p {
  margin-bottom: 1.5rem;
}

.cuadro {
  padding: 20px;
  background-color: rgba(160, 0, 255, 0.1);
  border-left: 4px solid #6a0dad;
  border-radius: 8px;
}

.image-slider-section {
  margin-bottom: 2rem;
}

.map-section,
.calendar-section {
  margin-bottom: 2rem;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.map-section h2,
.calendar-section h2 {
  text-align: center;
  color: #6a0dad;
  margin-bottom: 1.5rem;
}
</style>
