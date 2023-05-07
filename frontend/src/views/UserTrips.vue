<template>
  <h1 class="trips-title">Trips</h1>
  <section v-if="order" class="user-trips">
    <div class="mini-card card-item-2">
      <div class="mini-card-header">
        <h1>Wishlist</h1>
      </div>
      <h4>
        <span>{{loggedinUser.likedByUsers?.length}}</span>
        &nbsp;saved stays
      </h4>
      <button class="mini-card-btn" @click="goToWishList">Go to wishlist</button>
    </div>
      <div class="mini-card-header mini-card card-item-3">
        <h1>Messages</h1>
      <h3 >Order #o1226 in status: <span :class="order.status">{{order.status}}</span></h3>
    

        
      </div>
      <div class="mini-card card-item-1">
        <div class="next-stay">
    <h1>Your Next Stay</h1>
      <h3>{{order.stay?.name}}</h3>
      <h4>Adults: {{order.guests?.adults}}</h4>
      <h4>Kids: {{order.guests?.kids}}</h4>
      <h4>Infants: {{order.guests?.infants}}</h4>
      <h4>Pets: {{order.guests?.pets}}</h4>
      <h4>Total price: ${{order.totalPrice?.toLocaleString()}}</h4>
      <button class="mini-card-btn">Go to stay</button>
        </div>
     <div class="next-stay-img">
      <img :src="order.stay?.img" alt="" srcset="">
     </div>
      </div>

      <section class="old-trips card-item-4"  >
        <h2>Where you've been</h2>
          <div class="mini-stay">
            <div class="mini-stay1">
             <img class="mini-img" src="https://a0.muscache.com/im/pictures/miso/Hosting-565333856160262069/original/b4f30c28-6b22-4d39-80ba-6cda756cbc33.jpeg?im_w=720" alt="" srcset="">
              <div class="info">
              <h5>Montreal</h5>
              <small>hosted by angel</small>
              <small>nov 12-19, 2022</small>

              </div>
            </div>
          <div class="mini-stay">
            <div class="mini-stay1">
             <img class="mini-img" src="https://a0.muscache.com/im/pictures/95166772/2cfd3e94_original.jpg?im_w=1200" alt="" srcset="">
              <div class="info">
              <h5>Rio De Janeiro</h5>
              <small>hosted by Luana</small>
              <small>June 08-13, 2022</small>

              </div>
            </div>
          </div>
          <div class="mini-stay">
            <div class="mini-stay1">
             <img class="mini-img" src="https://a0.muscache.com/im/pictures/2587de26-b64d-4d83-9b16-cca6ed4953fc.jpg?im_w=720" alt="" srcset="">
              <div class="info">
              <h5>Maui</h5>
              <small>hosted by Franck</small>
              <small>Jan 18-24, 2022</small>

              </div>
            </div>
          </div>
          <div class="mini-stay">
            <div class="mini-stay1">
             <img class="mini-img" src="https://a0.muscache.com/im/pictures/f554f93b-7bbd-4024-ae97-5857f3cdaf1a.jpg?im_w=1440" alt="" srcset="">
              <div class="info">
              <h5>Barcelona</h5>
              <small>hosted by sonia</small>
              <small>Jan 18-24, 2022</small>
              


              </div>
            </div>
          </div>
          </div>
      </section>
  </section>
  <div class="not-booked-yet-container" v-else>
    <h1>No trips booked...yet!</h1>
  <p class="time-to">Time to dust off your bags and start planning your next adventure</p>
  <button @click="toHome" class="btn-trips-begin-searching">Start searching</button>
  </div>
  <MobileFooterVue/>
</template>
<script>

import { orderService } from '../services/order.service';
import { socketService } from '../services/socket.service';
import MobileFooterVue from '../cmps/MobileFooter.vue';

export default {
  
  data() {
    return {
      loggedinUser : {},
      order : null,

    };
  },
   async created() {
     this.loggedinUser = this.$store.getters.loggedinUser
       console.log(' this.loggedinUser', this.loggedinUser);
     socketService.on('update-order', (data) => {
       this.order.status=data
    
      })
      const orderId = this.$route.query.order
      if(!orderId)return 
    const order = await orderService.getById(orderId)
    this.order= order

  },
  computed: {},
  methods : {
    goToWishList() {
      this.$router.push('/wishlist')
    },
    toHome(){
      this.$router.push('/')
    }
  },components:{
    MobileFooterVue,
  }
};
</script>