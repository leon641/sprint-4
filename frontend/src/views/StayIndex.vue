<!-- בס"ד -->

<template>
  <div class="stay-index">
    <Carousel />
    <StayList v-if="isShown" />
      <SkeletonLoader v-else/>
  </div>
    <MobileFooter/>
</template>

<script>
import StayList from "../cmps/StayList.vue";
import MobileFooter from '../cmps/MobileFooter.vue';
import Carousel from "../cmps/FilterCarousel.vue";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { stayService } from "../services/stay.service.local";
import {
  getActionRemoveStay,
  getActionUpdateStay,
  getActionAddStayMsg,
} from "../store/stay.store";
import SkeletonLoader from '../cmps/SkeletonLoader.vue';
export default {
  data() {
    return {
      isShown: false,
       
    };
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
    stays() {
      return this.$store.getters.stays;
    },
  
  },
  async created() {
    // const user = userService.getLoggedinUser()
    // console.log(user,'in app index');
    var time =  Date()
    console.log('time',time);
    
    window.scrollTo(0, 0);
    this.$store.dispatch({ type: "switchLayout", layout: "stay-app" });
    await this.$store.dispatch({ type: "loadStays" });
    //  await this.$store.dispatch({ type: "loadUsers" });
    await this.$store.dispatch({ type: "loadLoggedinUser" });
    this.isShown = true;
  },
  mounted() {},
  methods: {
    async addStay() {
      try {
        await this.$store.dispatch({ type: "addStay", stay: this.stayToAdd });
        showSuccessMsg("Stay added");
        this.stayToAdd = stayService.getEmptyStay();
      } catch (err) {
        console.log(err);
        showErrorMsg("Cannot add stay");
      }
    },
    async removeStay(stayId) {
      try {
        await this.$store.dispatch(getActionRemoveStay(stayId));
        showSuccessMsg("Stay removed");
      } catch (err) {
        console.log(err);
        showErrorMsg("Cannot remove stay");
      }
    },
    async updateStay(stay) {
      try {
        stay = { ...stay };
        stay.price = +prompt("New price?", stay.price);
        await this.$store.dispatch(getActionUpdateStay(stay));
        showSuccessMsg("Stay updated");
      } catch (err) {
        console.log(err);
        showErrorMsg("Cannot update stay");
      }
    },
    async addStayMsg(stayId) {
      try {
        await this.$store.dispatch(getActionAddStayMsg(stayId));
        showSuccessMsg("Stay msg added");
      } catch (err) {
        console.log(err);
        showErrorMsg("Cannot add stay msg");
      }
    },
    printStayToConsole(stay) {
      console.log("Stay msgs:", stay.msgs);
    },
  },
  components: {
    StayList,
    Carousel,
    MobileFooter,
    SkeletonLoader,
  },
};
//
</script>

