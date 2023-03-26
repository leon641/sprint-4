<!-- בס"ד -->

<template>
  <div class="stay-list">
    <StayPreview v-for="stay in stays" :stay="stay" :key="stay._id" />
  </div>
  <!-- <LoginSignUp /> -->
  
</template>

<script>
import { stayService } from "../services/stay.service.local.js";
import StayPreview from "./StayPreview.vue";
import LoginSignUp from "./LoginSignUp.vue";

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
    LoginSignUp
  },
};
</script>