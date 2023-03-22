<!-- בס"ד -->

<template>
  <section>
    <button>
      <div>Anywhere</div>
    </button>
    <button>
      <div>Any week</div>
    </button>
    <button>
      <div>Add guests
      <div className="icon" v-html="getSvg('search')"></div>
      </div>
    </button>
  </section>
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
      return svgService.getSvg(iconName);
    },
  },
};
</script>
