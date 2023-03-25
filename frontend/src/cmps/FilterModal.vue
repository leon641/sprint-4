<!-- בס"ד -->

<template>
  <div v-if="propWhere" class="where-modal">
    <div class="flex">
      <div class="resent-searches">
        <h5>Recent searches</h5>
      </div>
      <div class="regions">
        <h5>Search by region</h5>
        <div class="grid">
          <div v-for="region in regions" :key="region">
            <img :src="region.url" />
            <p>{{ region.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="propCheck" class="check-modal"></div>
  <div v-if="propWho" class="who-modal">
    <div class="flex">
      <div>
        <h5>Adults</h5>
        <p>Ages 13 or above</p>
      </div>
      <div class="flex">
        <button>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 12px;
              width: 12px;
              stroke: currentcolor;
              stroke-width: 5.33333;
              overflow: visible;
            "
          >
            <path d="m2 16h28"></path>
          </svg>
        </button>
        <div>0</div>
        <button>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 12px;
              width: 12px;
              stroke: currentcolor;
              stroke-width: 5.33333;
              overflow: visible;
            "
          >
            <path d="m2 16h28m-14-14v28"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="flex">
      <div>
        <h5>Children</h5>
        <p>Ages 2-12</p>
      </div>
      <div class="flex">
        <button>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 12px;
              width: 12px;
              stroke: currentcolor;
              stroke-width: 5.33333;
              overflow: visible;
            "
          >
            <path d="m2 16h28"></path>
          </svg>
        </button>
        <div>0</div>
        <button>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 12px;
              width: 12px;
              stroke: currentcolor;
              stroke-width: 5.33333;
              overflow: visible;
            "
          >
            <path d="m2 16h28m-14-14v28"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="flex">
      <div>
        <h5>Infants</h5>
        <p>Under 2</p>
      </div>
      <div class="flex">
        <button>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 12px;
              width: 12px;
              stroke: currentcolor;
              stroke-width: 5.33333;
              overflow: visible;
            "
          >
            <path d="m2 16h28"></path>
          </svg>
        </button>
        <div>0</div>
        <button>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 12px;
              width: 12px;
              stroke: currentcolor;
              stroke-width: 5.33333;
              overflow: visible;
            "
          >
            <path d="m2 16h28m-14-14v28"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="flex">
      <div>
        <h5>Pets</h5>
        <a>Bringing a service animal?</a>
      </div>
      <div class="flex">
        <button>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 12px;
              width: 12px;
              stroke: currentcolor;
              stroke-width: 5.33333;
              overflow: visible;
            "
          >
            <path d="m2 16h28"></path>
          </svg>
        </button>
        <div>0</div>
        <button>
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              fill: none;
              height: 12px;
              width: 12px;
              stroke: currentcolor;
              stroke-width: 5.33333;
              overflow: visible;
            "
          >
            <path d="m2 16h28m-14-14v28"></path>
          </svg>
        </button>
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
    return {
      regions: [
        {
          title: "I'm flexible",
          url: "@/assets/img/regions/I'm flexible.jpg",
        },
        {
          title: "Italy",
          url: "@/assets/img/regions/Italy.webp",
        },
        {
          title: "Middle East",
          url: "@/assets/img/regions/Middle East.webp",
        },
        {
          title: "France",
          url: "@/assets/img/regions/France.jpg",
        },
        {
          title: "South America",
          url: "@/assets/img/regions/South America.jpg",
        },
        {
          title: "United Kingdom",
          url: "@/assets/img/regions/United Kingdom.jpg",
        },
      ],
    };
  },
  computed: {},
  methods: {},
  emits: [],
};
</script>

