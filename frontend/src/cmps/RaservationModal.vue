<!-- בס"ד -->

<template>
  <section  class="reserve-modal">
    <form @submit="reserve">
      <div class="order-form-header">
        <div>
          <span class="cost">{{ formattedPrice }}</span
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
                <input
                  :value="
                    dateFormater(this.attributes[0].dates.start) || 'Add detes'
                  "
                />
              </div>
              <div class="date-input">
                <label>CHECKOUT</label>
                <input
                  :value="
                    dateFormater(this.attributes[0].dates.end) || 'Add detes'
                  "
                />
              </div>
            </div>
            <VDatePicker
              class="date-picker vc-blue"
              expanded
              :min-date="new Date()"
              borderless
              :color="selectedColor"
              :attributes="attributes"
              @click="renderDate()"
              :columns="columns"
              :locale="locale"
              v-model="selectedDate"
            />
            <button
              @click="setDate"
              class="close-btn-date-picker-modal"
              @click.stop="isShown = false"
            >
              Close
            </button>
          </section>
          <div class="date-input" @click="isShown = true">
            <label>CHECK-IN</label>
            <input
              :value="
                dateFormater(this.attributes[0].dates.start) || 'Add dates'
              "
            />
          </div>
          <div class="date-input">
            <label>CHECKOUT</label>
            <input
              :value="dateFormater(this.attributes[0].dates.end) || 'Add dates'"
            />
          </div>
        </div>

        <div class="guest-input">
          <label>GUESTS</label>
          <input :value="guests" />
          <svg
            @click="isShown2 = !isShown2"
            class="angle-down-svg"
            viewBox="0 0 320 512"
            width="100"
            title="angle-down"
          >
            <path
              d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
            />
          </svg>
          <section v-if="isShown2" class="guests-info-model">
            <div class="category-container category1">
              <div class="category-title">Adults</div>
              <div class="category-subtitle">Age 13+</div>
            </div>

            <div class="btns-container item1">
              <!-- <div></div> -->
              <button
                @click="updateGuests(-1, 'adults')"
                class="btn-guests-modal subtract"
              >
                <span class="subtract-svg" v-html="getSvg('subtract')"></span>
              </button>

              <span class="counter">{{ this.order.guests.adults }}</span>

              <button
                @click="updateGuests(1, 'adults')"
                class="btn-guests-modal add-more"
              >
                <span
                  class="user-stay-info-svg"
                  v-html="getSvg('addMore')"
                ></span>
              </button>
            </div>

            <div class="category-container category2">
              <div class="category-title">Childern</div>
              <div class="category-subtitle">Ages 2-12</div>
            </div>

            <div class="btns-container item2">
              <button
                @click="updateGuests(-1, 'kids')"
                class="btn-guests-modal subtract"
              >
                <span class="subtract-svg" v-html="getSvg('subtract')"></span>
              </button>

              <span class="counter">{{ this.order.guests.kids }}</span>

              <button
                @click="updateGuests(1, 'kids')"
                class="btn-guests-modal add-more"
              >
                <span
                  class="user-stay-info-svg"
                  v-html="getSvg('addMore')"
                ></span>
              </button>
            </div>
            <div class="category-container category3">
              <div class="category-title">Infants</div>
              <div class="category-subtitle">Under 2</div>
            </div>

            <div class="btns-container item3">
              <button
                @click="updateGuests(-1, 'infants')"
                class="btn-guests-modal subtract"
              >
                <span class="subtract-svg" v-html="getSvg('subtract')"></span>
              </button>

              <span class="counter">{{ this.order.guests.infants }}</span>

              <button
                @click="updateGuests(1, 'infants')"
                class="btn-guests-modal add-more"
              >
                <span
                  class="user-stay-info-svg"
                  v-html="getSvg('addMore')"
                ></span>
              </button>
            </div>
            <div class="category-container category4">
              <div class="category-title">Pets</div>
              <div class="category-subtitle">Bringing a service animal?</div>
            </div>

            <div class="btns-container item4">
              <button
                @click="updateGuests(-1, 'pets')"
                class="btn-guests-modal subtract"
              >
                <span class="subtract-svg" v-html="getSvg('subtract')"></span>
              </button>

              <span class="counter">{{ this.order.guests.pets }}</span>

              <button
                @click="updateGuests(1, 'pets')"
                class="btn-guests-modal add-more"
              >
                <span
                  class="user-stay-info-svg"
                  v-html="getSvg('addMore')"
                ></span>
              </button>
            </div>
            <!-- <small>This place has a maximum of 3 guests, not including infants. If you're bringing more than 2 pets, please let your host know.</small> -->
            <button @click="closeGuestesModal" class="btn-close-guests-modal">
              Close
            </button>
          </section>
        </div>
      </div>
      <ReserveBtn @click="reservation" />
    </form>
    <p class="details-disclamer">You won't be charged yet</p>
    <div class="prices">
      <p class="fees-decs">${{ stay.price }} X {{ nigths }} nights</p>
      <p class="amount">{{ StayTotalPrice }}</p>
      <p class="fees-decs">Cleaning fee</p>
      <p class="amount">${{ cleaningFee }}</p>
      <p class="fees-decs">Sercives fee</p>
      <p class="amount">${{ sercivesFee }}</p>
    </div>
    <div class="total">
      <p class="total-txt">Total</p>
      <p class="total-amount">{{ totalPrice }}</p>
    </div>
  </section>
