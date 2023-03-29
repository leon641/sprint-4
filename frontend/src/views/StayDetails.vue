<!-- בס"ד -->

<template>
  <section v-if="stay" class="stay-details">
    <section class="stay-details-container">
      <div class="details-subtitle">
        <h2>{{ stay.name }}</h2>
        <section class="details-links-container">
          <div>
            <div class="details-links">
              <span
                class="details-links-svg"
                v-html="getSvg('starFill')"
              ></span>
              <span class="review-rate"> {{ avregeRate }} </span>
              <span class="dot">•</span>
              <a class="d-link reviews">{{ stay.reviews?.length }}  reviews</a>
              <span class="dot">•</span>
              <span class="d-link">{{ stay.loc?.country }}</span>
            </div>
          </div>

          <div class="actions-container">
            <div class="action-link-container">
              <span class="share-svg" v-html="getSvg('share2')"></span>
              <span class="d-link-share"> Share</span>
            </div>

            <div class="action-link-container">
              <span
                class="share-save-info-svg"
                v-html="getSvg('detailsHreat')"
              ></span>
              <span class="d-link-save">Save</span>
            </div>
          </div>
        </section>
      </div>

      <section v-if="stay.imgUrls" class="details-gallery">
        <img
          v-for="(url, index) in stay.imgUrls"
          :src="url"
          :class="`item item` + (index + 1)"
          :key="index"
        />
      </section>

      <section class="place-info">
        <section class="place-content">
          <div class="subtitle">
            <h2>{{stay.roomType}} hosted by {{ stay.host?.fullname }}</h2>
            <div class="place-cpacity-services">
              <div class="place-services-info">
                <span>{{ stay.capacity }} guests</span>
                <span class="dot">•</span>
                <span class="num-of-beds">{{stay.bedrooms}} bedrooms</span>
              <span class="dot">•</span>
                <span class="num-of-beds">{{stay.bathrooms}} bathrooms</span>
              </div>
            </div>
            <img
              class="host-pic"
              style="object-fit: cover; vertical-align: bottom"
              aria-hidden="true"
              alt=" Demet."
              decoding="async"
              elementtiming="LCP-target"
              src="https://robohash.org/10711825?set=set5 "
              
            />
          </div>
          <UserStayInfo />

          <section class="air-cover">
            <img
              class="l1li2ovm dir dir-ltr"
              src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
              alt="AirCover"
            />
            <p>
              Every booking includes free protection from Host cancellations,
              listing inaccuracies, and other issues like trouble checking in.
            </p>
          </section>
          <section class="stay-decription">
            {{ stay.summary }}
          </section>
          <StayAmenities />
        </section>
        <RaservationModal :stay="stay" :avregeRate="avregeRate" />
      </section>
      <StayReviews 
      :rate="avregeRate"
      :stay="stay" />
    </section>
    <StayMap :stay="stay"/>
  </section>
</template>

<script>
import { svgService } from "../services/svg.service.js";
import RaservationModal from "../cmps/RaservationModal.vue";
import UserStayInfo from "../cmps/UserStayInfo.vue";
import StayAmenities from "../cmps/StayAmenities.vue";
import StayReviews from "../cmps/StayReviews.vue";
import StayMap from '../cmps/StayMap.vue';


export default {
  data() {
    return {
      avregeRate: 0,
      desc: "",
      loggedinUser:null,
    };
  },
  created() {
    window.scrollTo(0, 0);
    this.$emit("inDetails");
    this.loggedinUser= this.$store.getters.loggedinUser
    
    const { stayId } = this.$route.params;
     this.$store.dispatch({type: "getStayById",stayId})
     .then(res=>{
      this.rate()
      
     })
    this.desc = this.stay.summary;
  },
  methods: {
    getSvg(type) {
      return svgService.getSvg(type);
    },
    rate() {      
      const sum = this.stay.reviews?.reduce((a, b) => a + b.rate,0); 
      const avregeRate = sum / this.stay.reviews?.length;
      this.avregeRate=avregeRate.toFixed(2)      

    },
  },
  computed: {
    stay(){
           return this.$store.getters.currStay
    },
  },
  components: {
    RaservationModal,
    UserStayInfo,
    StayAmenities,
    StayReviews,
    StayMap,
  },
  emits: ["inDetails"],
};
</script>