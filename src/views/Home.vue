<template lang="html">
    <main role="main" class="container">
        <h1>Vos dernières consomations</h1>
        <p>{{ data }}</p>
        <canvas id="myChart" class="my-4 w-100" width="900" height="380"></canvas>
    </main>
</template>

<script>
import Chart from 'chart.js';   
const axios = require('axios');

export default {
    name: 'home',
    data: {
        dataShow: null
    }
}
</script>

<style lang="css" scoped>
</style>
