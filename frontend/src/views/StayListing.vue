<!-- בס"ד -->

<template>
  <h2>shalom</h2>
</template>
<script>
export default {
  props: {
    userId: String,
    orders: Array,
  },
  data() {
    return {
      loggedinUser: {},
      orders: [],
      stays: [],
    };
  },
  created() {
    this.orders = this.$store.getters.orders.filter(
      (order) => this.loggedinUser._id === order.buyer._id
    );

    this.stays = this.orders.map((order) => order.stay._id);

    console.log("this.orders", this.orders);
    console.log("this.orders", this.orders);
  },
  computed: {},
};
</script>