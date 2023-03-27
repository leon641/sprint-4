<!-- בס"ד -->

<template>
  <div class="filter" @click="expand">
    <section class="filter-btns">
      <div class="start-content">
        <div class="start">Start your search</div>
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
      </div>
    </section>
  </div>
</template>

<script>
export default {
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
