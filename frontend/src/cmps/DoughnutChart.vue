<template>
<h2>Revenue summary</h2>
    <DoughnutChart :chartData="testData" :options="options"/>
</template>

<script lang="ts">
import { DoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default {
    name: 'stay chart',
    components: { DoughnutChart },
    data() {
        return {
            testData: {
                labels: ['Yearly revenue', 'Monthly revenue', 'Weekly revenue'],
                datasets: [
                    {
                        data: [130, 40, 20,],
                        backgroundColor: [
                            'darkseagreen',
                            'orange',
                            '#0079AF',
                    
                        ],
                    },
                ],
            },
            options: {
                plugins: {
                    // legend: { display: false }
                    legend: { position: 'left' }
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
