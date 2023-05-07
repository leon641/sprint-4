
<template>


      <footer class="mobile-footer full flex">

        <div class="mobile-footer-item flex item1" @click="toHome">
     <span v-html="getSvg('explore')"></span>
        <span class="footer-txt-btn" >Explore</span>
        </div>
        <div class="mobile-footer-item flex item2" @click="toWishList">
     <div v-html="getSvg('hreat2')"></div>
        <span class="footer-txt-btn" >Wishlist</span>
        </div>
        <div class="mobile-footer-item flex item3" @click="toMyTrips">
     <div v-html="getSvg('airbnb')"></div>
        <span class="footer-txt-btn">Trips</span>
        </div>
       
      </footer>


</template>
<script>
import { svgService } from '../services/svg.service';
export default {
    name:'app-mobile-footer',
  data() {
      return {
          
          };
  },
  created(){
    console.log('mobile footer');
    
  },
  methods:{
    getSvg(type){
    return svgService.getSvg(type)
    },
    toHome(){
       this.$router.push("/");
    },
    toWishList(){
      this.$router.push("/wishlist");

    },
    toMyTrips(){
       this.$router.push("/trips");
    }

    

  },
  computed: {},
  
};
</script>