<!-- בס"ד -->

<template>
  <div v-if="propWhere" class="where-modal">
    <div class="flex">
      <div class="resent-searches">
        <h5>Recent searches</h5>
        <div class="history">
          <div class="search-item" @click="search('israel')">
            <div class="svg-container">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  height: 22px;
                  width: 22px;
                  fill: currentcolor;
                "
              >
                <path
                  d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z"
                ></path>
              </svg>
            </div>
            <div class="search-info">
              <div class="search-title">Israel • Stays</div>
              <div class="search-when">Any week</div>
            </div>
          </div>
          <div class="search-item" @click="search('turkey')">
            <div class="svg-container">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  height: 22px;
                  width: 22px;
                  fill: currentcolor;
                "
              >
                <path
                  d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z"
                ></path>
              </svg>
            </div>
            <div class="search-info">
              <div class="search-title">Turkey • Stays</div>
              <div class="search-when">Any week</div>
            </div>
          </div>
          <div class="search-item" @click="search('greece')">
            <div class="svg-container">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  height: 22px;
                  width: 22px;
                  fill: currentcolor;
                "
              >
                <path
                  d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z"
                ></path>
              </svg>
            </div>
            <div class="search-info">
              <div class="search-title">Greece • Stays</div>
              <div class="search-when">Any week</div>
            </div>
          </div>
          <div class="search-item" @click="search('middle east')">
            <div class="svg-container">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  height: 22px;
                  width: 22px;
                  fill: currentcolor;
                "
              >
                <path
                  d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z"
                ></path>
              </svg>
            </div>
            <div class="search-info">
              <div class="search-title">Middle East • Stays</div>
              <div class="search-when">Any week</div>
            </div>
          </div>
        </div>
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
  <div v-if="propCheck || propCheckOut" class="check-modal vc-blue">
    <VDatePicker
      class="date-picker vc-blue"
      expanded
      borderless
      :color="selectedColor"
      :attributes="attributes"
      @click="renderDate()"
      :columns="columns"
      :locale="locale"
      v-model="selectedDate"
    />
  </div>
  <div v-if="propWho" class="who-modal">
    <div class="flex">
      <div class="guests-title">
        <h5 class="adults">Adults</h5>
        <p>Ages 13 or above</p>
      </div>
      <div class="adults flex">
        <button
          :class="btnClasses.minus.adults"
          @click="addGuest('adults', -1)"
        >
          <svg class="subtractPlus"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m2 16h28"></path>
          </svg>
        </button>
        <div>{{ this.guests.adults }}</div>
        <button :class="btnClasses.plus.adults" @click="addGuest('adults', 1)">
          <svg class="subtractPlus"
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
        <button
          :class="btnClasses.minus.children"
          @click="addGuest('children', -1)"
        >
          <svg class="subtractPlus"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m2 16h28"></path>
          </svg>
        </button>
        <div>{{ this.guests.children }}</div>
        <button
          :class="btnClasses.plus.children"
          @click="addGuest('children', 1)"
        >
          <svg class="subtractPlus"
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
        <button
          :class="btnClasses.minus.infants"
          @click="addGuest('infants', -1)"
        >
          <svg class="subtractPlus"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m2 16h28"></path>
          </svg>
        </button>
        <div>{{ this.guests.infants }}</div>
        <button
          :class="btnClasses.plus.infants"
          @click="addGuest('infants', 1)"
        >
          <svg class="subtractPlus"
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
        <button :class="btnClasses.minus.pets" @click="addGuest('pets', -1)">
          <svg class="subtractPlus"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path d="m2 16h28"></path>
          </svg>
        </button>
        <div>{{ this.guests.pets }}</div>
        <button :class="btnClasses.plus.pets" @click="addGuest('pets', 1)">
          <svg class="subtractPlus"
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
      day: 1000 * 60 * 60 * 24,
      to:Date.now() +this.day,
      checkIn: "",
      checkOut: "",
      regions: [
        {
          title: "I'm flexible",
          url: "https://res.cloudinary.com/dii16awkb/image/upload/v1680534540/I_m_flexible_wcda2q.jpg",
        },
        {
          title: "Italy",
          url: "https://res.cloudinary.com/dii16awkb/image/upload/v1680534540/Italy_f6fta9.webp",
        },
        {
          title: "Middle East",
          url: "https://res.cloudinary.com/dii16awkb/image/upload/v1680534540/Middle_East_soowo9.webp",
        },
        // {
        //   title: "France",
        //   url: "src/assets/img/regions/France.jpg",
        // },
        {
          title: "South America",
          url: "https://res.cloudinary.com/dii16awkb/image/upload/v1680534540/South_America_qa5bfw.jpg",
        },
        {
          title: "United Kingdom",
          url: "https://res.cloudinary.com/dii16awkb/image/upload/v1680534540/United_Kingdom_aspb3p.jpg",
        },
        {
          title: "United States",
          url: "https://res.cloudinary.com/dii16awkb/image/upload/v1680534540/United_States_of6qvy.webp",
        },
      ],
   selectedColor: "gray",
      locale: { id: "en", firstDayOfWeek: 1, masks: { weekdays: "WW" } },
      columns: useScreens({
        xs: "0px",
        sm: "500px",
        md: "768px",
        lg: "1024px",
      }).mapCurrent({ lg: 2 ,sm:2} ,1),
      selectedDate: new Date(),
      isShown: false,
      // This is a single attribute
      attributes: [
     {
    key: 'test',
    highlight: true,
          dates: { start: new Date(), end:new Date(new Date().setDate(new Date().getDate() + 2))},
  },

      ],
      guests: {
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
      },
      btnClasses: {
        minus: {
          adults: "flex minus inactive",
          children: "flex minus inactive",
          infants: "flex minus inactive",
          pets: "flex minus inactive",
        },
        plus: {
          adults: "flex plus active",
          children: "flex plus active",
          infants: "flex plus active",
          pets: "flex plus active",
        },
      },
    };
  },
  created() {
    console.log('date' , new Date(Date.now()+this.day)) 
    // console.log("this.propWhere", this.propWhere);
    // console.log("this.propCheck", this.propCheck);
    // console.log("this.propCheckOut", this.propCheckOut);
    // console.log("this.propWho", this.propWho);
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
      if (this.selectedDate < this.attributes[0].dates.end) {
        this.attributes[0].dates.start = this.selectedDate;
      } else {
        this.attributes[0].dates.end = this.selectedDate;
      }
    },
    setRegion(title) {
      this.$emit("setRegion", title);
      this.$emit("switchToCheck");
    },
    search(string) {
      console.log("string", string);
      this.$router.push({
        path: "/explore",
        query: { txt: string },
      });
      this.$emit("closeFilter");
    },
    addGuest(title, num) {
      if (this.guests[title] === "16+" && num > 0) {
        this.guests[title] = "16+";
        return;
      }
      if (this.guests[title] === "16+" && num < 0) {
        this.guests[title] = 16 + num;
        return;
      }

      if (
        (title === "adults" || title === "children") &&
        this.guests.adults + this.guests.children === 16 &&
        num > 0
      ) {
        return;
      }

      this.guests[title] += num;

      if (this.guests[title] < 0) this.guests[title] = 0;
      if (this.guests.adults > 15) this.guests.adults = "16+";
      if (this.guests.children > 14) this.guests.children = 15;
      if (this.guests.infants > 4) this.guests.infants = 5;
      if (this.guests.pets > 4) this.guests.pets = 5;

      this.setClasses(title);
    },
    setClasses(title) {
      if (this.guests[title] > 0 || this.guests[title] === "16+") {
        this.btnClasses.minus[title] = "flex minus active";
      } else this.btnClasses.minus[title] = "flex minus inactive";

      if (title === "infants" || title === "pets") {
        if (this.guests[title] > 4)
          this.btnClasses.plus[title] = "flex plus inactive";
      }

      if (title === "children") {
        if (this.guests[title] > 14)
          this.btnClasses.plus[title] = "flex plus inactive";
      }

      if (title === "adults") {
        // debugger
        if (this.guests[title] === "16+")
          this.btnClasses.plus[title] = "flex plus inactive"; 
        else this.btnClasses.plus[title] = "flex plus active";
      }
    },
  },

  emits: ["setRegion", "switchToCheck", "setDates", "closeFilter"],
};

// import { ref } from "vue";

// const size = (ref < "default") | "large" | ("small" > "default");

// const value1 = ref("");
// const value2 = ref("");

// const shortcuts = [
//   {
//     text: "Last week",
//     value: () => {
//       const end = this.selectedDate;
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

