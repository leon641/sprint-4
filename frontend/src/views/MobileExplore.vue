<template>
  <section class="mobile-search-view">

    <section @click="onTuggleFilterView" class="mobile-search-view-btn-close">
        <button class="back-btn">
                <div v-html="getSvg('X')"></div>
        </button>
    </section>

        <main class="modals-container">
         <section v-if="routeWhere === null" @click="tuggleCmp('destination')" class="filter-type-container where-to">
                <div  class="container-title">
                    <span>Where</span>
                    <span class="container-title-txt">Choose Location</span>
                </div>
            </section>

                <section v-else-if="routeWhere==='destination'" class="destination-modal">
                       <div class="txt-input-container">
                        <span class="title">Where to?</span>
                   <input v-model="userChoise.txt" type="search" placeholder="Search destinations">
                       </div>

                       <section class="regions-container">
                                <div class="regions">

                                        <div v-for="region in regions" :key="region.title">
                                            <img :src="region.url" @click="setRegion(region.title)">
                                        
                                        <span class="region-name">{{region.title}}</span>
                                        </div>
                              
                                </div>
                       </section>
                </section>

                <section v-if="routeDates=== null" class="filter-type-container dates">
                        <div  class="container-title">
                    <span>When</span>
                    <span class="container-title-txt">Choose Dates</span>
                </div>
                </section>

                <section class="filter-type-container dates">
                        <div  class="container-title">
                    <span>Guests</span>
                    <span class="container-title-txt">Add Guests</span>
                </div>
                </section>

        </main>
  </section>

</template>

<script>
import { svgService } from '../services/svg.service'
//TODO where to cmp
//TODO dates cmp
//TODO guests cmp
//TODO footer cmp

export default {

    data(){
        return {
            routeWhere:'destination',
            routeDates:null,
            userChoise:{
                txt:"",
                region:"",
                dates:"",
                guests:{
                    adults:0,
                    kids:0,
                    pets:0,
                    infants:0,
                }

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
      ]
        }
    },
    methods:{
        getSvg(type){
            return svgService.getSvg(type)
        },
        onTuggleFilterView(){
            this.$emit('tuggleFilterView')
        },
        tuggleCmp(type){
            this.route=type
    },setRegion(name){
        this.userChoise.region=name
        this.userChoise.txt=name

    }
}}
</script>

