
<template>
  <el-carousel :interval="5000" arrow="always" indicator-position="none">
    <el-carousel-item v-for="item in imgs" :key="item">
      <!-- <span class="heart-svg" v-html="getSvg('hreatCaroousel')"></span> -->
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="position:absolute; top: 15px;
    right: 15px; fill: rgba(0, 0, 0, 0.5); height: 24px; width: 24px; stroke: rgb(255,255,255); stroke-width: 2; overflow: visible;"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>
        <img :src="item">
    </el-carousel-item>
  </el-carousel>
</template>

<script>

import { svgService } from "../services/svg.service.js"
export default {
    props: {
        imgs: Array,
    },
    methods : {
      getSvg(iconName) {
        return svgService.getSvg(iconName)
      },
    },
}

</script>





