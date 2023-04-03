<!-- בס"ד -->

<template>
  <section class="stay-app">
    <AppHeader />
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

export default {
  data() {
    return {}
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

  },
  
  components: {
    AppHeader,
    UserMsg,
    AppFooter,
  },
};
</script>