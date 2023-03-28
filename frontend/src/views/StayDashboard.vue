<template>
<section class="dashBoard-container">
         <RouterLink to="/dashboard/reservations">Reservations</RouterLink>|
            <RouterLink to="/dashboard/stay/listing">Create listing</RouterLink>|
            <RouterLink to="/dashboard/listing">Listing</RouterLink>|
<h1>Reservations</h1>
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
        <tbody>
            <td>img</td>
            <td>10/14/2018</td>
            <td>10/20/2018</td>
            <td>12/12/2022</td>
            <td>Moshe's house</td>
            <td>$546.00</td>
            <td>Completed</td>
        </tbody>
    </table>

</section>
</section>
</template>
<script>
import StayEdit from './StayEdit.vue'
import StayListing from './StayListing.vue'
export default {
  async created(){
        await this.$store.dispatch({type:'loadOrders'})
        this.loggedinUser= this.$store.getters.loggedinUser
        this.orders=this.$store.getters.orders
        console.log('loging in dash',this.loggedinUser);
        console.log('this.orders in dash',this.orders);
        
    },
  data() {
    return {
        loggedinUser:null,
        orders:[]
    };
  },
  computed: {},
};
</script>