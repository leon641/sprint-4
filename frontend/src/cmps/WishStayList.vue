<template>
<div class="wish-stay-list">
    <div v-for="place in wishList" :key="place._id">
        <WishStayPreview :place="place"/>
    </div>
</div>
</template>
<script>

import WishStayPreview from "./WishStayPreview.vue"

export default {
    props : {
        wishList : Array
    },
    created() {
      console.log('in wishstaylist',this.wishList);
    },
  data() {
    return {
      
    };
    
  },
  computed: {},

  components : {
    WishStayPreview
  }
};
</script>