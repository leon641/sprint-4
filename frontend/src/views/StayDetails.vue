<!-- בס"ד -->

<template>
  <section class="stay-details">
    <section class="stay-details-container">
      <div class="details-subtitle">
        <h2>{{stay.name}}</h2>
        <section class="details-links">
          <div>
            <div class="details-links">
              <span
                class="details-links-svg"
                v-html="getSvg('starFill')"
              ></span>
              <span class="review-rate"> 4.73 </span> <span class="dot">•</span>
              <a class="d-link reviews">9 reviews</a>
              <span class="dot">•</span>
              <span class="d-link">Maui, United States</span>
            </div>
          </div>

          <div class="actions-container">
            <div class="action-link-container">
              <span class="share-svg" v-html="getSvg('share2')"></span>
              <span class="d-link-share"> Share</span>
            </div>

            <div class="action-link-container">
              <span
                class="share-save-info-svg"
                v-html="getSvg('detailsHreat')"
              ></span>
              <span class="d-link-save">Save</span>
            </div>
          </div>
        </section>
      </div>

      <section class="details-gallery">
        <img class="item item1" src="src/assets/img/demo.jpeg" />
        <img class="item item2" src="src/assets/img/demo.jpeg" />
        <img class="item item3" src="src/assets/img/demo.jpeg" />
        <img class="item item4" src="src/assets/img/demo.jpeg" />
        <img class="item item5" src="src/assets/img/demo.jpeg" />
      </section>

      <section class="place-info">
        <section class="place-content">
          <div class="subtitle">
            <h2>Entire villa hosted by Demet</h2>
            <div class="place-cpacity-services">
              <div class="place-services-info">
                <span>8 guests</span>
                <span class="dot">•</span>
                <span class="num-of-beds">2 bedrooms</span>
              </div>
            </div>
            <img
              class="host-pic"
              style="object-fit: cover; vertical-align: bottom"
              aria-hidden="true"
              alt="Demet is a superhost. Learn more about Demet."
              decoding="async"
              elementtiming="LCP-target"
              src="https://a0.muscache.com/im/pictures/user/74d822d1-8a2d-47b1-99cf-52ea0f248b67.jpg?im_w=240"
              data-original-uri="https://a0.muscache.com/im/pictures/user/74d822d1-8a2d-47b1-99cf-52ea0f248b67.jpg?im_w=240"
            />
          </div>

          <section class="user-stay-info">
            <div class="user-stay-info-svg" v-html="getSvg('superhost')"></div>
            <div>
              <p class="user-stay-info-title">this host is super host</p>
              <p class="subtext">
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </p>
            </div>
            <div
              class="user-stay-info-svg"
              v-html="getSvg('locationAirbnb')"
            ></div>
            <div>
              <p class="user-stay-info-title">Great location</p>
              <p class="subtext">
                100% of recent guests gave the location a 5-star rating.
              </p>
            </div>
            <div class="user-stay-info-svg" v-html="getSvg('checkin')"></div>
            <div>
              <p class="user-stay-info-title">Great check-in experience</p>
              <p class="subtext">
                95% of recent guests gave the check-in process a 5-star rating.
              </p>
            </div>
          </section>
          <section class="air-cover">
            <h3><span>air</span>cover</h3>
            <p>
              Every booking includes free protection from Host cancellations,
              listing inaccuracies, and other issues like trouble checking in.
            </p>
          </section>
          <section class="stay-decription">
            Villa Aura is located in the Kabak district of Fethiye Faralya
            neighborhood. It is a villa with private swimming pool overlooking
            the sea from Kabak Bay and its balcony. The villa is surrounded by
            semi-protected things. Right in front of the villa is the Lycian way
            to Kabak Bay and Kabak waterfall. If you wish, it is 10 minutes to
            Kabak beach with your vehicle. Right next to the villa is a 50m
            restaurant and 60m grocery store. My guidebook includes nearby
            places to visit
          </section>
          <section class="amenities-container">
            <h2>What this place offers</h2>

            <div class="stay-amenities">
              <div class="amenity">
                <div
                  class="user-stay-info-svg"
                  v-html="getSvg('gardenView')"
                ></div>
                <p>Garden view</p>
              </div>
              <div class="amenity">
                <div
                  class="user-stay-info-svg"
                  v-html="getSvg('essentials')"
                ></div>
                <p>Essentials</p>
              </div>
              <div class="amenity">
                <div class="user-stay-info-svg" v-html="getSvg('smoke')"></div>
                <p>Smoke detector</p>
              </div>

              <div class="amenity">
                <div class="user-stay-info-svg" v-html="getSvg('air')"></div>
                <p>Air conditioning</p>
              </div>

              <div class="amenity">
                <div
                  class="user-stay-info-svg"
                  v-html="getSvg('freeParking')"
                ></div>
                <p>Free parking on premises</p>
              </div>
              <div class="amenity">
                <div class="user-stay-info-svg" v-html="getSvg('tv')"></div>
                <p>TV</p>
              </div>

              <div class="amenity">
                <div class="user-stay-info-svg" v-html="getSvg('carbon')"></div>
                <p>Carbon monoxide detector</p>
              </div>
            </div>
          </section>
        </section>
        <RaservationModal />
      </section>
      <section class="details-reviews">
    
          <div class="total-review" >
            <span class="total-review-svg" v-html="getSvg('starFill')"></span>
            <span class="review-score"> 4.73 </span> <span>•</span>
            <span class="num-of-reviews">9 reviews</span>
          </div>
   

          <div class="details-rating">
            <p>Cleanliness</p>
            <span class="rating-bar"> <progress max="5" value="4.7"></progress>4.7</span>
            <p>Communication</p>
            <span class="rating-bar"> <progress max="5" value="4.5"></progress>4.5</span>
            <p>Check-in</p>
            <span class="rating-bar"><progress max="5" value="5"></progress>5</span>
            <p>Accuracy</p>
            <span class="rating-bar"><progress max="5" value="5"></progress>5</span>
            <p>Location</p>
            <span class="rating-bar"><progress max="5" value="4.7"></progress>4.7</span>
            <p>Value</p>
            <span class="rating-bar"><progress max="5" value="5"></progress>5</span>
           </div>

            <main class="reviews-container">

              <div class="review-preview">
                <div class="user-details">
