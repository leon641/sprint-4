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
            <div class="region-img" @click="setRegion(region.title)">
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
  <div v-if="propCheck || propCheckOut" class="check-modal vc-blue ">
    <VDatePicker
      class="date-picker vc-blue  "
      expanded
      :min-date="new Date()"
      borderless
      :color='selectedColor '
      :attributes="attributes"
      @click="renderDate"
      :columns="columns"
      :locale="locale"
      v-model="selectedDate"

    />
    <!-- <el-radio-group v-model="size" label="size control" size="small">
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
    </div>-->
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
import { useScreens } from "vue-screen-utils";

export default {
  props: {
    propWhere: String,
    propCheck: String,
    propCheckOut: String,
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
        // {
        //   title: "France",
        //   url: "src/assets/img/regions/France.jpg",
        // },
        {
          title: "South America",
          url: "src/assets/img/regions/South America.jpg",
        },
        {
          title: "United Kingdom",
          url: "src/assets/img/regions/United Kingdom.jpg",
        },
        {
          title: "United States",
          url: "src/assets/img/regions/United States.webp",
        },
      ],
      selectedColor: "gray",
      locale: { id: "en", firstDayOfWeek: 1, masks: { weekdays: "WW" } },
      columns: useScreens({
        xs: "0px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
      }).mapCurrent({ lg: 2 }, 1),
      selectedDate: null,
      isShown: false,
      attributes:[
  {
    key: '',
    highlight: true,
    fillmode:'outline',
    
    dates: { start: new Date(2023, 2, 31), end: new Date(2023, 3, 4) },
  }
],
    };
  },
  computed: {},
  methods: {
    setDate() {
      const startYear = this.attributes[0].dates.start.getFullYear();
      const startMonth = this.attributes[0].dates.start.getMonth() + 1;
      const startDay = this.attributes[0].dates.start.getDate();

      const endYear = this.attributes[0].dates.end.getFullYear();
      const endMonth = this.attributes[0].dates.end.getMonth() + 1;
      const endDay = this.attributes[0].dates.end.getDate();

      const startDate = `${startDay}/${startMonth}/${startYear}`;
      const endDate = `${endDay}/${endMonth}/${endYear}`;

      this.order.startDate = startDate;
      this.order.endDate = endDate;
      console.log(" this.order", this.order);
    },
    renderDate() {
      if (this.selectedDate < this.attributes[0].dates.start) {
        this.attributes[0].dates.start = this.selectedDate;
      } else {
        this.attributes[0].dates.end = this.selectedDate;
      }
    },
    setRegion(title) {
      // console.log('title',title)
      this.$emit("setRegion", title);
      this.$emit("switchToCheck");
    },
  },
  emits: ["setRegion", "switchToCheck"],
};

// import { ref } from "vue";

// const size = (ref < "default") | "large" | ("small" > "default");

// const value1 = ref("");
// const value2 = ref("");

// const shortcuts = [
//   {
//     text: "Last week",
//     value: () => {
//       const end = new Date();
//       const start = new Date();
//       start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
//       return [start, end];
//     },
//   },
//   {
//     text: "Last month",
//     value: () => {
//       const end = new Date();
//       const start = new Date();
//       start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
//       return [start, end];
//     },
//   },
//   {
//     text: "Last 3 months",
//     value: () => {
//       const end = new Date();
//       const start = new Date();
//       start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
//       return [start, end];
//     },
//   },
// ];
</script>

