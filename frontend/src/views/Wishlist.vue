<template>
<div class="wishlist-container">
  <h1 class="wishlist-header full">Wishlist</h1>

        <WishStayList :wishList="wishList"/>

</div>
    <MobileFooter/>
</template>
<script>
import MobileFooter from '../cmps/MobileFooter.vue';

import WishStayList from "../cmps/WishStayList.vue"

export default {
  data() {
    return {
        wishList : [],
    }
  },
  async created() {
    const user=this.$store.getters.loggedinUser

   const wishList= await this.$store.dispatch({type:'getLikedStays',stayNames:user.likedByUsers})
   const reverseWishList = []
   for(let i = wishList.length-1; i > 0; i--) {
    reverseWishList.push(wishList[i])
   }
   this.wishList = reverseWishList

  },
  computed: {
    
  },
  components : {
    WishStayList,
    MobileFooter
  },
};
</script>
