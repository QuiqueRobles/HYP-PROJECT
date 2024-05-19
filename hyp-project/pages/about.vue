<template>
  <div class="wrapper">
    <div class="container">
      <h1>Gender Violence Help Center</h1>
      <section>
        <h2>Our Mission</h2>
        <p>Our mission is to assist and protect women who have been victims of gender violence, empowering them to become stronger and regain control of their lives. We strive to provide a safe and supportive environment where women can heal and rebuild their confidence.</p>
      </section>

      <section>
        <h2>Our History</h2>
        <p>The Gender Violence Help Center was founded in response to the urgent need for a safe haven for women affected by gender violence. Our story began with a small group of survivors who, having endured the horrors of violence and harassment, decided to transform their pain into a source of strength and empowerment for others.</p>
        <p>Initially, the center operated out of a modest space, driven by the dedication of these brave women who knew firsthand the challenges and traumas faced by victims. Their personal journeys from suffering to freedom became the foundation of our organization, inspiring others to join and expand our mission.</p>
        <p>Over the years, the center has grown significantly, both in terms of the scope of our services and the number of women we have supported. Our team now includes professional counselors, social workers, and volunteers, many of whom are also survivors of gender violence. This unique composition of our staff creates a deeply empathetic and supportive environment, as our team members are not just providing assistance, but also sharing their personal experiences and insights.</p>
        <p>We are proud of the community we have built—a community where every woman is valued, supported, and empowered to reclaim her life. Our history is a testament to the resilience and strength of women who refuse to be defined by their past traumas but instead use their experiences to foster a brighter, safer future for others.</p>
      </section>

      <section>
        <h2>Location</h2>
        <p>You can find us in Milan, at Via Roma, 123. Our center is conveniently located to ensure accessibility for all who seek our help.</p>
      </section>

      <section>
        <h2>Opening Hours</h2>
        <p>We are open every day from 9:00 AM to 9:00 PM. We welcome you to visit us during these hours to receive support, guidance, and assistance.</p>
      </section>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.wrapper {
  min-height: calc(100vh - 6rem); /* 6rem es la altura del pie de página */
  position: relative;
}

.container {
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 2rem;
  color: #555;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 2rem;
}

p {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666;
}
</style>
