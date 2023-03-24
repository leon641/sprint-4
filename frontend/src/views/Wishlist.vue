<template>
<div class="wishlist-container main-container">
  <h1 class="wishlist-header full">Wishlist</h1>
  <div class="wish-stay-list">
        <WishStayList :wishList="wishList"/>
  </div>

</div>
</template>
<script>

import WishStayList from "../cmps/WishStayList.vue"

export default {
  data() {
    return {
      idArray : [
        '10006546',
        '10006546',
        '10006546'],

        wishList : [],
    }
  },
  created() {
    this.wishList = this.$store.getters.wishList
    console.log('in wishList', this.wishList);
  },
  computed: {
    
  },
  components : {
    WishStayList,
  },
};
</script>