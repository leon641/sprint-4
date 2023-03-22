<!-- בס"ד -->

<template>
  <header class="main-header full stay-app">
    <nav>
      <RouterLink to="/">
        <span role="img" aria-label="logo">🙏</span>
      </RouterLink>
      <RouterLink to="/stay">Stays</RouterLink>
      <RouterLink to="/review">Reviews</RouterLink>
      <RouterLink to="/chat">Chat</RouterLink>
      <RouterLink to="/login">Login / Signup</RouterLink>
    </nav>
    <section class="loggedin-user" v-if="loggedInUser">
      <RouterLink :to="`/user/${loggedInUser._id}`">
        {{ loggedInUser.fullname }}
      </RouterLink>
      <span>{{ loggedInUser.score.toLocaleString() }}</span>
      <img :src="loggedInUser.imgUrl" />
    </section>
    <Filter />
  </header>
</template>
<script>
import Filter from "./Filter.vue";
export default {
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  components: {
    Filter,
  },
};
</script>