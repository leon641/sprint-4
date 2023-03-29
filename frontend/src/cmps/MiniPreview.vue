<!--בס"ד-->

<template>
    <div class="mini-preview">
      <img :src="stay.imgUrls[0]" />
      <p>{{ stay.name }}</p>
      <p>{{ stay.loc.address }}</p>
      <p>{{ stay.capacity }}</p>
      <p>{{ stay.bedrooms }}</p>
      <p>{{ stay.price }}</p>
      <button class="edit" @click="edit">Edit</button>
    </div>
</template>

<script>
export default {
  props: {
    stay: Object,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    edit() {
      this.$router.push(`/dashboard/edit/${this.stay._id}`);
    },
  },
  computed: {},
  components: {},
};
</script>

