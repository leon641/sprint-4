<template>
  <section class="dashBoard-container">
      <h1>reserations</h1>
    <section class="reservations-container">

        <section class="reservations-chart header">

        <div class="thead col1">Appartment</div>
        <div class="thead col2">Guest</div>
        <div class="thead col3">Check-in</div>
        <div class="thead col4">Check-out</div>
        <div class="thead col5">TotalPrice</div>
        <div class="thead col6">Status</div>
        </section>
      <ul  class="reservations-chart"
      v-for="order in myOrders" :key="order._id">
     
        <li class="reservations-chart-item col1">{{order.stay.name}}</li>
         <li class="reservations-chart-item col2">{{order.buyer.fullname}}</li>
         <li class="reservations-chart-item col3">{{order.startDate}}</li>
         <li class="reservations-chart-item col4">{{order.endDate}}</li>
         <li class="reservations-chart-item col5">{{order.totalPrice}}</li>
         <li class="reservations-chart-item col6">{{order.status}}</li>
         <li class="reservations-chart-item col7">
          <button>Aprove</button>
         <button>Reject</button>
         </li>
 
        </ul>
    </section>
  </section>
</template>
<script>
export default {
  props: {
    userId: String,
  },
  async created() {
    await this.$store.dispatch({ type: "loadOrders" });
    const myOrders = await this.$store.dispatch({
      type: "getMyOrders",
      userId: this.userId,
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
  computed: {},
  components: {},
};
</script>