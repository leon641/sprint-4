
<template>
  <section class="details-reviews">
    <div class="total-review">
      <span class="total-review-svg" v-html="getSvg('starFill')"></span>
      <span class="review-score"> {{rate}} </span>
      <span class="review-score-dot">•</span>
      <span class="num-of-reviews">{{stay.reviews?.length}} reviews</span>
    </div>

    <div class="details-rating">
      <p>Cleanliness</p>
      <span class="rating-bar">
        <progress max="5" value="4.7"></progress>4.7</span
      >
      <p>Communication</p>
      <span class="rating-bar">
        <progress max="5" value="4.5"></progress>4.5</span
      >
      <p>Check-in</p>
      <span class="rating-bar"><progress max="5" value="5"></progress>5</span>
      <p>Accuracy</p>
      <span class="rating-bar"><progress max="5" value="5"></progress>5</span>
      <p>Location</p>
      <span class="rating-bar"
        ><progress max="5" value="4.7"></progress>4.7</span
      >
      <p>Value</p>
      <span class="rating-bar"><progress max="5" value="5"></progress>5</span>
    </div>

    <main class="reviews-container">
      <div class="review-preview" v-for="review in stay.reviews" :key="review.id">
        <div class="user-details">
          <img
            loading="lazy"
            :src="review.by.imgUrl"
            alt=""
          />
          <p class="reviewer-name">{{review.by.fullname}}</p>
          <span class="visit-date">Apr 2023</span>
        </div>
        <p class="review-text"><LongTxt :desc="review.txt" /></p>
        <!-- <p class="review-text">{{review.txt}}</p> -->
      
      </div>
    </main>
  </section>
</template>
<script>
import LongTxt from "../cmps/LongTxt.vue";
import { svgService } from "../services/svg.service";
export default {
  props: {
    stay: Object,
    rate:String,
  },
  data() {
    return {};
  },
  methods: {
    getSvg(type) {
      return svgService.getSvg(type);
    },
  },
  computed: {},
  components: {
    LongTxt,
  },
};
</script>