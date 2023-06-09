// בס"ד

import { createRouter, createWebHashHistory } from 'vue-router'

// import Home from './views/Home.vue'
import Chat from './views/Chat.vue'
import StayIndex from './views/StayIndex.vue'
import ReviewIndex from './views/ReviewIndex.vue'
import LoginSignup from './views/LoginSignup.vue'
import UserDetails from './views/UserDetails.vue'
import StayDetails from './views/StayDetails.vue'
import Wishlist from './views/Wishlist.vue'
import Reservation from './views/Reservation.vue'
import UserTrips from './views/UserTrips.vue'
import Explore from './views/Explore.vue'
import StayDashboard from './views/StayDashboard.vue'
import StayEdit from './views/StayEdit.vue'
import StayListing from './views/StayListing.vue'
import DashboardReservation from './views/DashboardReservation.vue'

const routes = [
  {
    path: '/',
    name: 'StayIndex',
    component: StayIndex
  },
  {
    path: '/details/:stayId?',
    name: 'StayDetails',
    component: StayDetails
  },
  {
    path: '/dashboard',
    name: 'StayDashboard',
    component: StayDashboard,
    children: [
      {
        path: "/dashboard/reservations",
        component: DashboardReservation
      },
      {
        path: '/dashboard/listing',
        component: StayListing
      },
      {
        path: '/dashboard/edit/:stayId?',
        component: StayEdit
      },

    ]
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  },
  {
    path: '/trips',
    name: 'UserTrips',
    component: UserTrips
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: Reservation
  },
  {
    path: '/review',
    name: 'ReviewIndex',
    component: ReviewIndex
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/login',
    name: 'LoginSignup',
    component: LoginSignup
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetails
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
]


export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})

