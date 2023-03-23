<!-- בס"ד -->

<template>
  <div class="stay-app">
    <StayList />
    <hr />
    <form @submit.prevent="addStay()">
      <h2>Add stay</h2>
      <input type="text" v-model="stayToAdd.vendor" />
      <button>Save</button>
    </form>
  </div>
</template>

<script>
import StayList from "../cmps/StayList.vue";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { stayService } from "../services/stay.service.local";
import {
  getActionRemoveStay,
  getActionUpdateStay,
  getActionAddStayMsg,
} from "../store/stay.store";
export default {
  components: { StayList },
  data() {
    return {
      stayToAdd: stayService.getEmptyStay(),
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
  created() {
    this.$store.dispatch({ type: "loadStays" });
  },
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
  },
};
</script>
