<template>
  <div class="calendar-container">
    <h2>Opening Hours</h2>
    <p>We are open every day from 9:00 AM to 9:00 PM. We welcome you to visit us during these hours to receive support, guidance, and assistance.</p>
    <div class="calendar">
      <table>
        <thead>
        <tr>
          <th>Day</th>
          <th>Opening Hours</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="day in days" :key="day.name">
          <td>{{ day.name }}</td>
          <td>{{ day.hours }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [
        { name: 'Monday', hours: '9:00 AM - 9:00 PM' },
        { name: 'Tuesday', hours: '9:00 AM - 9:00 PM' },
        { name: 'Wednesday', hours: '9:00 AM - 9:00 PM' },
        { name: 'Thursday', hours: '9:00 AM - 9:00 PM' },
        { name: 'Friday', hours: '9:00 AM - 9:00 PM' },
        { name: 'Saturday', hours: '9:00 AM - 9:00 PM' },
        { name: 'Sunday', hours: '9:00 AM - 9:00 PM' }
      ]
    }
  }
}
</script>

<style scoped>
.calendar-container {
  text-align: center;
  margin-bottom: 2rem;
}

.calendar table {
  width: 100%;
  border-collapse: collapse;
}

.calendar th, .calendar td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.calendar th {
  background-color: #f2f2f2;
}
</style>
