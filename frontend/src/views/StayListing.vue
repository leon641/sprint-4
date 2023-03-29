<!-- בס"ד -->

<template>
  <div class="mini-preview">
    <div class="flex">
      <h3>Stay image</h3>
      <h3>Stay name</h3>
      <h3>Stay address</h3>
      <h3>Stay capacity</h3>
      <h3>Stay bedrooms</h3>
      <h3>Stay price</h3>
      <h3>Edit stay</h3>
    </div>
    <ul>
      <li v-for="stay in stays" :key="stay">
        <MiniPreview :stay="stay" />
      </li>
    </ul>
  </div>
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