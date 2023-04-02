<!-- בס"ד -->

<template>
  <div class="mobile-filter" @click="expand">
    <div className="icon">
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
      >
        <g fill="none">
          <path
            d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
          ></path>
        </g>
      </svg>
    </div>
    <div class="anywhere-container">
      <div class="anywhere">Anywhere</div>
      <div class="mobile-search-container">
        <div class="anyweek">Any week</div>
        <div class="dot">•</div>
        <div class="any-guests">Add guests</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    layout: String,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    expand() {
      this.$emit("expand");
      this.$emit("toWhere");
    },
  },
  emits: ["expand", "toWhere"],
};
</script>
