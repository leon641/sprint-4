<template>
  <RouterLink to="/dashboard/reservations">Reservations</RouterLink>|
  <RouterLink to="/dashboard/edit">Create listing</RouterLink>|
  <RouterLink to="/dashboard/listing">Listing</RouterLink>|
  <RouterView />
</template>
<script>
import StayEdit from "./StayEdit.vue";
import StayListing from "./StayListing.vue";
import StayReservations from "./StayReservations.vue";

export default {
  async created() {
    await this.$store.dispatch({ type: "loadOrders" });
    this.loggedinUser = this.$store.getters.loggedinUser;
    this.orders = this.$store.getters.orders;
    console.log("loging in dash", this.loggedinUser);
    console.log("this.orders in dash", this.orders);
  },
  data() {
    return {
      loggedinUser: {},
      orders: [],
    };
  },
  computed: {},
  components: {
    StayEdit,
    StayListing,
    StayReservations,
  },
};
</script>