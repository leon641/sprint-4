<!-- בס"ד -->

<template  >

  <div v-if="stays" class="stay-list"   >
    <StayPreview v-for="stay in stays" :stay="stay" :key="stay._id" />
  </div>
 <SkeletonLoader v-else/>
  
</template>


<script>
import StayPreview from "./StayPreview.vue";
import LoginSignUp from "./LoginSignUp.vue";
import SkeletonLoader from '../cmps/SkeletonLoader.vue';


export default {
  data() {
    return {};
  },
  computed: {
    stays() {
      return this.$store.getters.stays;
    },
  },
  components: {
    StayPreview,
    LoginSignUp,
      SkeletonLoader,

  },
};
</script>