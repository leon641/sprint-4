<!-- בס"ד -->

<template>
  <div class="stay-list">
    <StayPreview  v-for="stay in stays" :stay="stay" :key="stay._id" />
  </div>
</template>

<script>
import { stayService } from "../services/stay.service.local.js";
import StayPreview from "./StayPreview.vue" 

export default {
   data() {
        return {
        
        }
    },
    computed : {
          stays() {
           return this.$store.getters.stays
          }
    },
  components: {
    StayPreview,
  },
 
} 
</script>