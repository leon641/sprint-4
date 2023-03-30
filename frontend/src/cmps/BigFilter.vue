<!-- בס"ד -->

<template>
  <div class="big-pill">
    <div class="where-container" :class="propWhere" @click="switchToWhere">
      <div class="where-content">
        <div class="where">
          <p>Where</p>
          <input
            type="text"
            placeholder="Search destinations"
            v-model="filterBy.txt"
          />
        </div>
      </div>
    </div>
    <div class="separator where-in"></div>
    <div class="check">
      <div class="in" :class="propCheck" @click="switchToCheck">
        <div>Check in</div>
        <div>Add dates</div>
      </div>
      <div class="separator in-out"></div>
      <div class="out" :class="propCheckOut" @click="switchToCheckOut">
        <div>Check out</div>
        <div>Add dates</div>
      </div>
    </div>
    <div class="separator out-search"></div>
    <div class="search-container" :class="propWho" @click="switchToWho">
      <div class="search-content">
        <div class="who">
          <div>Who</div>
          <div>Add guests</div>
        </div>
        <span class="search">
          <div>
            <SearchBtn :filterBy="filterBy" @closeFilter="closeFilter" />
          </div>
        </span>
      </div>
    </div>
    <FilterModal
      :propWhere="propWhere"
      :propCheck="propCheck"
      :propCheckOut="propCheckOut"
      :propWho="propWho"
      @setRegion="setRegion"
    />
  </div>
</template>

<script>
import SearchBtn from "./SearchBtn.vue";
import FilterModal from "./FilterModal.vue";

export default {
  components: { SearchBtn, FilterModal },
  props: {
    propWhere: String,
    propCheck: String,
    propCheckOut: String,
    propWho: String,
  },
  data() {
    return {
      // propRegion: "",
      filterBy: {
        txt: "",
        region: "",
      },
    };
  },
  created() {
    // console.log("filterBy", this.filterBy);
    // console.log("r", this.propRegion);
    // this.filterBy.txt = "";
    // this.filterBy.region = "";
  },
  computed: {
    // txt() {
    //   return this.propRegion;
    // },
    // region() {
    //   return this.propRegion;
    // },
    // setRegion(payload) {
    //   // console.log("payload", payload);
    //   this.propRegion = payload;
    // },
  },
  methods: {
    switchToWhere() {
      this.$emit("switchToWhere");
    },
    switchToCheck() {
      this.$emit("switchToCheck");
    },
    switchToCheckOut() {
      this.$emit("switchToCheckOut");
    },
    switchToWho() {
      this.$emit("switchToWho");
    },
    closeFilter() {
      this.$emit("closeFilter");
    },
    // clearProps() {
    //   this.$emit("clearProps");
    //   console.log("15");
    // },
    clearProps() {
      this.propWhere = "";
      this.propCheck = "";
      this.propCheckOut = "";
      this.propWho = "";
    },
    // switchTWhere() {
    //   this.clearProps();
    //   this.propWhere = "focus";
    // },
    // switchTCheck() {
    //   this.clearProps();
    //   this.propCheck = "focus";
    // },
    // switchTCheckOut() {
    //   this.clearProps();
    //   this.propCheckOut = "focus";
    // },
    // switchTWho() {
    //   this.clearProps();
    //   this.propWho = "focus";
    // },
    setRegion(payload) {
      // console.log("payload", payload);
      this.filterBy.txt = payload;
      this.filterBy.region = payload;
    },
  },
  emits: [
    "switchToWhere",
    "switchToCheck",
    "switchToCheckOut",
    "switchToWho",
    "closeFilter",
  ],
};
</script>
