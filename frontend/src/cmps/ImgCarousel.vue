<!-- בס"ד -->

<template>
  <el-carousel :autoplay=false arrow="always" >
    <el-carousel-item v-for="item in imgs" :key="item">
      <img :src="item">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { svgService } from "../services/svg.service.js";
export default {
  props: {
    imgs: Array,
  },
  methods: {
    getSvg(iconName) {
      return svgService.getSvg(iconName);
    },
  },
};
</script>





