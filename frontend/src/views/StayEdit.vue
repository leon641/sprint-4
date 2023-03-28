<!-- בס"ד -->

<template>
  <h1>hollllaaaa</h1>
  <section class="stay-edit">
    <h3>Name</h3>
    <form @submit.prevent="submitStay">
    <input class="add-input-name" type="text" placeholder="Name">
    <h3>Address</h3>
    <div class="address-inputs">
    <input class="add-input" type="text" placeholder="City">
    <input class="add-input" type="text" placeholder="Country">
    <input class="add-input" type="text" placeholder="Street">
    </div>
    <button class="save-form-btn">save</button>

    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {},
};
</script>