
<template>
  <el-carousel :interval="5000" arrow="always" indicator-position="none">
    <el-carousel-item v-for="item in imgs" :key="item">
      <span class="heart-svg" v-html="getSvg('hreatCaroousel')"></span>
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





