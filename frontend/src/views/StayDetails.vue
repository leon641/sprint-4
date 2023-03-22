<!-- בס"ד -->

<template>
  <section class="stay-details">
    <section class="stay-details-container">
      <div class="details-subtitle">
        <h2>name of place</h2>
        <section class="details-links">
          <div>
            <span>Star Svg</span> <a>9reviews</a>.<span>name of region</span>
          </div>
          <div><span>share</span><span>save</span></div>
        </section>
      </div>

      <section class="details-gallery">
        <img class="item item1" src="src/assets/img/demo.jpeg" />
        <img class="item item2" src="src/assets/img/demo.jpeg" />
        <img class="item item3" src="src/assets/img/demo.jpeg" />
        <img class="item item4" src="src/assets/img/demo.jpeg" />
        <img class="item item5" src="src/assets/img/demo.jpeg" />
      </section>

      <section class="place-info">
        <section class="place-content">
          <div class="subtitle">
            <div>
              <span>entire place</span>
              <h2>hosted by 'name of the host'</h2>
            </div>
            <div class="place-cpacity">
              <span>8 guests</span>
              <span>.</span>
              <span>2 bedrooms</span>
            </div>
            <img class="host-img" src="" />
          </div>

          <section class="user-stay-info">
            <div class="user-stay-info-svg" v-html="getSvg('superhost')"></div>
            <div>
              <p>this host is super host</p>
              <p class="subtext">
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </p>
            </div>
            <div class="user-stay-info-svg" v-html="getSvg('locationAirbnb')"></div>
            <div>
              <p>Great location</p>
              <p class="subtext">
                100% of recent guests gave the location a 5-star rating.
              </p>
            </div>
            <div
              class="user-stay-info-svg"
              v-html="getSvg('checkin')"
            ></div>
            <div>
            <p>Great check-in experience</p>
            <p class="subtext">
              95% of recent guests gave the check-in process a 5-star rating.
            </p>
            </div>
          </section>
          <section class="air-cover">
                <h3><span>air</span>cover</h3>
                <p> Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in. </p>
          </section>
          <section class="summery">
                Villa Aura is located in the Kabak district of Fethiye Faralya neighborhood. It is a villa with private swimming pool overlooking the sea from Kabak Bay and its balcony. The villa is surrounded by semi-protected things. Right in front of the villa is the Lycian way to Kabak Bay and Kabak waterfall. If you wish, it is 10 minutes to Kabak beach with your vehicle. Right next to the villa is a 50m restaurant and 60m grocery store. My guidebook includes nearby places to visit
          </section>
          <section class="amenities-container">
            <h2>What this place offers</h2>
            <div class="stay-amenities">
                
            </div>
          </section>
        </section>

        <section class="reserve-moadl">
          <form @submit="reserve">
            <header>
              <div class="review-totals">
                <h4>
                  <span>$555</span>
                  night
                </h4>
                <a href="#">9reviews</a>
              </div>
            </header>
            <div class="date-picker">date picker</div>
            <ReserveBtn />
          </form>
        </section>
      </section>
    </section>
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