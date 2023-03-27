<!-- בס"ד -->

<template>
  <div class="header-container full" :class="layout">
    <div class="main-header">
      <div class="logo" @click="toHome">
        <img src="../assets/img/logo.png" alt="logo" />
        <p>appbnb</p>
      </div>
      <Filter
        @expand="expand"
        @toWhere="toWhere"
        @toCheck="toCheck"
        @toWho="toWho"
      />
      <div class="user-area">
        <div>
          <a>Airbnb your home</a>
        </div>
        <div class="hamburger" @click="toggleModal">
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
          <div class="user-modal" v-if="isOpen">
            <div class="login">Login</div>
            <div class="singup">Singup</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isExpanded" class="secondary-header">
    <BigFilter
      :propWhere="propWhere"
      :propCheck="propCheck"
      :propWho="propWho"
    />
    <div class="screen" @click="closeFilter"></div>
  </div>
  <FilterModal
    :propWhere="propWhere"
    :propCheck="propCheck"
    :propWho="propWho"
  />
</template>

<script>
import Filter from "./Filter.vue";
import BigFilter from "./BigFilter.vue";
import FilterModal from "./FilterModal.vue";

export default {
  data() {
    return {
      layout: "stay-app",
      isExpanded: false,
      propWhere: "",
      propCheck: "",
      propWho: "",
      isOpen: false,
    };
  },
  created() {
    console.log('km',this.$route.params);
    
    if (this.$route.params.stayId) {
      console.log('545');
      
      this.layout = "stay-details";
    }
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
    toCheck() {
      this.propCheck = "focus";
    },
    toWho() {
      this.propWho = "focus";
    },
    closeFilter() {
      this.expand();
      this.propWhere = "";
      this.propCheck = "";
      this.propWho = "";
    },
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
  components: {
    Filter,
    BigFilter,
    FilterModal,
  },
};
</script>