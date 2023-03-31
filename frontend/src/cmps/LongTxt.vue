<template>
 <p >{{txt}}
    
</p>
 <div class="show-more-btn">
          <!-- <a>Show More</a><span
            class="total-review-svg"
            v-html="getSvg('showMoreArrowRight')"
          ></span> -->
        </div>
</template>
<script>
import { svgService } from '../services/svg.service';
export default {
    props:{
        desc:String
    },created(){
        
        },
 data() {
     return {
         defultNumOfChars: 100,
     
            isShown: false,
        }
    },methods: {
    getSvg(type) {
      return svgService.getSvg(type);
    },
  },
     computed: {
        
        txt() {
       
        let shortTxt
        const txtLong=this.desc?.length
            if (txtLong > this.defultNumOfChars)
            console.log('txtLong',txtLong);
            
              shortTxt=this.desc?.slice(0, this.defultNumOfChars) + '...';
              return shortTxt
          
        },

    },
};
</script>