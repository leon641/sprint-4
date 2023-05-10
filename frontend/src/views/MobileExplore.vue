<template>
  <section class="mobile-search-view">
    <section @click="onTuggleFilterView" class="mobile-search-view-btn-close">
      <button class="back-btn">
        <div v-html="getSvg('X')"></div>
      </button>
    </section>

    <main class="modals-container">
      <section
        v-if="routeWhere === null"
        @click="tuggleCmp('destination')"
        class="filter-type-container where-to"
      >
        <div class="container-title">
          <span>Where</span>
          <span class="container-title-txt">{{
            userChoise.txt ? userChoise.txt : "Choose Location"
          }}</span>
        </div>
      </section>

      <section
        v-else-if="routeWhere === 'destination'"
        class="destination-modal">
        <div class="txt-input-container">
          <span class="title">Where to?</span>
          <input
            v-model="userChoise.txt"
            type="search"
            placeholder="Search destinations"
          />
        </div>

        <section class="regions-container">
          <div class="regions">
            <div v-for="region in regions" :key="region.title">
              <img :src="region.url" @click="setRegion(region.title)" />

              <span class="region-name">{{ region.title }}</span>
            </div>
          </div>
        </section>
      </section>

      <section
        v-if="routeDates === null"
        @click="tuggleCmp('dates')"
        class="filter-type-container dates">
        <div class="container-title">
          <span>When</span>
          <span class="container-title-txt">Choose Dates</span>
        </div>
      </section>
      <section v-else-if="routeDates === 'dates'" class="filter-type-container ">
        <span class="whrere-to-txt">When's your trip?</span>
        <section class="day-names"><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span></section>
      
      <div class="date-picker-wapper">
       <MyDatePicker v-for="month in months" 
       :key="month.id" 
       :month="month" 
        />
      </div>

      </section>
      <section v-if="routeGuests === null"
        @click="tuggleCmp('guests')" class="filter-type-container dates">
        <div class="container-title">
          <span>Guests</span>
          <span class="container-title-txt">Add Guests</span>
        </div>
      </section>
      <section ></section>
    </main>
  </section>
</template>

<script>
import MyDatePicker from '../cmps/MyDatePicker.vue';
import { svgService } from "../services/svg.service";

//TODO where to cmp
//TODO dates cmp
//TODO guests cmp
//TODO footer cmp

export default {
  data() {
    return {
      routeWhere: "destination",
      routeDates: null,
      routeGuests:null,
      userChoise: {
        txt: "",
        region: "",
        dates: "",
        guests: {
          adults: 0,
          kids: 0,
          pets: 0,
          infants: 0,
        },
        
      },
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
      months:[{id:0,m:'January' ,days:29}, {id:1,m:'February',days:28}, {id:2,m:'March',days:31}, {id:3,m:'April',days:30},{id:4,m: 'May',days:31}, {id:5,m:'June',days:30}, {id:6,m:'July',days:31}, {id:7,m:'August',days:31}, {id:8,m:'September',days:30}, {id:9,m:'October',days:31}, {id:10,m:'November',days:30},  {id:11,m:'December',days:31}]
    };
  },
  methods: {
    getSvg(type) {
      return svgService.getSvg(type);
    },
    onTuggleFilterView() {
      this.$emit("tuggleFilterView");
    },
    tuggleCmp(type) {
        console.log('type',type);
        
      if (type === "destination"){
        this.routeWhere = type
        this.routeDates = null
         this.routeGuests= null
      } 
      if (type === "dates"){
        this.routeWhere = null;
        this.routeDates = type
         this.routeGuests= null
      }
      if(type === 'guests'){
        this.routeGuests= type
        this.routeWhere = null
         this.routeDates = null
      } 
    },
    setRegion(name) {
      this.userChoise.region = name;
      this.userChoise.txt = name;
    },
  },
  components:{
    MyDatePicker,
  }
};
</script>

