<template>
 <p>{{txt}}
    
</p>
</template>
<script>
export default {
    props:{
        desc:String
    },created(){
        
        },
 data() {
     return {
         defultNumOfChars: 130,
     
            isShown: false,
        }
    }
    , computed: {
        
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