<template lang="html">
    <main role="main" class="container">
        <div class="container px-lg-5">
            <div class="alert alert-danger" role="alert">
                <strong>Vous êtes sur réseau EDF !</strong>
            </div>
            <div class="block row mx-lg-n5">
                <div class="col py-5 px-lg-5 border bg-light">
                    <h1 style="text-align: center;">Vos Statistiques</h1>
                    <canvas id="chartWater" class="my-4 w-100" width="900" height="380"></canvas>
                </div>
                <div class="col py-5 px-lg-5 border bg-light">
                    <h1 style="text-align:center;">SunPoints</h1>
                    <canvas style="margin-top: 32px;" id="graph" class="w-100" width="900" height="380"></canvas>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Chart from 'chart.js';

export default {
    name: 'Personnel',
    methods: {
        createChart(charType, data, label) {
            var ctx = document.getElementById(charType).getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: label,
                    datasets: [{
                        label: "conso/heures",
                        backgroundColor: 'rgb(135, 49, 132)',
                        borderColor: 'rgb(135, 49, 132)',
                        data: data,
                        fill: false
                    }]
                },

                // Configuration options go here
                options: {
                     elements: {
                    point:{
                        radius: 0
                    }
                }
                }
            });
        }
    },
    mounted() {
      this.createChart('chartWater', ['40', '40', '40', '780', '400', '40', '40', '40', '100', '40', '40', '40','40', '40', '40', '780', '400', '40', '40', '40', '100', '40', '40', '40'], ['0','2','4','6','8','10','12','14','16','18','20','22', '23']);
      this.createChart('graph', ['2', '5', '25', '2', '12', '34', '40', '54', '76', '40', '45', '34','40', '12', '24', '35', '90', '60', '40', '20', '76', '40', '65', '40'], ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100', '105', '110', '115']);
    }
}

</script>

<style lang="css" scoped>
    .container{
        margin-top: 10px;
    }
    @media screen and (max-width: 780px) {
        .container{
            margin-top: 30px;
        }
    }
    .alert{
        text-align: center;
    }

    .block{
        margin-top: 76px;
    }
</style>
