<template>

    <BarChart :chartData="testData" :options="options"/>
</template>

<script lang="ts">
import { BarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
    name: 'stay chart',
    components: { BarChart },
    data() {
        return {
            testData: {
                labels: ['June', 'July', 'August', 'September', 'October', 'November '],
                datasets: [
                    {
                        data: [100, 130, 40, 60, 70, 20],
                        backgroundColor: [
                            '#f1ed63',
                            '#96cd39',
                            '#df6a6a',
                            '#d97d97',
                            '#9862ae',
                            '#ff5b44',
                        ],
                    },
                ],
            },
            options: {
                plugins: {
                    legend: { display: false }
                    // legend: { position: 'left' }
                }, 
                methods : {

                },
                computed : {
  
   
                },
            }
        }
    },
}
</script>
