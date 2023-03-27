<!-- בס"ד -->

<template>
  <div class="big-pill">
    <div class="where-container" :class="propWhere" @click="switchToWhere">
      <div class="where-contant">
        <div class="where">
          <p>Where</p>
          <input type="text" placeholder="Search destinations" v-model="filterBy.txt" />
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
            <SearchBtn />
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBtn from "./SearchBtn.vue";
export default {
  components: { SearchBtn },
  props: {
    propWhere: String,
    propCheck: String,
    propCheckOut: String,
    propWho: String,
  },
  data() {
    return {
      filterBy:{
        txt:''

      }
    };
  },
  created() {},
  computed: {},
  methods: {
    switchToWhere() {
      this.$emit("switchTWhere");
    },
    switchToCheck() {
      this.$emit("switchTCheck");
    },
    switchToCheckOut() {
      this.$emit("switchTCheckOut");
    },
    switchToWho() {
      this.$emit("switchTWho");
    },
  },
  emits: ["switchTWhere", "switchTCheck", "switchTCheckOut", "switchTWho"],
};
</script>
