<!-- בס"ד -->

<template>
    <MobileExplore v-if="isShown"/>
    
  <section v-else class="stay-app">
    <AppHeader @mobileFilter="mobileFilter" />
    <RouterView />
    <AppFooter />
    <UserMsg />
  </section>
</template>

<script>
import { userService } from "./services/user.service";
import { store } from "./store/store";

import AppHeader from "./cmps/AppHeader.vue";
import AppFooter from "./cmps/AppFooter.vue";
import UserMsg from "./cmps/UserMsg.vue";

import MobileExplore from './views/MobileExplore.vue';
export default {
  data() {
    return {
      isShown:false
    }
  },
  created() {
    console.log("Vue App created");
    const user = userService.getLoggedinUser();
    if (user){
      store.commit({ type: "setLoggedinUser", user })
    }else{
          const user = userService.login({ username: "shimon", password: "333" });
          
           store.commit({ type: "setLoggedinUser", user })
          console.log('loggdin with ',user.username);
    }

  },methods:{
    mobileFilter(){
      console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
      
      this.isShown=!this.isShown
    }
  }
  ,
  
  components: {
    AppHeader,
    UserMsg,
    AppFooter,
    MobileExplore,
  },
};
</script>