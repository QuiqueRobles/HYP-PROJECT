<template>
  <div class="wrapper">
    <div class="container">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Header Background Image</title>
        <link rel="stylesheet" href="styles.css">
      </head>

      <header class="header-bg">
        <h1>ABOUT US </h1>
      </header>

      <section>
        <h2>Our Mission</h2>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Textos en Cuadros</title>
          <link rel="stylesheet" href="styles.css">
        </head>
        <body>
        <div class="cuadro">
          <p>Our mission is to assist and protect women who have been victims of gender violence, empowering them to become stronger and regain control of their lives. We strive to provide a safe and supportive environment where women can heal and rebuild their confidence.</p>
        </div>
        </body>

        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>nuestra mision</title>
          <link rel="stylesheet" href="styles.css">
        </head>
        <body>

        <main>
          <section class="interventions">
            <h2>Our Areas of Intervention</h2>
            <div class="intervention">
              <h3>Emergency Shelter</h3>
              <p>We provide safe and secure emergency shelter for women escaping violent situations, ensuring they have a place to stay where they can begin to heal and recover.</p>
            </div>
            <div class="intervention">
              <h3>Counseling Services</h3>
              <p>Our center offers individual and group counseling sessions to help women process their experiences and develop coping strategies for moving forward.</p>
            </div>
            <div class="intervention">
              <h3>Economic Empowerment</h3>
              <p>We offer programs focused on financial literacy, job training, and employment assistance to help women gain financial independence and stability.</p>
            </div>
          </section>
        </main>
        </body>

      </section>

      <section>
        <h2>Our History</h2>
        <p>The Gender Violence Help Center was founded in response to the urgent need for a safe haven for women affected by gender violence. Our story began with a small group of survivors who, having endured the horrors of violence and harassment, decided to transform their pain into a source of strength and empowerment for others.</p>
        <p>Initially, the center operated out of a modest space, driven by the dedication of these brave women who knew firsthand the challenges and traumas faced by victims. Their personal journeys from suffering to freedom became the foundation of our organization, inspiring others to join and expand our mission.</p>
        <p>Over the years, the center has grown significantly, both in terms of the scope of our services and the number of women we have supported. Our team now includes professional counselors, social workers, and volunteers, many of whom are also survivors of gender violence. This unique composition of our staff creates a deeply empathetic and supportive environment, as our team members are not just providing assistance, but also sharing their personal experiences and insights.</p>
        <p>We are proud of the community we have built—a community where every woman is valued, supported, and empowered to reclaim her life. Our history is a testament to the resilience and strength of women who refuse to be defined by their past traumas but instead use their experiences to foster a brighter, safer future for others.</p>

        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Image Carousel</title>
          <link rel="stylesheet" href="styles.css">
        </head>
        <body>
        <header>
          <h1>Our Intervention Center</h1>
        </header>
        <main>
          <section class="carousel">
            <div class="carousel-container">
              <div class="carousel-slide active">
                <img src="public/carrusel-3.jpg" alt="Image 1">
              </div>
              <div class="carousel-slide">
                <img src="public/carrusel-2.jpg" alt="Image 2">
              </div>
              <div class="carousel-slide">
                <img src="public/carrusel-1.jpeg" alt="Image 3">
              </div>
            </div>
            <button class="carousel-button prev">❮</button>
            <button class="carousel-button next">❯</button>
          </section>
        </main>
        <script src="script.js"></script>
        </body>
      </section>

      <section id="team-section">
        <h2>Meet Our Team</h2>
        <div class="team-member">
          <h3>Laura Sanchez </h3>
          <img src="public/worker1.jpg" alt="imagen-usuario ">
          <p>President - With extensive experience in violence against women, Susana has coordinated numerous transnational projects and served as an expert for various European networks and organizations.</p>
        </div>
        <div class="team-member">
          <h3>Veronica Garcia</h3>
          <img src="public/worker2.png" alt="imagen-usuario ">
          <p>Vice-President - Coordinator of the National Coalition "Life without Violence" in Milan, with a background in law and psychology, specializing in gender-based violence.</p>

        </div>
        <!-- Anadimos people aqui  -->
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

/* header principal */
.header-bg {
  background-image: url('public/header_about_us.jpg'); /* Ruta de la imagen */
  background-size: cover; /* Ajusta la imagen al tamaño del contenedor */
  background-position: center; /* Centra la imagen en el contenedor */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  color: #fff; /* Color del texto */
  text-align: center; /* Alinea el texto al centro */
  padding: 100px 0; /* Añade espacio alrededor del texto */
}


h1 {
  font-family: "Copperplate Gothic Bold",sans-serif ;
  font-size: 3.5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 2rem;
  color: #555;
  margin-bottom: 1rem;
}

/* seccion team members   */
.team-member {
  margin-bottom: 20px;
  text-align: center;
}

.team-member img {
  width: 200px; /* Ajusta el tamaño según necesites */
  border-radius: 50%; /* Esto redondea la imagen, ajusta según necesites */
  margin-bottom: 10px;
}


section {
  margin-bottom: 2rem;
}
.cuadro {

  padding: 20px; /* Agregar un espacio de relleno de 20 píxeles alrededor del texto dentro del cuadro */
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

main {
  padding: 20px;
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

/*CARRUSEL*/

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}

header {
  background-color: #5e3a7f; /* Tonos morados */
  color: #fff;
  text-align: center;
  padding: 20px 0;
}

h1 {
  margin: 0;
}

main {
  padding: 20px;
}

.carousel {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  border: 2px solid #5e3a7f; /* Tonos morados */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.carousel-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
}

.carousel-slide.active {
  opacity: 1;
}

.carousel img {
  width: 100%;
  border-radius: 8px;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(94, 58, 127, 0.7); /* Tonos morados */
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
  font-size: 24px;
}

.carousel-button.prev {
  left: 10px;
}

.carousel-button.next {
  right: 10px;
}

.carousel-button:hover {
  background-color: rgba(94, 58, 127, 0.9); /* Tonos morados */
}

</style>
