<template>

</template>
<script>
export default {
    props : {
        place : Object
    },
    created() {
            console.log('in wishStayPreview cmp', this.place.imgUrls[0]);
    },
  data() {
    return {
     
    };
  },
  computed: {},
};
</script>