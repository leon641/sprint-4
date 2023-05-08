<!-- בס"ד -->

<template>
  <div class="header-container full" :class="layout">
    <div class="main-header">
      <div class="logo" @click="toHome">
        <img src="../assets/img/logo.png" alt="logo" />
        <p>appbnb</p>
      </div>
      <Filter
        v-if="layout === 'stay-app'"
        @expand="expand"
        @toWhere="toWhere"
        @toCheck="toCheck"
        @toCheckOut="toCheckOut"
        @toWho="toWho"
      />
      <DetailsFilter
        v-if="layout === 'stay-details'"
        @expand="expand"
        @toWhere="toWhere"
      />
      <div class="user-area">
        <div>
          <a class="your home airbnb really strong one">Appbnb your home</a>
        </div>
        <div class="hamburger" @click="toggleUserMenu">
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
          <img class="fnky2vc dir dir-ltr" :src="loggedInUser.imgUrl" alt="" />

          <UserMenu v-if="isMenu" @openLogin="openLogin" />
        </div>
      </div>
    </div>
  </div>
  <MobileFilter
   @expand="expand" 
    @toWhere="toWhere"/>


  <div v-if="isExpanded" class="secondary-header">
    <BigFilter
      :propWhere="propWhere"
      :propCheck="propCheck"
      :propCheckOut="propCheckOut"
      :propWho="propWho"
      @switchToWhere="switchToWhere"
      @switchToCheck="switchToCheck"
      @switchToCheckOut="switchToCheckOut"
      @switchToWho="switchToWho"
      @closeFilter="closeFilter"
    />
    <div class="screen" @click="closeFilter"></div>
  </div>

  <LoginSignUp v-if="isOpen" @openLogin="openLogin" />
</template>

<script>
import Filter from "./Filter.vue";
import DetailsFilter from "./DetailsFilter.vue";
import BigFilter from "./BigFilter.vue";
import MobileFilter from "./MobileFilter.vue";
import UserMenu from "./UserMenu.vue";
import LoginSignUp from "./LoginSignUp.vue";

export default {
  props: {},
  data() {
    return {
      layout: "stay-app",
      isExpanded: false,
      propWhere: "",
      propCheck: "",
      propCheckOut: "",
      propWho: "",
      isMenu: false,
      isOpen: false,
    };
  },
  created() {
    this.layout = this.$store.getters.layout;
    console.log('this.$store.getters.loggedinUser;',this.$store.getters.loggedinUser);
    
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  methods: {
    toHome() {
      this.$router.push("/");
      // this.$emit("inIndex");
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
    toCheckOut() {
      this.propCheckOut = "focus";
    },
    toWho() {
      this.propWho = "focus";
    },
    clearProps() {
      this.propWhere = "";
      this.propCheck = "";
      this.propCheckOut = "";
      this.propWho = "";
    },
    closeFilter() {
      this.expand();
      this.clearProps();
      // console.log("ho");
    },
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
    switchToWhere() {
      this.clearProps();
      this.propWhere = "focus";
    },
    switchToCheck() {
      this.clearProps();
      this.propCheck = "focus";
    },
    switchToCheckOut() {
      this.clearProps();
      this.propCheckOut = "focus";
    },
    switchToWho() {
      this.clearProps();
      this.propWho = "focus";
    },
    toggleUserMenu() {
      this.isMenu = !this.isMenu;
    },
    closeMenu() {
      this.isMenu = false;
    },
    openLogin() {
      this.isOpen = !this.isOpen;
    },
    // setRegion(payload) {
    //   console.log('payload',payload)
    //   this.propRegion = payload;
    // },
    //
  },
  watch: {
    $route() {
      this.layout =
        this.$route.name === "StayDetails"
          ? (this.layout = "stay-details")
          : (this.layout = "stay-app");
    },
  },
  // emits: ["inIndex"],
  components: {
    Filter,
    BigFilter,
    MobileFilter,
    DetailsFilter,
    UserMenu,
    LoginSignUp,
  },
};
</script>