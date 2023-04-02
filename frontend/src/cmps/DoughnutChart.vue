<template>
<div class="revenue-summery-container">
<h3>Revenue summary</h3>
<div class="revenue-box">
<h5 class="revenue-item1">This week</h5>
 <span class="revenue-item2">$1,040</span>
<div class="img-percent revenue-item3">
<img src="../assets/img/arrow/newarrow2.png" alt="" srcset="">
<h4>12.3%</h4>
</div>

</div>
<div class="revenue-box">
<h5 class="revenue-item1">This month</h5>
<span class="revenue-item2">$6,212</span>
<div class="img-percent revenue-item3">
<img src="../assets/img/arrow/newarrow2.png" alt="" srcset="">
<h4>8.7%</h4>
</div>

</div>


<!-- <h3>This quarter <span>$9,512</span></h3>

<h3>This year <span>$14,439</span></h3> -->

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
                    legend: { position: 'bottom' }
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
