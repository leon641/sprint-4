<!-- בס"ד -->

<template>
  <div class="big-pill">
    <div class="where-container" :class="propWhere">
      <div class="where">
        <p>Where</p>
        <input type="text" placeholder="Search destinations" />
      </div>
    </div>
    <div class="separator where-in"></div>
    <div class="check">
      <div class="in" :class="propCheck">
        <div>Check in</div>
        <div>Add dates</div>
      </div>
      <div class="separator in-out"></div>
      <div class="out">
        <div>Check out</div>
        <div>Add dates</div>
      </div>
    </div>
    <div class="separator out-search"></div>
    <div class="search-container" :class="propWho">
      <div class="search-content">
        <div class="who">
          <div>Who</div>
          <div>Add guests</div>
        </div>
        <span class="search">
          <button class="search-btn">
            <div>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <g fill="none">
                  <path
                    d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                  ></path>
                </g>
              </svg>
              <div class="search-txt">Search</div>
            </div>
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propWhere: String,
    propCheck: String,
    propWho: String,
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
