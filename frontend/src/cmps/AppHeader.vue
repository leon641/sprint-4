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
        <div class="txt-container">
          <a style="{fontSize:14px;}" class="airbnb-slogen">Appbnb your home</a>
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
          <img v-if="loggedInUser"  :src="loggedInUser?.imgUrl"  alt="" />
          <img v-else src="https://res.cloudinary.com/dii16awkb/image/upload/v1684053261/unprofile_ji7zus_z2immz.png" alt="" />

          <UserMenu v-if="isMenu" @openLogin="openLogin" />
        </div>
      </div>
    </div>
  </div>
  <MobileFilter
   @expandMobile="expandMobile" 
  />


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
import { svgService } from '../services/svg.service';

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
    getSvg(type){
      return svgService.getSvg(type)
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
   expandMobile(){
    this.$emit('mobileFilter')
   }
  },
  watch: {
    $route() {
      console.log('  this.$route',  this.$route);
      
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
  },emits:['mobileFilter']
};
</script>