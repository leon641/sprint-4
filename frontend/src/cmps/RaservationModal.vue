<!-- בס"ד -->

<template>
  <section class="reserve-moadl">
    <form @submit="reserve">
      <div class="order-form-header">
        <p><span class="cost">$150</span> night</p>
        <p>
          <span class="order-form-header-rateing">
            <span class="user-stay-info-svg" v-html="getSvg('starFill')"></span>
            4.38</span
          >
          <span class="reviews">(4 reviews)</span>
        </p>
      </div>
      <div class="order-data">
        <div class="date-picker">
          <div class="date-input">
            <label>CHECK IN</label>
            <input value="Tue Sep 07 2021" />
          </div>
          <div class="date-input">
            <label>CHECK OUT</label>
            <input value="Tue Sep 07 2021" />
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
      <ReserveBtn />
    </form>
    <p class="details-disclamer">You won't be charged yet</p>
    <div class="prices">
      <p class="fees-decs">$555 X 4 nights</p>
      <p class="amount">2,380</p>
      <p class="fees-decs">Cleaning fee</p>
      <p class="amount">$238</p>
      <p class="fees-decs">Sercives fee</p>
      <p class="amount">$400.6</p>
    </div>
    <div class="total">
      <p class="total-txt">Total</p>
      <p class="total-amount">$3,022.60</p>
    </div>
  </section>
</template>
<script>
import { svgService } from "../services/svg.service.js";
import ReserveBtn from "../cmps/ReserveBtn.vue";
export default {
  data() {
    return {};
  },
  methods: {
    getSvg(type) {
      return svgService.getSvg(type);
    },
  },
  components: {
    ReserveBtn,
  },
};
</script>