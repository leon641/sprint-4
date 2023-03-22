<!-- בס"ד -->

<template>
  <button>
    <div>Anywhere</div>
  </button>
  <button>
    <div>Any week</div>
  </button>
  <button>
    <div>
      Add guests
      <div className="icon" v-html="getSvg('search')"></div>
    </div>
  </button>
</template>

<script>
import { svgService } from "../services/svg.service.js";

export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    getSvg(iconName) {
      return svgService.getStaySvg(iconName);
    },
  },
};
</script>
