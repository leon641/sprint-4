<!-- בס"ד -->

<template>
<section class="mobile-filter-container">


  <div class="mobile-filter" @click="expand">
   <div class="mobile-search-icon">
    <div  v-html="getSvg('search2')"></div>
    </div>
    
 
    <div class="anywhere-container">
      <div class="mobile-anywhere">Anywhere</div>
      <div class="mobile-search-container">
        <div class="mobile-anyweek">Any week</div>
        <div class="mobile-dot">•</div>
        <div class="mobile-any-guests">Add guests</div>
      </div>
    </div>
  </div>


</section>
</template>

<script>
import { svgService } from '../services/svg.service';
export default {
  props: {
    layout: String,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    getSvg(type){
      
     return  svgService.getSvg(type)
    },
    expand() {
      this.$emit("expand");
      this.$emit("toWhere");
    },
  },
  emits: ["expand", "toWhere"],
};
</script>
