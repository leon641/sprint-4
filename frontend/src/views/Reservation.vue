
<template>
<section class="reservation-view-container">
  <header class="reservation-header">
    <div class="reservation-header-svg-container">
      <span
        class="reservation-header-svg"
        @click="backwords"
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
          <span>{{this.currOrder.totalGuests}} guests</span>
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
 
         <p class="rules"><span class="dot">•</span> <span class="remainder">Follow the house rules</span></p>  
         <p class="rules"><span class="dot">•</span> <span class="remainder">Treat your Host’s home like your own</span></p> 
      
      </div>
      <div class="reservation-container-info-wont-confirmed">
         <div class="wont-confirmed-svg" v-html="getSvg('hostRoles')"></div>
         <p>Your reservation won’t be confirmed until the Host accepts your request (within 24 hours). <span>You won’t be charged until then.</span></p>
        
      </div>

      <ReserveBtnReservation/>
     
    </section>

    <section class="reservation-price-details-modal">
      <div class="reservation-privew">
       <div class="reservation-privew-img-container"><img class="reservation-privew-img"
          src="src/assets/img/demo.jpeg"
          alt=""/></div>

        <div class="reservation-privew-info">
          <div><span class="stay-type">Entire home</span>
          <p>Entire Villa, Cilento Paestum for 28 p!</p></div>
          <div class="reservation-privew-info-reviews-container"> 
            <span class="user-stay-info-svg" v-html="getSvg('starFillSmall')"></span>
          <span class="rate-score">4.83</span> <span class="num-of-reviews">(5 reviews)</span> 
         <span class="dot">•</span>  
          <span class="superHost-svg" v-html="getSvg('superHost1')"></span>
          <span class="super-host">Superhost</span>
         </div>
        
        </div>
      </div>
      <section class="reservation-privew-cover">
        <span >Your booking is protected by </span><img class="air-cover-img" src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="AirCover">

  
      </section>
      <section class="reservation-price-details">
        <h3>Price details</h3>
        <div class="prices">
          <p>${{this.currOrder.stay.price}} x  {{this.currOrder.nigths}} nights</p>
          <p class="flex-end">${{this.currOrder.totalPrice}}</p>
          <p>total guests</p>
          <p class="flex-end">{{this.currOrder.totalGuests}}</p>
        </div>
      </section>
      <section class="reservation-price-total">
        <p>Total (USD)</p>
        <p>${{this.currOrder.totalPrice}}</p>
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
    return {
      currOrder:{}
    }
  },
  created(){
window.scrollTo(0, 0);
this.currOrder=this.$store.getters.currOrder
console.log('this.currOrder',this.currOrder);

  },
  methods: {
    getSvg(type) {
      return svgService.getSvg(type);
    },backwords(){
      this.$router.push(`/details/${this.currOrder.stay._id}`)
    },
  },
  computed: {},
  components:{
    ReserveBtnReservation
  }
};
</script>