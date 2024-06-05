<template>
  <div class="wrapper">
    <div class="container">
      <header class="header-bg">
        <h1>ABOUT US</h1>
      </header>

      <section>
        <h2>Our Mission</h2>
        <div class="cuadro">
          <p>Our mission is to assist and protect women who have been victims of gender violence, empowering them to become stronger and regain control of their lives. We strive to provide a safe and supportive environment where women can heal and rebuild their confidence.</p>
        </div>
      </section>

      <section>
        <ImageSlider />
      </section>

      <section>
        <h2>Our History</h2>
        <p>The Gender Violence Help Center was founded in response to the urgent need for a safe haven for women affected by gender violence. Our story began with a small group of survivors who, having endured the horrors of violence and harassment, decided to transform their pain into a source of strength and empowerment for others.</p>
        <p>Initially, the center operated out of a modest space, driven by the dedication of these brave women who knew firsthand the challenges and traumas faced by victims. Their personal journeys from suffering to freedom became the foundation of our organization, inspiring others to join and expand our mission.</p>
        <p>Over the years, the center has grown significantly, both in terms of the scope of our services and the number of women we have supported. Our team now includes professional counselors, social workers, and volunteers, many of whom are also survivors of gender violence. This unique composition of our staff creates a deeply empathetic and supportive environment, as our team members are not just providing assistance, but also sharing their personal experiences and insights.</p>
        <p>We are proud of the community we have built—a community where every woman is valued, supported, and empowered to reclaim her life. Our history is a testament to the resilience and strength of women who refuse to be defined by their past traumas but instead use their experiences to foster a brighter, safer future for others.</p>

      </section>


      <section>
        <Map />
      </section>

      <section>
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
  }
}
</script>

<style scoped>
.wrapper {
  min-height: calc(100vh - 6rem);
  position: relative;
}

.container {
  padding: 2rem;
}

.header-bg {
  background-image: url('public/header_about_us.jpg');
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

.interventions {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.intervention h2 {
  text-align: center;
  color: #333;
}

.intervention {
  margin-bottom: 20px;
  padding: 15px;
  border-left: 4px solid #333;
  background-color: #f0f0f0;
  border-radius: 4px;
}

.intervention h3 {
  margin-top: 0;
  color: #333;
}

.intervention p {
  margin: 10px 0 0;
  color: #666;
}

section {
  margin-bottom: 2rem;
}

.cuadro {
  padding: 20px;
  background-color: rgba(160, 0, 255, 0.2);
}

p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}
</style>








