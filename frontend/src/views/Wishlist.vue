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
  async created() {
    const user=this.$store.getters.loggedinUser

    console.log('this.$store.getters.loggedinUser',this.$store.getters.loggedinUser);
   const wishList= await this.$store.dispatch({type:'getLikedStays',stayNames:user.likedByUsers})
    this.wishList=wishList
    
    
  },
  computed: {
    
  },
  components : {
    WishStayList,
  },
};
</script>
