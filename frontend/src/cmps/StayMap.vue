<template>
  <section class="stay-map">
    <h3>Where you'll be</h3>
    <div class="map-stay-info">
    <span class="stay-country">{{stay.loc.country}},</span>
    <span class="stay-city">{{stay.loc.city}}</span>
    </div>
    <GoogleMap
      api-key="AIzaSyDIEKT0NOd__sBTWlouu15_p9C8d4jlkA4"
      style="width: 100%; height: 500px"
      :center="this.center"
      :zoom="12"
    >
      <Marker :options="{ position: center, label: 'L', title: this.stay.name }" />
    
    </GoogleMap>
  </section>
</template>
<script>
import { GoogleMap, Marker } from "vue3-google-map";
export default {
    props:{
        stay:Object
    },
 created(){
console.log('lat', +this.stay['loc'].lat );
console.log('lat', +this.stay['loc'].lan );

 },   
  data() {
    return {
      center: { lat: +this.stay['loc'].lat , lng: +this.stay['loc'].lan },
      pos1: { lat: 31.689247, lng: 35.044502 },
      markerOptions: {
        position: this.center,
        label: "L",
        title: "LADY LIBERTY",
    },
    };
  },
  computed: {},

  components: { GoogleMap, Marker },
};
</script>