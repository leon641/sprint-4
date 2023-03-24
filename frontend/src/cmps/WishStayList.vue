<template>
<ul>
    <li v-for="place in wishList" :key="place._id">
        <WishStayPreview :place="place"/>
    </li>
</ul>
</template>
<script>

import WishStayPreview from "./WishStayPreview.vue"

export default {
    props : {
        wishList : Array
    },
  data() {
    return {
      
    };
  },
  computed: {},

  components : {
    WishStayPreview
  }
};
</script>