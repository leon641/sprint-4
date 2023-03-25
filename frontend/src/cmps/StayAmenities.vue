<!-- בס"ד -->

<template>
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
</template>
<script>
import { svgService } from '../services/svg.service';

export default {
  data() {
    return {};
  },methods:{
      getSvg(type) {
      return svgService.getSvg(type);
    },
  },
  computed: {},
};
</script>