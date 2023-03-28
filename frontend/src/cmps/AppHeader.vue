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
        :layout="layout"
        @expand="expand"
        @toWhere="toWhere"
      />
      <div class="user-area">
        <div>
          <a>Airbnb your home</a>
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
          <img
            class="fnky2vc dir dir-ltr"
            src="https://a0.muscache.com/im/pictures/user/71e528e9-e78f-4f64-9be2-568194f777b0.jpg?aki_policy=profile_medium"
            alt=""
          />

          <UserMenu v-if="isMenu" @openLogin="openLogin" />
        </div>
      </div>
    </div>
  </div>
  <div v-if="isExpanded" class="secondary-header">
    <BigFilter
      :propWhere="propWhere"
      :propCheck="propCheck"
      :propCheckOut="propCheckOut"
      :propWho="propWho"
      :propRegion="propRegion"
      @switchTWhere="switchTWhere"
      @switchTCheck="switchTCheck"
      @switchTCheckOut="switchTCheckOut"
      @switchTWho="switchTWho"
      @closeFilter="closeFilter"
    />
    <div class="screen" @click="closeFilter"></div>
  </div>
  <FilterModal
    :propWhere="propWhere"
    :propCheck="propCheck"
    :propCheckOut="propCheckOut"
    :propWho="propWho"
    @setRegion="setRegion"
  />

  <LoginSignUp v-if="isOpen" @openLogin="openLogin" />
</template>

<script>
import Filter from "./Filter.vue";
import DetailsFilter from "./DetailsFilter.vue";
import BigFilter from "./BigFilter.vue";
import FilterModal from "./FilterModal.vue";
import UserMenu from "./UserMenu.vue";
import LoginSignUp from "./LoginSignUp.vue";

export default {
  props: {
    layout: String,
  },
  data() {
    return {
      isExpanded: false,
      propWhere: "",
      propCheck: "",
      propCheckOut: "",
      propWho: "",
      propRegion: "",
      isMenu: false,
      isOpen: false,
    };
  },
  created() {
    // console.log("km", this.$route);
    // if (this.$route.params.stayId) {
    //   console.log("545", this.$route.params.stayId);
    //   this.layout = "stay-details";
    // }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
  methods: {
    toHome() {
      this.$router.push("/");
      this.$emit("inIndex");
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
      console.log('ho');
      
    },
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
    switchTWhere() {
      this.clearProps();
      this.propWhere = "focus";
    },
    switchTCheck() {
      this.clearProps();
      this.propCheck = "focus";
    },
    switchTCheckOut() {
      this.clearProps();
      this.propCheckOut = "focus";
    },
    switchTWho() {
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
    setRegion(payload) {
      console.log('payload',payload)
      this.propRegion = payload;
    },
  },
  emits: ["inIndex"],
  components: {
    Filter,
    BigFilter,
    FilterModal,
    DetailsFilter,
    UserMenu,
    LoginSignUp,
  },
};
</script>