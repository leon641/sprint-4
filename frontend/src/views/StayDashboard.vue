<template>
    <nav class="dashboard-header">
    <RouterLink to="/dashboard/reservations" class="dashboard-link">Reservations</RouterLink>|
    <RouterLink to="/dashboard/edit" class="dashboard-link">Create listing</RouterLink>|
    <RouterLink  to="/dashboard/listing" class="dashboard-link">Listing</RouterLink>
    </nav>
    
      <RouterView 
      :orders="orders"
      :userId="loggedinUser._id"/>

</template>
<script>
import StayEdit from "./StayEdit.vue";
import StayListing from "./StayListing.vue";
import DashboardReservation from "./DashboardReservation.vue";

export default {
  async created() {
  await this.$store.dispatch({ type: "loadOrders" });
    this.loggedinUser = this.$store.getters.loggedinUser;
    this.orders = this.$store.getters.orders;
 console.log("orders in dash",  this.orders);
    console.log("loging in dash", this.loggedinUser);
  
  },
  data() {
    return {
      loggedinUser: {},
     orders:[]
    };
  },
  computed: {},
  components: {
    StayEdit,
    StayListing,
    DashboardReservation,
  },
};
</script>