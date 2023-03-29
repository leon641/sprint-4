<!--בס"ד-->

<template>
  <div class="flex">
    <img :src="stay.imgUrls[0]" />
    <h4>{{ stay.name }}</h4>
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
    edit(){
        this.$router.push(`/dashboard/edit/${this.stay._id}`)
    },
  },
  computed: {},
  components: {},
};
</script>