<img loading="lazy" src="https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small" alt="">
           <p class="reviewer-name">yuval</p>
            <span class="visit-date">jun 2016</span>
            </div>
            <p class="review-text">I had a great experience working with Patty and Peter.  Both were very attentive in sorting out the booking details and following up directly when I had questions.  I rented a 2 bedroom unit at the Westin Villas  in Maui and both the unit and property was absolutely amazing.  I think we had the best unit on the resort complete with 2 outdoor patios with direct access  to  the  beach.  I would HIGHLY recommend renting with Patty and Peter.</p>
           
           <div class="show-more-btn"><a>Show More</a><span class="total-review-svg" v-html="getSvg('showMoreArrowRight')"></span></div> 

            </div>

              <div class="review-preview">
                <div class="user-details">
<img loading="lazy" src="https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small" alt="">
           <p class="reviewer-name">Tracy</p>
            <span class="visit-date">nov 2015</span>
            </div>
            <p class="review-text">Beautiful location. Patty and Peter were super helpful and easy to work with!</p>
            <div class="show-more-btn">            <a>Show More</a><span class="total-review-svg" v-html="getSvg('showMoreArrowRight')"></span>
</div>
           

            </div>
              <div class="review-preview">
                <div class="user-details">
<img loading="lazy" src="https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small" alt="">
           <p class="reviewer-name">Boby</p>
            <span class="visit-date">Dec 2017</span>
            </div>
            <p class="review-text">Great spot for the kids and family and close to beach and everything at the resort. We will definitely be back.</p>
 <div class="show-more-btn"><a>Show More</a><span class="total-review-svg" v-html="getSvg('showMoreArrowRight')"></span>
</div>

            </div>
              <div class="review-preview">
                <div class="user-details">
<img loading="lazy" src="https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small" alt="">
           <p class="reviewer-name">Nati</p>
            <span class="visit-date">Mar 2018</span>
            </div>
            <p class="review-text">The unit and the Westin offer variety of amenities you can possibly ask for. Sofa beds are very comfortable to sleep in. But there is charge for ocean view upgrade. Overall, I highly recommend to book with Patty and Peter. </p>
 <div class="show-more-btn"><a>Show More</a><span class="total-review-svg" v-html="getSvg('showMoreArrowRight')"></span>
</div>


            </div>
              <div class="review-preview">
                <div class="user-details">
<img loading="lazy" src="https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small" alt="">
           <p class="reviewer-name">Ana</p>
            <span class="visit-date">Oct 2020</span>
            </div>
            <p class="review-text">This place was really lovely overall. It is located in a very beautiful location which a gorgeous view. Everything was as described. The kitchen was well stocked with everything but spices. Pots, pans and glassware were all high quality. Because of the seclusion of Kabak, you will need to pick up everything you need before coming here. There is a small convenience shop located up the street with essentials, snacks, drinks, and dried foods</p>
 <div class="show-more-btn"><a>Show More</a><span class="total-review-svg" v-html="getSvg('showMoreArrowRight')"></span>
</div>
            </div>
              <div class="review-preview">
                <div class="user-details">
<img loading="lazy" src="https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small" alt="">
           <p class="reviewer-name">Yoni</p>
            <span class="visit-date">Sep 2021</span>
            </div>
            <p class="review-text">Wonderful house with mesmerizing view! Really clean, with nice and responding host, great pool and basically there are everything you need for a long stay. Keep in mind, that Kabak is a really small village, and supermarkets will be far away from that. But few steps away there one really nice restaurant (try there lamb shish kebab!) and a small market (but there are no milk, eggs, bread, etc, just snacks, beer and sweets). Highly recommend this place for a quite and peaceful stay!</p>
 <div class="show-more-btn"><a>Show More</a><span class="total-review-svg" v-html="getSvg('showMoreArrowRight')"></span>
</div>
            </div>
              <div class="review-preview">
                <div class="user-details">
<img loading="lazy" src="https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small" alt="">
           <p class="reviewer-name">Avi</p>
            <span class="visit-date">Apr 2023</span>
            </div>
            <p class="review-text">Demet was a fabulous host.
The villa was perfect for our needs. Set in a stunning location . Mountains and beautiful beaches with blue blue sea.
Kabak is a wonderful quiet village and the villa is close to a few lovely restaurants that you can walk to in a few minutes.
Highly recommend !
We will be back!</p>
<div class="show-more-btn"><a>Show More</a><span class="total-review-svg" v-html="getSvg('showMoreArrowRight')"></span>
</div>
            </div>
            </main>
      </section>
    </section>
  </section>
</template>

<script>
import { svgService } from "../services/svg.service.js";
import RaservationModal from "../cmps/RaservationModal.vue";

export default {
  data() {
    return {
      stay:{}
    };
  }, created(){
     (async()=>{const {stayId}=this.$route.params
        const stay= await this.$store.dispatch({type:'getStayById',stayId:stayId})
         this.stay=stay})() 
  },
  methods: {
    getSvg(type) {
      return svgService.getSvg(type);
    },
  },computed:{
 

   // this.name=stay
   
    },
  
  components: {
    RaservationModal,
  },
};
</script>