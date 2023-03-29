<!-- בס"ד -->

<template>
  <h1>hollllaaaa</h1>
  <section class="stay-edit">
    <h3>Name</h3>
    <form @submit.prevent="submitStay">
    <input v-model="stay.stayName" class="add-input-name" type="text" placeholder="Name">
    <h3>Address</h3>
    <div class="address-inputs">
    <input v-model="stay.city" class="add-input" type="text" placeholder="City">
    <input v-model="stay.country" class="add-input" type="text" placeholder="Country">
    <input v-model="stay.street" class="add-input" type="text" placeholder="Street">
    </div>
    <button class="save-form-btn">save</button>

    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
       stay: {
                stayName: "",
                city: "",
                country: "",
                street: "",
            },
    }
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