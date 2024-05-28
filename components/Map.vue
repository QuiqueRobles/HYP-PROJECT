<template>
  <div class="map-container">
    <h2>Location</h2>
    <p>You can find us in Milan, at Via Roma, 123. Our center is conveniently located to ensure accessibility for all who seek our help.</p>
    <div class="map">
      <img src="public/map.png" alt="Map location">
    </div>
  </div>
</template>

<style scoped>
.map-container {
  text-align: center;
  margin-bottom: 2rem;
}

.map {
  width: 100%;
  height: 300px;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
}

.map img {
  max-width: 100%;
  height: auto;
}
</style>
