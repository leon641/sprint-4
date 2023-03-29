
<template>
  <section class="details-reviews">
    <div class="total-review">
      <span class="total-review-svg" v-html="getSvg('starFill')"></span>
      <span class="review-score"> {{rate}} </span>
      <span class="review-score-dot">•</span>
      <span class="num-of-reviews">{{stay.reviews.length}} reviews</span>
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
      <!-- <div class="review-preview">
        <div class="user-details">
          <img
            loading="lazy"
            src="https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small"
            alt=""
          />
          <p class="reviewer-name">yuval</p>
          <span class="visit-date">jun 2016</span>
        </div>
        <p class="review-text">
          <LongTxt :desc="stay?.summary" />
        </p>

      
      </div>

      <div class="review-preview">
        <div class="user-details">
          <img
            loading="lazy"
            src="https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small"
            alt=""
          />
          <p class="reviewer-name">Tracy</p>
          <span class="visit-date">october 2022</span>
        </div>
        <p class="review-text"><LongTxt :desc="stay?.summary" /></p>
       
      </div>
      <div class="review-preview">
        <div class="user-details">
          <img
            loading="lazy"
            src="https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small"
            alt=""
          />
          <p class="reviewer-name">Adelina</p>
          <span class="visit-date">October 2022</span>
        </div>
        <p class="review-text"><LongTxt :desc="stay?.summary" /></p>
      
      </div>
      <div class="review-preview">
        <div class="user-details">
          <img
            loading="lazy"
            src="https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small"
            alt=""
          />
          <p class="reviewer-name">Nati</p>
          <span class="visit-date">Mar 2018</span>
        </div>
        <p class="review-text"><LongTxt :desc="stay?.summary" /></p>
      
      </div>
      <div class="review-preview">
        <div class="user-details">
          <img
            loading="lazy"
            src="https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small"
            alt=""
          />
          <p class="reviewer-name">Ana</p>
          <span class="visit-date">Oct 2020</span>
        </div>
        <p class="review-text"><LongTxt :desc="stay?.summary" /></p>
      
      </div>
      <div class="review-preview">
        <div class="user-details">
          <img
            loading="lazy"
            src="https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small"
            alt=""
          />
          <p class="reviewer-name">Yoni</p>
          <span class="visit-date">Sep 2021</span>
        </div>
        <p class="review-text"><LongTxt :desc="stay?.summary" /></p>
      
      </div> -->
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
    rate:Number,
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