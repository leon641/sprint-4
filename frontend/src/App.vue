<!-- בס"ד -->

<template>
  <section class="stay-app">
    <AppHeader :layout="layout" @inIndex="inIndex"/>
    <RouterView @inDetails="inDetails"/>
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
    return {
      layout: "stay-app",
    };
  },
  created() {
    console.log("Vue App created");
    const user = userService.getLoggedinUser();
    if (user) store.commit({ type: "setLoggedinUser", user });
  },
  methods: {
    inDetails() {
      this.layout = "stay-details";
    },
    inIndex() {
      this.layout = "stay-app";
    },
  },
  components: {
    AppHeader,
    UserMsg,
    AppFooter,
  },
};
</script>