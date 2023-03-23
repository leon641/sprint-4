<!-- בס"ד -->

<template>
  <section class="stay-details">
    <section class="stay-details-container">
      <div class="details-subtitle">
        <h2>Kabak Aura Villa</h2>
        <section class="details-links">
          <div>
            <div class="details-links-reviews">
              <span
                class="details-links-svg"
                v-html="getSvg('starFill')"
              ></span>
              <span class="d-link"> 4.73 </span> <span class="dot">•</span>
              <a class="d-link reviews">9 reviews</a>
            </div>
            <span class="dot">•</span>

            <span class="d-link">Maui, United States</span>
          </div>

          <div class="share-save-container">
            <span class="d-link-share">
              <span
                class="share-save-info-svg"
                v-html="getSvg('share2')"
              ></span>
              Share</span
            >
            <span class="d-link-save"
              ><span
                class="share-save-info-svg"
                v-html="getSvg('detailsHreat')"
              ></span
              >Save</span
            >
          </div>
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
              <h2>Entire villa hosted by Demet</h2>
            </div>
            <div class="place-cpacity">
              <span>8 guests</span>
              <span>•</span>
              <span>2 bedrooms</span>
            </div>
            <img class="host-img" src="" />
          </div>

          <section class="user-stay-info">
            <div class="user-stay-info-svg" v-html="getSvg('superhost')"></div>
            <div>
              <p class="user-stay-info-title">this host is super host</p>
              <p class="subtext">
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </p>
            </div>
            <div
              class="user-stay-info-svg"
              v-html="getSvg('locationAirbnb')"
            ></div>
            <div>
              <p class="user-stay-info-title">Great location</p>
              <p class="subtext">
                100% of recent guests gave the location a 5-star rating.
              </p>
            </div>
            <div class="user-stay-info-svg" v-html="getSvg('checkin')"></div>
            <div>
              <p class="user-stay-info-title">Great check-in experience</p>
              <p class="subtext">
                95% of recent guests gave the check-in process a 5-star rating.
              </p>
            </div>
          </section>
          <section class="air-cover">
            <h3><span>air</span>cover</h3>
            <p>
              Every booking includes free protection from Host cancellations,
              listing inaccuracies, and other issues like trouble checking in.
            </p>
          </section>
          <section class="summery">
            Villa Aura is located in the Kabak district of Fethiye Faralya
            neighborhood. It is a villa with private swimming pool overlooking
            the sea from Kabak Bay and its balcony. The villa is surrounded by
            semi-protected things. Right in front of the villa is the Lycian way
            to Kabak Bay and Kabak waterfall. If you wish, it is 10 minutes to
            Kabak beach with your vehicle. Right next to the villa is a 50m
            restaurant and 60m grocery store. My guidebook includes nearby
            places to visit
          </section>
          <section class="amenities-container">
            <h2>What this place offers</h2>

            <div class="stay-amenities">
              <div class="amenity">
                <div
                  class="user-stay-info-svg"
                  v-html="getSvg('gardenView')"
                ></div>
                <p>Garden view</p>
              </div>
              <div class="amenity">
                <div
                  class="user-stay-info-svg"
                  v-html="getSvg('essentials')"
                ></div>
                <p>Essentials</p>
              </div>
              <div class="amenity">
                <div class="user-stay-info-svg" v-html="getSvg('smoke')"></div>
                <p>Smoke detector</p>
              </div>

              <div class="amenity">
                <div class="user-stay-info-svg" v-html="getSvg('air')"></div>
                <p>Air conditioning</p>
              </div>

              <div class="amenity">
                <div
                  class="user-stay-info-svg"
                  v-html="getSvg('freeParking')"
                ></div>
                <p>Free parking on premises</p>
              </div>
              <div class="amenity">
                <div class="user-stay-info-svg" v-html="getSvg('tv')"></div>
                <p>TV</p>
              </div>

              <div class="amenity">
                <div class="user-stay-info-svg" v-html="getSvg('carbon')"></div>
                <p>Carbon monoxide detector</p>
              </div>
            </div>
          </section>
        </section>
        <RaservationModal />
      </section>
    </section>
  </section>
</template>

<script>
import { svgService } from "../services/svg.service.js";
import RaservationModal from "../cmps/RaservationModal.vue";

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
    RaservationModal,
  },
};
</script>