</template>
<script>
import { useScreens } from "vue-screen-utils";
import ReserveBtn from "../cmps/ReserveBtn.vue";
import { svgService } from "../services/svg.service.js";

export default {
  props: {
    avregeRate: String,
    stay: Object,
  },
   created() {  
    
    let loggedinUser = this.$store.getters.loggedinUser;
    let hostId = this.stay.host?._id;
    console.log("loggedinUser.imgUrl", loggedinUser?.imgUrl);

    this.order.buyer._id = loggedinUser._id;
    this.order.buyer.fullname = loggedinUser.fullname;
    this.order.buyer.img = loggedinUser.imgUrl;
    this.order.stay._id = this.stay._id;
    this.order.hostId = hostId;
    this.order.stay.name = this.stay.name;
    this.order.stay.img = this.stay.imgUrls[0];
    this.order.stay.price = this.stay.price;
  },
  data() {
    return {
      sercivesFee: 101,
      cleaningFee: 221,
      loggedinUser: {},
      isShown2: false,
      selectedColor: "gray",
      selectedDate :new Date(),
      locale: { id: "en", firstDayOfWeek: 1, masks: { weekdays: "WW" } },
      columns: useScreens({
        xs: "0px",
        sm: "500px",
        md: "768px",
        lg: "1024px",
      }).mapCurrent({ lg: 2, sm: 1 }, 1),
      selectedDate: null,
      isShown: false,
      // This is a single attribute
      attributes: [
        {
          key: "test",
          highlight: true,
          dates: { start: new Date(), end:new Date(new Date().setDate(new Date().getDate() + 2))},
        },
      ],

      order: {
        hostId: "",
        buyer: {
          _id: null,
          fullname: null,
          img: "",
        },
        totalGuests: 0,
        totalPrice: "",
        startDate: "",
        endDate: "",
        nigths: 0,

        guests: {
          adults: 0,
          kids: 0,
          infants: 0,
          pets: 0,
        },
        stay: {
          _id: this.stay?._id,
          name: this.stay?.name,
          price: this.stay?.price,
          img: "",
        },
        msgs: [],
        status: "pending", // pending, approved
      },
    };
  },
  methods: {
    async reservation() {
      const id = await this.$store.dispatch({
        type: "setOrder",
        order: this.order,
      });
      console.log("id-order-after backend", id);
      this.$store.dispatch({ type: "setCurrOrder", order: this.order });
      this.$router.push({
        path: "/reservation/",
        query: { order: id },
      });
    },
  
    updateGuests(diff, type) {
      this.order.guests[type] += diff;
      if (this.order.guests[type] === -1) this.order.guests[type] = 0;

      console.log("order", this.order);
    },
    getSvg(type) {
      return svgService.getSvg(type);
    },
    closeGuestesModal() {
      this.isShown2 = false;
    },
    setTotalPrice() {
      const nigths =
        this.attributes[0].dates.end - this.attributes[0].dates.start;
      this.order.totalPrice =
        +this.stay.price * Math.ceil(nigths / 1000 / 60 / 60 / 24);
      this.order.nigths = Math.ceil(nigths / 1000 / 60 / 60 / 24);
      console.log("this.order.nigths", this.order.nigths);
    },

    renderDate() {
      console.log('??????',this.selectedDate < this.attributes[0].dates.start);
      
      if (this.selectedDate < this.attributes[0].dates.end) {
        this.attributes[0].dates.start = this.selectedDate;
      } else {
        this.attributes[0].dates.end = this.selectedDate;
      }
    },
    dateFormater(date) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formatedDate = `${day}/${month}/${year}`;
      return formatedDate;
    },

    setDate() {
      this.setTotalPrice();
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
    },
  },
  computed: {
    totalPrice() {
      const nigths =
        this.attributes[0].dates.end - this.attributes[0].dates.start;
      const Total = (this.order.totalPrice =
        +this.stay.price * Math.ceil(nigths / 1000 / 60 / 60 / 24));
      const finalPrice = Total + this.cleaningFee + this.sercivesFee;
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      });
      return formatter.format(finalPrice);
    },
    guests() {
      let count = 0;
      let guests = this.order.guests;
      for (let guest in guests) {
        count += +guests[guest];
      }
      this.order.totalGuests = count;
      console.log(" this.totalGuests", this.order.totalGuests);

      if (count === 0) count = "Add guests";
      return count;
    },
    StayTotalPrice() {
      const nigths =
        this.attributes[0].dates.end - this.attributes[0].dates.start;
      const Total = (this.order.totalPrice =
        +this.stay.price * Math.ceil(nigths / 1000 / 60 / 60 / 24));
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      });
      return formatter.format(Total);
    },
    nigths() {
      const nigths =
        this.attributes[0].dates.end - this.attributes[0].dates.start;
      return Math.ceil(nigths / 1000 / 60 / 60 / 24);
    },
    formattedPrice() {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      });
      return formatter.format(this.stay.price);
    },
  },
  components: {
    ReserveBtn,
  },
};
</script>