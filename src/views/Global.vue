<template lang="html">
    <main role="main" class="container">
        <div class="container px-lg-5">
            <div class="row mx-lg-n5">
                <div class="col py-5 px-lg-5 border bg-light">
                    <h1 style="text-align: center;">Dernières Statistiques</h1>
                    <canvas id="chartWater" class="my-4 w-100" width="900" height="380"></canvas>
                </div>
                <div class="col py-5 px-lg-5 border bg-light">
                    <h1 style="text-align:center;">SunPoints</h1>
                    <canvas style=" margin-top: 32px;" id="graph" class="w-100" width="900" height="380"></canvas>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Chart from 'chart.js';

export default {
    name: 'Global',
    methods: {
        createChartTwo(charType, data, label) {
            var ctx = document.getElementById(charType).getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: label,
                    datasets: [{
                        label: "Productivité/heures",
                        backgroundColor: 'rgb(0, 175, 50)',
                        borderColor: 'rgb(0, 175, 50)',
                        data: data,
                        fill: false,
                    }, {
                        label: "Consommation/heures",
                        backgroundColor: 'rgb(255, 0, 0)',
                        borderColor: 'rgb(255, 0, 0)',
                        data: ['200', '125', '25', '277', '127', '364', '460', '54', '706', '40', '45', '34','40', '12', '24', '35', '90', '60', '40', '20', '76', '40', '65'],
                        fill: false,
                    }]
                },

                // Configuration options go here
                options: {
                     elements: {
                        point:{
                            radius: 0
                        }
                    },
                    legend:{
                        position: 'bottom',
                    }
                
                }
            });
        },
        createChartOne(charType, data, label) {
            var ctx = document.getElementById(charType).getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',

                // The data for our dataset
                data: {
                    labels: label,
                    datasets: [{
                        label: "Productivité/heures",
                        backgroundColor: 'rgb(0, 175, 50)',
                        borderColor: 'rgb(0, 175, 50)',
                        data: data,
                        fill: false,
                    }]
                },

                // Configuration options go here
                options: {
                     elements: {
                        point:{
                            radius: 0
                        }
                    },
                    legend:{
                        position: 'bottom',
                    }
                
                }
            });
        }
        
    },
    mounted() {
      this.createChartTwo('chartWater', ['140', '50', '200', '680', '425', '140', '240', '40', '130', '240', '440', '640','340'],
       ['0','2','4','6','8','10','12','14','16','18','20','22', '23']);
      this.createChartOne('graph', ['233', '125', '225', '24', '142', '34', '40', '54', '76', '40', '45', '34','40', '12'],
       ['1','2', '3', '4', '5', '6', '7','8', '9', '10', '11','12']);
    }
}

</script>

<style lang="css" scoped>
    .container{
        margin-top: 150px;
    }
    @media screen and (max-width: 780px) {
        .container{
            margin-top: 30px;
        }
    }
</style>
