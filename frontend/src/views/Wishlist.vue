<template>
<div class="wishlist-container">
  <h1 class="wishlist-header full">Wishlist</h1>

        <WishStayList :wishList="wishList"/>

</div>
</template>
<script>

import WishStayList from "../cmps/WishStayList.vue"

export default {
  data() {
    return {
        wishList : [],
    }
  },
  created() {
    this.wishList = this.$store.getters.wishList
    
  },
  computed: {
    
  },
  components : {
    WishStayList,
  },
};
</script>
