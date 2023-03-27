<!-- בס"ד -->

<template>
  <section class="reserve-modal">
    <form @submit="reserve">
      <div class="order-form-header">
        <div>
          <span class="cost">${{ stay.price }}</span
          ><span class="per-night"> night</span>
        </div>
        <div class="order-form-header-rateing-container">
          <span
            class="user-stay-info-svg"
            v-html="getSvg('starFillDetails')"
          ></span>
          <span class="order-form-header-rateing"
            >{{ avregeRate }} <span class="dot-header-rateing">•</span></span
          >
          <span class="reviews"> {{ stay.reviews?.length }} reviews</span>
        </div>
      </div>

      <div class="order-data">
        <div class="date-picker">
          <section v-if="isShown" class="date-picker-modal">
            <div class="date-picker-modal-date-display">
              <div class="date-input" @click="isShown = true">
                <label>CHECK-IN</label>
                <input :value="order.startDate || '6/1/2023'" />
              </div>
              <div class="date-input">
                <label>CHECKOUT</label>
                <input :value="order.startDate || '6/1/2023'" />
              </div>
            </div>
            <VDatePicker
              class="date-picker"
              :attributes="attributes"
              @click="renderDate()"
              :columns="columns"
              v-model="selectedDate"
            />
            <button
              @click="setDate()"
              class="close-btn-date-picker-modal"
              @click.stop="isShown = false"
            >
              Close
            </button>
          </section>
          <div class="date-input" @click="isShown = true">
            <label>CHECK-IN</label>
            <input :value="order.startDate || '6/1/2023'" />
          </div>
          <div class="date-input">
            <label>CHECKOUT</label>
            <input :value="order.endDate || '6/1/2023'" />
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
import { useScreens } from "vue-screen-utils";
import ReserveBtn from "../cmps/ReserveBtn.vue";
import { svgService } from "../services/svg.service.js";
import { stayService } from "../services/stay.service.local.js";
import { utilService } from "../services/util.service.js";
export default {
  props: {
    avregeRate: Number,
    stay: Object,
  },
  created() {
    console.log("stay in revertion modal", this.stay);
    // this.rate();

    console.log("order", this.avregeRate);
  },
  data() {
    return {
      columns: useScreens({
        xs: "0px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
      }).mapCurrent({ lg: 2 }, 1),
      selectedDate: null,
      isShown: false,
      attributes: [
        // This is a single attribute
        {
          key: "",
          // Attribute type definitions
          content: "true", // Boolean, String, Object
          highlight: {
            start: {
              fillMode: "outline",
            },
            base: { fillMode: "light" },
            end: { fillMode: "outline" },
          },
          popover: {},

          customData: {},

          dates: { start: new Date(), end: new Date(2023, 2, 30) },

          order: 0,
        },
      ],

      order: {
        _id: utilService.makeId(),
        hostId: this.stay?.host?.fullname,
        buyer: {
          _id: "u101",
          fullname: "Loggedin user",
        },
        totalPrice: 160,
        startDate: "",
        endDate: "",
        guests: {
          adults: 2,
          kids: 1,
        },
        stay: {
          _id: "h102",
          name: this.stay?.name,
          price: this.stay?.price,
        },
        msgs: [],
        status: "pending", // pending, approved
      },
    };
  },
  methods: {
    reservation() {
      this.$router.push("/reservation");
    },
    getSvg(type) {
      return svgService.getSvg(type);
    },
    // rate() {
    //   const sum = this.stay.reviews?.reduce((a, b) => a.rate + b.rate);
    //   const avregeRate = sum / this.stay.reviews?.length;
    //   this.avregeRate = avregeRate;
    // },
    renderDate() {
      if (this.selectedDate < this.attributes[0].dates.start) {
        this.attributes[0].dates.start = this.selectedDate;
      } else {
        this.attributes[0].dates.end = this.selectedDate;
      }
    },
    setDate() {
      const startYear = this.attributes[0].dates.start.getFullYear();
      const startMonth = this.attributes[0].dates.start.getMonth() + 1;
      const startDay = this.attributes[0].dates.start.getDate();

      const endYear = this.attributes[0].dates.end.getFullYear();
      const endMonth = this.attributes[0].dates.end.getMonth() + 1;
      const endDay = this.attributes[0].dates.end.getDate();

      const startDate = `${startDay}/${startMonth}/${startYear}`;
      const endDate = `${endDay}/${endMonth}/${endYear}`;

      this.order.startDate = startDate;
      this.order.endDate = endDate;
      console.log(" this.order", this.order);
    },
  },
  components: {
    ReserveBtn,
  },
};
</script>