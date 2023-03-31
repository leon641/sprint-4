<template>

<div @click="goToDetails(place._id)" v-if="place.imgUrls" class="imgs-container">
        <img  v-for="(url,index) in place.imgUrls.slice(0,3)" :src="url" :class="`wish-img`+(index+1)"  :key="index" />
      </div>
      <h3>{{place.name}}</h3>



</template>
<script>
export default {
    props : {
        place : Object
    },
    created() {
        
    },
  data() {
    return {
    
    };
  },
  computed: {},
  methods :{
    goToDetails(stayId) {
      this.$router.push(`/details/${stayId}`)
    }
  },
}
</script>