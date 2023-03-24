<!-- בס"ד -->

<template>
  <div class="header-container full stay-app">
    <div class="main-header">
      <div class="logo" @click="toHome">
        <img src="../assets/img/logo.png" alt="logo" />
        appbnb
      </div>
      <Filter @expand="expand" @toWhere="toWhere" />
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
  </div>
  <div v-if="isExpanded" class="secondary-header">
    <BigFilter :propWhere="propWhere" />
    <div class="screen" @click="closeFilter"></div>
    <FilterModal :propWhere="propWhere" />
  </div>
</template>

<script>
import Filter from "./Filter.vue";
import BigFilter from "./BigFilter.vue";
import FilterModal from "./FilterModal.vue";

export default {
  data() {
    return {
      isExpanded: false,
      propWhere: "",
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
    },
    toWhere() {
      this.propWhere = "focus";
    },
    closeFilter() {
      this.expand();
      this.propWhere = "";
    },
  },
  components: {
    Filter,
    BigFilter,
    FilterModal,
  },
};
</script>