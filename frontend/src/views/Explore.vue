
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
      lastSearch:null,
      filterBy: {
        txt: this.$route.query.txt,
        region: this.$route.query.region,
        search: this.$route.query.search,
      },
    };
  },
  computed: {
    stays(){
     return  this.$store.getters.stays
    }
  },
  created() {
    console.log('this.$route.query',this.$route.query);
    this.lastSearch =  this.filterBy
    this.$store.dispatch({ type: "loadStays", filterBy: this.filterBy });
  },
  watch: {
    $route() {
      if ( this.lastSearch !== this.$route.query) {
        console.log('this.lastSearch !== this.$route.query',this.lastSearch !== this.$route.query);
        
        const filterBy = {
          txt: this.$route.query.txt,
          region: this.$route.query.region,
          search: this.$route.query.search,
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
