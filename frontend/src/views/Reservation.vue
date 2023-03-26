
<template>
<section class="reservation-view-container">
  <header class="reservation-header">
    <div class="reservation-header-svg-container">
      <span
        class="reservation-header-svg"
        v-html="getSvg('showMoreArrowLeft')"
      ></span>
    </div>
    <h2>Request to book</h2>
  </header>
  <section class="reservation-container">
    <section class="reservation-container-info">
      <section class="trip-summary">
        <h2>Your Trip</h2>
        <div class="trip-summary-dates">
          <h3>Dates</h3>
          <span>Apr</span><span>1-6</span>
        </div>
        <div class="trip-summary-guests">
          <h3>Guests</h3>
          <span>1</span><span>guest</span>
        </div>
      </section>
      <div class="reservation-container-info-cancellation">
        <h2>Cancellation policy</h2>
        <p>
          Cancel before 12:00 PM on Apr 1 for a partial refund. After that, your
          refund depends on when you cancel.
        </p>
      </div>
      <div class="reservation-container-info-ground-rouls">
        <h2>Ground rules</h2>
        <p >We ask every guest to remember a few simple things about what makes a great guest.</p>
 
         <p><span class="dot">•</span> <span class="remainder">Follow the house rules</span></p>  
         <p><span class="dot">•</span> <span class="remainder">Treat your Host’s home like your own</span></p> 
      
      </div>
      <div class="reservation-container-info-wont-confirmed">
         <div class="wont-confirmed-svg" v-html="getSvg('hostRoles')"></div>
         <p>Your reservation won’t be confirmed until the Host accepts your request (within 24 hours). You won’t be charged until then.</p>
        
      </div>
     <div class="reservation-btn-container"><ReserveBtnReservation/></div> 
    </section>

    <section class="reservation-price-details-modal">
      <div class="reservation-privew">
       <div class="reservation-privew-img-container"><img class="reservation-privew-img"
          src="src/assets/img/demo.jpeg"
          alt=""/></div>

        <div class="reservation-privew-info">
          <span>Entire home</span>
          <p>Entire Villa, Cilento Paestum for 28 p!</p>
          <span class="user-stay-info-svg" v-html="getSvg('starFill')"></span>
          <span>4.83 (18)</span> <span class="user-stay-info-svg" v-html="getSvg('superHost1')"></span>
         <span class="dot">•</span>  <span>Superhost</span>
        </div>
      </div>
      <section class="reservation-privew-cover">
        Your booking is protected by <span class="red-air">air</span
        ><span>cover</span>
      </section>
      <section class="reservation-price-details">
        <h3>Price details</h3>
        <div class="prices">
          <p>$565 x 4 nights</p>
          <p>$2,380</p>
          <p>total guests</p>
          <p>1</p>
        </div>
      </section>
      <section class="reservation-price-total">
        <p>Total</p>
        <p>$3,022.60</p>
      </section>
    </section>
  </section>
  </section>
</template>
<script>
import ReserveBtnReservation from '../cmps/ReserveBtnReservation.vue';
import { svgService } from "../services/svg.service";

export default {
  data() {
    return {};
  },
  methods: {
    getSvg(type) {
      return svgService.getSvg(type);
    },
  },
  computed: {},
  components:{
    ReserveBtnReservation
  }
};
</script>