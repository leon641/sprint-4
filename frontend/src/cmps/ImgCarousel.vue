
<template>
  <el-carousel :interval="5000" arrow="always" indicator-position="none">
    <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    props: {
        imgs: Array,
    },
}

</script>

<style scoped>

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>



