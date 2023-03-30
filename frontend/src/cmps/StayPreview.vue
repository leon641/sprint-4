<!--בס"ד-->

<template>
  <div v-if="stay" class="stay-preview">
    <section>
      <div class="card" @click="cardClicked(stay._id)">
        <ImgCarousel :imgs= "stay.imgUrls" />
              <span class="heartCarousel" @click.stop.prevent="setWishlist" :class="{ mark: isMark }" v-html="getSvg('hreatCaroousel')"></span>

        <div class="stay-desc-container">
          <div class="stay-desc">
            <p class="stay-name">{{ stay.name }}</p>
            <div class="stay-rate">
              <svg
                class="star-svg"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  height: 13px;
                  width: 13px;
                  fill: currentcolor;
                "
              >
                <path
                  d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span>&nbsp;{{averageRate}}&nbsp;</span>
            </div>
            <p class="stay-summery">
              {{ stay?.loc?.address }}
            </p>
            <p class="stay-capacity">{{stay.capacity}}&nbsp;beds</p>
            <p class="stay-price">
              <span>${{ stay.price }}</span>
              night
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ImgCarousel from "./ImgCarousel.vue";
import { svgService } from "../services/svg.service.js";


export default {
  props: {
    stay: [Object,String],
  },
  data() {
    return {
      loggedinUser : {},
      averageRate : 0,
      imgs: [
        "../assets/img/demo.jpeg",
        "../assets/img/demo.jpeg",
        "../assets/img/demo.jpeg",
        "../assets/img/demo.jpeg",
        "../assets/img/demo.jpeg",
        "../assets/img/demo.jpeg",
      ],
      isMark: false,
    }
  },

  created() {
    // this.loggedinUser = this.$store.getters.loggedinUser
    // console.log(this.loggedinUser);
    this.rate()


  },
  methods: {
    cardClicked(stayId) {
      this.$router.push(`/details/${stayId}`);
    },
     getSvg(iconName) {
      return svgService.getSvg(iconName)
    },
      setWishlist() {
            this.isMark = !this.isMark
             this.$store.dispatch({
                type: "setWishlist",
                stay: this.stay,
            })
            // this.$router.push("/wishlist")
           
        },
      rate() {
      const sum = this.stay.reviews?.reduce((a, b) => a + b.rate,0); 
      const averageRate = sum / this.stay.reviews?.length;
      this.averageRate=averageRate.toFixed(2)      

    },
   
  },
  computed: {
    formattedPrice() {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      });
      let num = Number(formatter.format(this.stay.price));
      console.log(num);
      return formatter.format(this.stay.price);
    },
   
  },

  components: {
    ImgCarousel,
  },
};
</script>

