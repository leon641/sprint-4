<template>
  <section class="dashBoard-container">
    <pre>{{ userId }}</pre>

    <h1>reserations</h1>
    <section class="reservations-container">
      <ul class="reservations-chart" v-for="order in myOrders" :key="order._id">
        <div class="col1">Appartment-</div>
        <div class="col2">Guest-</div>
        <div class="col3">Check-in-</div>
        <div class="col4">Checkout</div>
        <div class="col5">TotalPrice</div>
        <div class="col6">Status</div>

        <li class="reservations-chart-item col1">{{ order.stay.name }}</li>
        <li class="reservations-chart-item col2">{{ order.buyer.fullname }}</li>
        <li class="reservations-chart-item col3">{{ order.startDate }}</li>
        <li class="reservations-chart-item col4">{{ order.endDate }}</li>
        <li class="reservations-chart-item col5">{{ order.totalPrice }}</li>
        <li class="reservations-chart-item col6">{{ order.status }}</li>
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