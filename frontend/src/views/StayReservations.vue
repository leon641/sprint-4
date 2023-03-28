<template>

  <section class="dashBoard-container">
    <pre>{{userId}}</pre>

    <section class="reservations-chart">
      <table class="table-reservation">
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
        </tbody>
      </table>
    </section>
  </section>
</template>
<script>


export default {
  props:{
    userId:String
    
  },
async created() {
  
  console.log('userId',this.userId);
this.orders = this.$store.getters.orders;
 console.log("loging in reservation",  this.orders);

  
  },
  data() {
    return {
     orders:[]
    };
  },
  computed: {},
  components: {
   
  },
};
</script>