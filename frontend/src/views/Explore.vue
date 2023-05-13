<!-- בס"ד -->

<!-- בס"ד -->

<template>
  <div class="stay-index">
  <h2 class="nth-found">found {{stays.length}} homes</h2>

    <StayList />
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
  computed: {
    stays(){
     return  this.$store.getters.stays
    }
  },
  created() {
    this.$store.dispatch({ type: "loadStays", filterBy: this.filterBy });
  },
  watch: {
    $route() {
      if (this.txt !== this.$route.query.txt) {
        const filterBy = {
          txt: this.$route.query.txt,
          region: this.$route.query.region,
        }
            this.$store.dispatch({ type: "loadStays", filterBy })
      }
    },
  },
  components: {
    StayList,
  },
};
</script>
