<!-- בס"ד -->

<template>
<section class="user-stay-info">
            <div class="user-stay-info-svg" v-html="getSvg('superhost')"></div>
            <div>
              <p class="user-stay-info-title">This host is super host</p>
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