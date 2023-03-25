<template>

<div v-if="place.imgUrls" class="imgs-container">
        <img  v-for="(url,index) in place.imgUrls" :src="url" :class="`wish-img`+(index+1)"  :key="index" />
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
};
</script>