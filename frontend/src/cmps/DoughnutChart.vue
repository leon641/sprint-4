<template>
<div class="revenue-summery-container">

<h2>Revenue summary</h2>
<h4>This week <span>$840</span></h4>

<h4>This month <span>$4,212</span></h4>

<h4>This quarter <span>$9,512</span></h4>

<h4>This year <span>$14,439</span></h4>

</div>
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
