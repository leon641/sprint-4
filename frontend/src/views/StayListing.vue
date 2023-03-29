<!-- בס"ד -->

<template>
  <div class="mini-preview">
    <h5>Stay image</h5>
    <h5>Stay name</h5>
    <h5>Stay address</h5>
    <h5>Stay capacity</h5>
    <h5>Stay bedrooms</h5>
    <h5>Stay price</h5>
    <h5>Edit stay</h5>
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