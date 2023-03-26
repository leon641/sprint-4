<!-- בס"ד -->

<template>
  <section class="stay-details">
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
              <a class="d-link reviews">{{ stay.reviews?.length }} reviews</a>
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
            <h2>Entire villa hosted by {{ stay.host?.fullname }}</h2>
            <div class="place-cpacity-services">
              <div class="place-services-info">
                <span>{{ stay.capacity }} guests</span>
                <span class="dot">•</span>
                <span class="num-of-beds">2 bedrooms</span>
              </div>
            </div>
            <img
              class="host-pic"
              style="object-fit: cover; vertical-align: bottom"
              aria-hidden="true"
              alt="Demet is a superhost. Learn more about Demet."
              decoding="async"
              elementtiming="LCP-target"
              :src="stay.host?.imgUrl"
              data-original-uri="https://a0.muscache.com/im/pictures/user/74d822d1-8a2d-47b1-99cf-52ea0f248b67.jpg?im_w=240"
            />
          </div>
          <UserStayInfo />

          <section class="air-cover">
         <img class="l1li2ovm dir dir-ltr" src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="AirCover">
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
        <RaservationModal :stay="stay" />
      </section>
      <StayReviews :stay="stay" />
    </section>
  </section>
</template>

<script>
import { svgService } from "../services/svg.service.js";
import RaservationModal from "../cmps/RaservationModal.vue";
import UserStayInfo from "../cmps/UserStayInfo.vue";
import StayAmenities from "../cmps/StayAmenities.vue";
import StayReviews from "../cmps/StayReviews.vue";


export default {
  data() {
    return {
      stay: {},
      avregeRate: 0,
      desc:""
    };
  },
  created() {
    (async () => {
      const { stayId } = this.$route.params;
      const stay = await this.$store.dispatch({
        type: "getStayById",
        stayId: stayId,
      });
      this.stay = stay;
      this.rate();
      this.desc=this.stay.summary
    })();
  },
  methods: {
    getSvg(type) {
      return svgService.getSvg(type);
    },
    rate() {
      const sum = this.stay.reviews.reduce((a, b) => a.rate + b.rate);
      const avregeRate = sum / this.stay.reviews.length;
      this.avregeRate = avregeRate;
    },
  },
  computed: {},
  components: {
    RaservationModal,
    UserStayInfo,
    StayAmenities,
    StayReviews,
   
  },
};
</script>