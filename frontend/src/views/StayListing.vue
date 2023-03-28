<!-- בס"ד -->

<template>
  <h2>shalom</h2>
</template>
<script>
export default {
  props: {
    userId: String,
  },
  data() {
    return {
      loggedinUser: {},
      stays: [],
    };
  },
  created() {
    this.stays = this.$store.getters.stays.filter(stay=>stay.)
    ;
  },
  computed: {},
};
</script>