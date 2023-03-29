<template>

  <section class="dashBoard-container">
    <pre>{{userId}}</pre>

    <section class="reservations-chart">
      <!-- <table class="table-reservation">
        <thead>
          <th>Guest</th>
          <th>Check-in</th>
          <th>Checkout</th>
          <th>booked</th>
          <th>Listing</th>
          <th>Total Payout</th>
          <th>Status</th>
          <th>Action</th>
        </thead>
        <tbody >
          <td >img</td>
          <td>10/14/2018</td>
          <td>10/20/2018</td>
          <td>12/12/2022</td>
          <td>Moshe's house</td>
          <td>$546.00</td>
          <td>Completed</td>
          <td>Completed</td>
          <td  v-for="order in orders" :key="order._id">{{order.hostId}}</td>
        </tbody>
      </table> -->
      <ul v-for="order in myOrders" :key="order._id">
        <li>

          <pre>{{order}}</pre>
        </li></ul>
    </section>
  </section>
</template>
<script>


export default {
  props:{
    userId:String

  },
async created() {
    await this.$store.dispatch({ type: "loadOrders" });
  console.log('userId',this.userId);
this.orders = this.$store.getters.orders;
 console.log("loging in reservation",  this.orders);

const myOrders = this.orders.find(order=>order.hostId===this.userId)
this.myOrders={...myOrders}
console.log('myOrders',this.myOrders);
  
  },
  data() {
    return {
     orders:[],
     myOrders:[],
    };
  },
  computed: {},
  components: {
   
  },
};
</script>