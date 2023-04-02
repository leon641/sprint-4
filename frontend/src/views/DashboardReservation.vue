<template>
  <section class="dashBoard-container">
    <div class="chart">
    <DoughnutChart/>
    <div class="chart2">
    <BarChart/>

    </div>
    </div>

    <section class="reservations-container">

        <section class="reservations-chart header">
        <div class="thead col1">Appartment</div>
        <div class="thead col2">Guest</div>
        <div class="thead col3">Check-in</div>
        <div class="thead col4">Check-out</div>
        <div class="thead col5">Total Price</div>
        <div class="thead col6">Status</div>
        <div class="thead col6">Actions</div>
        </section>
      <ul  class="reservations-chart"
      v-for="order in myOrders" :key="order._id">
     
        <li class="reservations-chart-item col1">{{order.stay.name}}</li>
         <li class="reservations-chart-item col2">{{order.buyer.fullname}}</li>
         <li class="reservations-chart-item col3">{{order.startDate}}</li>
         <li class="reservations-chart-item col4">{{order.endDate}}</li>
         <li class="reservations-chart-item col5">{{order.totalPrice}}</li>
         <li class="reservations-chart-item col6">{{order.status ||'Approved'}}</li>
         <li class="reservations-chart-item col7">
          <button class="btn-approve">Approve</button>
         <button class="btn-reject">Reject</button>
         </li>
 
        </ul>
    </section>
  </section>
</template>
<script>

import DoughnutChart from "../cmps/DoughnutChart.vue"
import BarChart from "../cmps/BarChart.vue"

export default {
  props: {
    userId: String,
  },
  async created() {
    const orders=await this.$store.dispatch({ type: "loadOrders" });
    console.log('orders in dashres',orders);
    
    const myOrders = await this.$store.dispatch({
      type: "getMyOrders",
      userId: this.userId,
    });
    myOrders.forEach(el => {
      
         const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      });
      el.totalPrice=formatter.format(el.totalPrice)
    
    });
    this.myOrders = myOrders;
    console.log("myOrders in reservation", myOrders);
  },
  data() {
    return {
      orders: [],
      myOrders: [],
    };
  },
  computed: {
    // totalPrice(){
    //   const formatter = new Intl.NumberFormat("en-US", {
    //     style: "currency",
    //     currency: "USD",
    //     maximumFractionDigits: 0,
    //   });
    //   return formatter.format(this.order.totalPrice);
    // },
  },
  components: {
    DoughnutChart,
    BarChart
  },
};
</script>