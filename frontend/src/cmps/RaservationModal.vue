<!-- בס"ד -->

<template>
  <section class="reserve-modal">
    <form @submit="reserve">

      <div class="order-form-header">
    <div> <span class="cost">$281</span><span class="per-night"> night</span></div>  
        <div class="order-form-header-rateing-container">
            <span class="user-stay-info-svg" v-html="getSvg('starFillDetails')"></span>
          <span class="order-form-header-rateing">5.0 <span class="dot-header-rateing">•</span></span>
          <span class="reviews"> 5 reviews</span>
        </div>
      </div>

      <div class="order-data">
        <div class="date-picker">
          <div class="date-input">
            <label>CHECK-IN</label>
            <input value="4/1/2023" />
          </div>
          <div class="date-input">
            <label>CHECKOUT</label>
            <input value="6/1/2023" />
          </div>
        </div>

        <div class="guest-input">
          <label>GUESTS</label>
          <input value="2" />
          <svg
            class="angle-down-svg"
            viewBox="0 0 320 512"
            width="100"
            title="angle-down"
          >
            <path
              d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
            />
          </svg>
        </div>
      </div>
      <ReserveBtn @click="reservation" />
    </form>
    <p class="details-disclamer">You won't be charged yet</p>
    <div class="prices">
      <p class="fees-decs">$281 X 5 nights</p>
      <p class="amount">$2,380</p>
      <p class="fees-decs">Cleaning fee</p>
      <p class="amount">$238</p>
      <p class="fees-decs">Sercives fee</p>
      <p class="amount">$400.6</p>
    </div>
    <div class="total">
      <p class="total-txt">Total</p>
      <p class="total-amount">$3,022</p>
    </div>
  </section>
</template>
<script>

import ReserveBtn from "../cmps/ReserveBtn.vue";
import { svgService } from "../services/svg.service.js";
import { stayService } from '../services/stay.service.local.js';
import { utilService } from "../services/util.service.js"
export default {
  props:{
    stay:Object
  },
 created(){

  this.order=stayService.getEmptyOrder()
  console.log('stay in revertion modal',this.stay);
      this.rate();
 },
  data() {
    return {
      avregeRate: 0,
      order:{
    "_id": utilService.makeId(),
    "hostId": this.stay?.host?.fullname,
    "buyer": {
      "_id": "u101",
      "fullname": "Loggedin user"
    },
    "totalPrice": 160,
    "startDate": "2025/10/15",
    "endDate": "2025/10/17",
    "guests": {
      "adults": 2,
      "kids": 1
    },
    "stay": {
      "_id": "h102",
      "name": this.stay?.name,
      "price": this.stay?.price
    },
    "msgs": [],
    "status": "pending" // pending, approved
  }
    };
  },
  methods: {
    reservation(){
      this.$router.push('/reservation')
    },
    getSvg(type) {
      return svgService.getSvg(type);
    },
    rate() {
      const sum = this.stay.reviews?.reduce((a, b) => a.rate + b.rate);
      const avregeRate = sum / this.stay.reviews?.length;
      this.avregeRate = avregeRate;
 
    },
  },
  components: {
    ReserveBtn,

  },
};
</script>