<!-- בס"ד -->

<template>
  <section class="stay-details">
    <section class="stay-details-container">

      <div class="details-subtitle">
        <h2>name of place</h2>
        <section class="details-links">
          <div>
            <span>Star Svg</span> <a>9reviews</a>.<span>name of region</span>
          </div>
          <div><span>share</span><span>save</span></div>
        </section>
      </div>

      <section class="details-gallery">
        <img class="item item1" src="src/assets/img/fire.png" />
        <img class="item item2" src="src/assets/img/fire.png" />
        <img class="item item3" src="src/assets/img/fire.png" />
        <img class="item item4" src="src/assets/img/fire.png" />
        <img class="item item5" src="src/assets/img/fire.png" />
      </section>
        <section class="reserve-moadl">
            <form @submit="reserve">
                <header>
                    <div class="review-totals">
                        <h4>
                            <span>$555</span>
                            night
                        </h4>
                        <a href="#">9reviews</a>
                    </div>
                </header>
                
            </form>

        </section>

    </section>
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