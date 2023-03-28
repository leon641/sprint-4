<template>
<section class="dashBoard-container">
    
</section>
<h1>hiiiiiiiiii</h1>
</template>
<script>
export default {
    created(){
        this.loggedinUser= this.$store.getters.loggedinUser
        console.log('loging in dash',this.loggedinUser);
        
    },
  data() {
    return {
        loggedinUser:null
    };
  },
  computed: {},
};
</script>