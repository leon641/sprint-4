<!-- בס"ד -->

<template>

    <section class="main-footer full" :class="layout" >
      <div class="footer-items">
        <span class="footer-item item1">© 2023 Appbnb, Inc.</span>
        <span>·</span>
        <span class="footer-item item2"> Terms</span>
        <span>·</span>
        <span class="footer-item item3">Sitemap</span>
        <span>·</span>
        <span class="footer-item item4">Privacy</span>
      </div>
    </section>

</template>
<script>
export default {
  data() {
    return {
      layout: "stay-app",
    };
  },
  computed: {},
  watch: {
    $route() {
      this.layout =
        this.$route.name === "StayDetails"
          ? (this.layout = "stay-details")
          : (this.layout = "stay-app");
    },
  },
};
</script>