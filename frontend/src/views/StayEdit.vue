<!-- בס"ד -->

<template>
  <section class="stay-edit">
    <h3>Name</h3>
    <form class="form-edit" @submit.prevent="submitStay">
      <input
        v-model="stay.name"
        class="add-input-name"
        type="text"
        placeholder="Name"
      />
      <h3>Address</h3>
      <div class="address-inputs">
        <input
          v-model="stay.city"
          class="add-input"
          type="text"
          placeholder="City"
        />
        <input
          v-model="stay.country"
          class="add-input"
          type="text"
          placeholder="Country"
        />
        <input
          v-model="stay.address"
          class="add-input"
          type="text"
          placeholder="Street"
        />
      </div>
   
      <div class="upload-img">
        <section class="img-1 img-area">
            <img v-if="stay.imgUrls[0]" :src="stay.imgUrls[0]" alt="" />
          <label @drop.prevent="handleFile" @dragover.prevent>
            <div v-if="!stay.imgUrls[0]" class="drop-upload">
              <svg
                class="img-upload-svg"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
                ></path>
              </svg>
              <span @click="upload"> click to upload</span>
            </div>
            <input type="file" @change="handleFile" hidden />
          </label>
        </section>
        <section class="img-2 img-area">
                      <img v-if="stay.imgUrls[1]" :src="stay.imgUrls[1]" alt="" />

          <label @drop.prevent="handleFile" @dragover.prevent>
            <div v-if="!stay.imgUrls[1]" class="drop-upload">
              <svg
                class="img-upload-svg"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
                ></path>
              </svg>
              <span @click="upload"> click to upload</span>
            </div>
            <!-- <img :src="img" alt="" /> -->
            <input type="file" @change="handleFile" hidden />
          </label>
        </section>
        <section class="img-3 img-area">
                                <img v-if="stay.imgUrls[2]" :src="stay.imgUrls[2]" alt="" />

          <label @drop.prevent="handleFile" @dragover.prevent>
            <div v-if="!stay.imgUrls[2]" class="drop-upload">
              <svg
                class="img-upload-svg"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
                ></path>
              </svg>
              <span @click="upload"> click to upload</span>
            </div>
            <!-- <img :src="img" alt="" /> -->
            <input type="file" @change="handleFile" hidden />
          </label>
        </section>
        <section class="img-4 img-area">
                                <img  v-if="stay.imgUrls[3]" :src="stay.imgUrls[3]" alt="" />

          <label @drop.prevent="handleFile" @dragover.prevent>
            <div v-if="!stay.imgUrls[3]" class="drop-upload">
              <svg
                class="img-upload-svg"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
                ></path>
              </svg>
              <span @click="upload"> click to upload</span>
            </div>
            <!-- <img :src="img" alt="" /> -->
            <input type="file" @change="handleFile" hidden />
          </label>
        </section>
        <section class="img-5 img-area">
                                <img v-if="stay.imgUrls[4]" :src="stay.imgUrls[4]" alt="" />

          <label @drop.prevent="handleFile" @dragover.prevent>
            <div v-if="!stay.imgUrls[4]" class="drop-upload">
              <svg 
                class="img-upload-svg"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
                ></path>
              </svg>
              <span @click="upload"> click to upload</span>
            </div>
            <!-- <img :src="img" alt="" /> -->
            <input type="file" @change="handleFile" hidden />
          </label>
        </section>
      </div>
          <div class="stay-edit-details">
        <label>Capacity</label>
        <input
          v-model="stay.capacity"
          class="add-input"
          type="number"
          min="0"
          max="20"
        />
        <label>Bedrooms</label>
        <input
          v-model="stay.bedrooms"
          class="add-input"
          type="number"
          min="0"
          max="20"
        />
        <label>bathrooms</label>
        <input
          v-model="stay.bathrooms"
          class="add-input"
          type="number"
          min="0"
          max="20"
        />
      </div>
      <div class="stay-edit-details-desc">
        <label>Labels</label>
        <input
          v-model="stay.labels"
          class="add-input"
          type="text"
          placeholder="Label"
        />
        <label>Type</label>
        <input
          v-model="stay.type"
          class="add-input"
          type="text"
          placeholder="Property type"
        />
        <label>Price</label>
        <input
          v-model="stay.Price"
          class="add-input"
          type="number"
          min="0"
          max="1000000"
          placeholder="$100"
        />
      </div>
      <button class="save-form-btn">save</button>
    </form>
  </section>
</template>
<script>
import { stayService } from '../services/stay.service.local'
import { uploadService } from '../services/upload.service'

export default {
  data() {
    return {
      stay: {},
      isShown : false
    }
  },

  async created() {
    await this.$store.dispatch({ type: "loadStays" });
    this.stay = stayService.getEmptyStay()
  },
  methods: {
    submitStay() {
      this.$store.dispatch({ type: 'addStay', stay: { ...this.stay } })
    },
    async handleFile(ev) {
      const file =
        ev.type === 'change' ? ev.target.files[0] : ev.dataTransfer.files[0]

      const { url } = await uploadService.uploadImg(ev)
      this.stay.imgUrls.push(url)
      this.isShown = false
    },
  },
  computed: {},
}
</script>
