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
          <div class="flex" v-for="region in regions" :key="region">
            <div class="region-img">
              <img :src="region.url" />
            </div>
            <div class="region-title">
              <p>{{ region.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="propCheck" class="check-modal">
    <el-radio-group v-model="size" label="size control" size="small">
      <el-radio-button label="large">large</el-radio-button>
      <el-radio-button label="default">default</el-radio-button>
      <el-radio-button label="small">small</el-radio-button>
    </el-radio-group>
    <div class="demo-date-picker">
      <div class="block">
        <span class="demonstration">Default</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          :size="size"
        />
      </div>
      <div class="block">
        <span class="demonstration">With quick options</span>
        <el-date-picker
          v-model="value2"
          type="daterange"
          unlink-panels
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          :shortcuts="shortcuts"
          :size="size"
        />
      </div>
    </div>
  </div>
  <div v-if="propWho" class="who-modal">
    <div class="flex">
      <div class="guests-title">
        <h5 class="adults">Adults</h5>
        <p>Ages 13 or above</p>
      </div>
      <div class="adults flex">
        <button class="flex">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m2 16h28"></path>
          </svg>
        </button>
        <div>0</div>
        <button class="flex">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m2 16h28m-14-14v28"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="flex">
      <div class="guests-title">
        <h5 class="children">Children</h5>
        <p>Ages 2-12</p>
      </div>
      <div class="children flex">
        <button class="flex">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m2 16h28"></path>
          </svg>
        </button>
        <div>0</div>
        <button class="flex">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m2 16h28m-14-14v28"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="flex">
      <div class="guests-title">
        <h5 class="infants">Infants</h5>
        <p>Under 2</p>
      </div>
      <div class="infants flex">
        <button class="flex">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m2 16h28"></path>
          </svg>
        </button>
        <div>0</div>
        <button class="flex">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m2 16h28m-14-14v28"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="flex">
      <div class="guests-title">
        <h5 class="pets">Pets</h5>
        <a>Bringing a service animal?</a>
      </div>
      <div class="pets flex">
        <button class="flex">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m2 16h28"></path>
          </svg>
        </button>
        <div>0</div>
        <button class="flex">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m2 16h28m-14-14v28"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
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
          url: "src/assets/img/regions/I'm flexible.jpg",
        },
        {
          title: "Italy",
          url: "src/assets/img/regions/Italy.webp",
        },
        {
          title: "Middle East",
          url: "src/assets/img/regions/Middle East.webp",
        },
        {
          title: "France",
          url: "src/assets/img/regions/France.jpg",
        },
        {
          title: "South America",
          url: "src/assets/img/regions/South America.jpg",
        },
        {
          title: "United Kingdom",
          url: "src/assets/img/regions/United Kingdom.jpg",
        },
      ],
    };
  },
  computed: {},
  methods: {},
  emits: [],
};

import { ref } from "vue";

const size = (ref < "default") | "large" | ("small" > "default");

const value1 = ref("");
const value2 = ref("");

const shortcuts = [
  {
    text: "Last week",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: "Last month",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: "Last 3 months",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];
</script>

