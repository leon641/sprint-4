<!-- בס"ד -->

<template>
  <h1>hollllaaaa</h1>
  <section class="stay-edit">
    <h3>Name</h3>
    <form @submit.prevent="submitStay">
    <input v-model="stay.name" class="add-input-name" type="text" placeholder="Name">
    <h3>Address</h3>
    <div class="address-inputs">
    <input v-model="stay.city" class="add-input" type="text" placeholder="City">
    <input v-model="stay.country" class="add-input" type="text" placeholder="Country">
    <input v-model="stay.street" class="add-input" type="text" placeholder="Street">
    </div>
    <div class="upload-img">
       <label @drop.prevent="handleFile" @dragover.prevent>
            <div class="drop-upload">
               <svg class="img-upload-svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"></path></svg>
               <p>Drop file here or ~ <span @click="upload"> click to upload</span></p> 

            </div>
               <img :src="img" alt="">
                <input type="file" @change="handleFile" hidden >
       </label>
    </div>
    <button class="save-form-btn">save</button>

    </form>
  </section>
</template>
<script>
import { stayService } from "../services/stay.service.local"

export default {
  data() {
    return {
       stay: {}
    }
  },

  created() {
    this.stay = stayService.getEmptyStay()
  },
  methods : {
    submitStay() {
              console.log('new stay', this.stay);
      this.$store.dispatch({type : 'addStay', stay : {...this.stay}})
    }
  },
  computed: {},
}
</script>