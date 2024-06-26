<template>
    <div class="statistics">
        <h3>Service Statistics</h3>
        <ul>
            <li>Total Calls Handled: 5000</li>
            <li>Successful Interventions: 3500</li>
            <li>Ongoing Cases: 200</li>
            <li>Success Stories: 150</li>
        </ul>
    </div>
    
</template>

<script>
export default {
    name: 'ServiceStatistics'
};
</script>

<style scoped>
.statistics {
    margin-top: 2rem;
    text-align: left;
}

h3 {
    font-size: 1.5rem;
    color: #6a0dad;
}

ul {
    list-style: disc;
    padding-left: 20px;
}

li {
    font-size: 1rem;
}
</style>
