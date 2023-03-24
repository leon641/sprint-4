
<template>
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
</template>
<script>
import { svgService } from '../services/svg.service';
export default {
  data() {
    return {};
  },methods:{
      getSvg(type) {
      return svgService.getSvg(type);
    },
  },
  computed: {},
};
</script>