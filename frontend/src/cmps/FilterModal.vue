<!-- בס"ד -->

<template>
  <div v-if="propWhere" class="where-modal"></div>
  <div v-if="propCheck" class="check-modal"></div>
  <div v-if="propWho" class="who-modal"></div>
</template>

<script>
export default {
  props: {
    propWhere: String,
    propCheck: String,
    propWho: String,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  emits: [],
};
</script>

