<!-- בס"ד -->

<!-- בס"ד -->

<template>
  <div class="stay-index">

    <StayList />
    <!-- <hr />
    <form @submit.prevent="addStay()">
      <h2>Add stay</h2>
      <input type="text" />
      <button>Save</button>
    </form> -->
  </div>
</template>

<script>
import StayList from "../cmps/StayList.vue";

export default {
  data() {
    return {
      filterBy: {
        txt: this.$route.query.txt,
        region: this.$route.query.region,            
      },
    };
  },
  computed: {},
  created() {
    // console.log('this.filterBy',this.filterBy)
    this.$store.dispatch({ type: "loadStays", filterBy: this.filterBy });
  },
  methods: {},
  components: {
    StayList,
  },
};
</script>
