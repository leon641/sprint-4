<!-- בס"ד -->

<template>
  <div class="mini-preview">
    <h5>Preview</h5>
    <h5>Name</h5>
    <h5>Address</h5>
    <h5>Capacity</h5>
    <h5>Bedrooms</h5>
    <h5>Price</h5>
  </div>
  <ul>
    <li v-for="stay in stays" :key="stay">
      <MiniPreview :stay="stay" />
    </li>
  </ul>
</template>
<script>
import MiniPreview from "../cmps/MiniPreview.vue";

export default {
  props: {
    userId: String,
  },
  data() {
    return {
      stays: [],
    };
  },
  async created() {
    this.stays = await this.$store.dispatch({
      type: "myStays",
      userId: this.userId,
    });
    // console.log('this.stays',this.stays)
  },
  computed: {},
  components: {
    MiniPreview,
  },
};
</script>