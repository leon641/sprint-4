<!-- בס"ד -->

<template>
  <div v-if="propWhere" class="where-modal">
    <div class="flex">
      <div class="resent-searches">
        <h5>Recent searches</h5>
      </div>
      <div class="regions">
        <h5>Search by region</h5>
        <div class="grid">
          <div v-for="region in regions" :key="region">
            <img :src="region.url" />
            <p>{{ region.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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
    return {
      regions: [
        {
          title: "I'm flexible",
          url: "@/assets/img/regions/I'm flexible.jpg",
        },
        {
          title: "Italy",
          url: "@/assets/img/regions/Italy.webp",
        },
        {
          title: "Middle East",
          url: "@/assets/img/regions/Middle East.webp",
        },
        {
          title: "France",
          url: "@/assets/img/regions/France.jpg",
        },
        {
          title: "South America",
          url: "@/assets/img/regions/South America.jpg",
        },
        {
          title: "United Kingdom",
          url: "@/assets/img/regions/United Kingdom.jpg",
        },
      ],
    };
  },
  computed: {},
  methods: {},
  emits: [],
};
</script>

