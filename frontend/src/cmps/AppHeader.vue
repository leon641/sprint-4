<!-- בס"ד -->

<template>
  <header :class="border" class="full stay-app">
    <!-- <nav>
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
    </section> -->
    <div class="main-header">
      <div class="logo" @click="toHome">
        <img src="../assets/img/logo.png" alt="logo" />
        appbnb
      </div>
      <Filter @expand="expand" />
      <div class="user-area">
        <div>
          <a>Airbnb your home</a>
        </div>
        <div class="hamburger">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <g fill="none" fill-rule="nonzero">
              <path d="m2 16h28"></path>
              <path d="m2 24h28"></path>
              <path d="m2 8h28"></path>
            </g>
          </svg>
          <img
            class="fnky2vc dir dir-ltr"
            src="https://a0.muscache.com/im/pictures/user/71e528e9-e78f-4f64-9be2-568194f777b0.jpg?aki_policy=profile_medium"
            alt=""
          />
        </div>
      </div>
    </div>
  </header>
  <div v-if="isExpanded" class="secondary-header">
    <BigFilter />
    <div class="screen" @click="expand"></div>
  </div>
</template>
<script>
import Filter from "./Filter.vue";
import BigFilter from "./BigFilter.vue";

export default {
  data() {
    return {
      isExpanded: false,
      border: "",
    };
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
    expand() {
      this.isExpanded = !this.isExpanded;
      this.border = this.isExpanded ? "no-border" : "";
    },
  },
  components: {
    Filter,
    BigFilter,
  },
};
</script>