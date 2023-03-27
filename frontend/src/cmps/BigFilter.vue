<!-- בס"ד -->

<template>
  <div class="big-pill">
    <div class="where-container" :class="propWhere">
      <div class="where-contant">
        <div class="where">
          <p>Where</p>
          <input type="text" placeholder="Search destinations" />
        </div>
      </div>
    </div>
    <div class="separator where-in"></div>
    <div class="check">
      <div class="in" :class="propCheck">
        <div>Check in</div>
        <div>Add dates</div>
      </div>
      <div class="separator in-out"></div>
      <div class="out">
        <div>Check out</div>
        <div>Add dates</div>
      </div>
    </div>
    <div class="separator out-search"></div>
    <div class="search-container" :class="propWho">
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
    propWho: String,
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
