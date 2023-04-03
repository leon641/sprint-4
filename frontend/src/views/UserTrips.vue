<template>
  <h1 class="trips-title">Trips</h1>
  <section class="user-trips">
    <div class="mini-card card-item-2">
      <div class="mini-card-header">
        <h1>Wishlist</h1>
      </div>
      <h4>
        <span>{{loggedinUser.likedByUsers.length}}</span>
        &nbsp;saved stays
      </h4>
      <button class="mini-card-btn" @click="goToWishList">Go to wishlist</button>
    </div>
      <div class="mini-card-header mini-card card-item-3">
        <h1>Messages</h1>
      <h3 >Order #o1226 in status: <span :class="currOrder.status">{{currOrder.status}}</span></h3>
    

        
      </div>
      <div class="mini-card card-item-1">
        <div class="next-stay">
    <h1>Your Next Stay</h1>
      <h3>{{currOrder.stay.name}}</h3>
      <h4>Adults: {{currOrder.guests.adults}}</h4>
      <h4>Kids: {{currOrder.guests.kids}}</h4>
      <h4>Infants: {{currOrder.guests.infants}}</h4>
      <h4>Pets: {{currOrder.guests.pets}}</h4>
      <h4>Total price: ${{currOrder.totalPrice.toLocaleString()}}</h4>
      <button class="mini-card-btn">Go to stay</button>
        </div>
     <div class="next-stay-img">
      <img :src="currOrder.stay.img" alt="" srcset="">
     </div>
      </div>

      <section class="old-trips card-item-4"  >
        <h2>Where you've been</h2>
          <div class="mini-stay">
            <div class="mini-stay1">
             <img class="mini-img" src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg" alt="" srcset="">
              <div class="info">
              <h5>Montreal</h5>
              <small>hosted by angel</small>
              <small>nov 12-19, 2022</small>

              </div>
            </div>
          <div class="mini-stay">
            <div class="mini-stay1">
             <img class="mini-img" src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663437033/rhw6gycttaimzocc1poz.jpg" alt="" srcset="">
              <div class="info">
              <h5>Rio De Janeiro</h5>
              <small>hosted by Luana</small>
              <small>June 08-13, 2022</small>

              </div>
            </div>
          </div>
          <div class="mini-stay">
            <div class="mini-stay1">
             <img class="mini-img" src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436556/mb70fifvvpvde8jub5cg.jpg" alt="" srcset="">
              <div class="info">
              <h5>Maui</h5>
              <small>hosted by Franck</small>
              <small>Jan 18-24, 2022</small>

              </div>
            </div>
          </div>
          <div class="mini-stay">
            <div class="mini-stay1">
             <img class="mini-img" src="http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436983/pivldxmrxssnhyzixhes.jpg" alt="" srcset="">
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
</template>
<script>
export default {
  data() {
    return {
      loggedinUser : {},
      currOrder : {},
    };
  },
   created() {
    this.currOrder = this.$store.getters.currOrder
    this.loggedinUser = this.$store.getters.loggedinUser
    console.log('currOrder in trips',this.currOrder);
  },
  computed: {},
  methods : {
    goToWishList() {
      this.$router.push('/wishlist')
    }
  }
};
</script>