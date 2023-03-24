// בס"ד

import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import Chat from './views/Chat.vue'
import StayIndex from './views/StayIndex.vue'
import ReviewIndex from './views/ReviewIndex.vue'
import LoginSignup from './views/LoginSignup.vue'
import UserDetails from './views/UserDetails.vue'
import StayDetails from './views/StayDetails.vue'
import StayWishlist from './views/StayWishlist.vue'

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
    path: '/wishlist',
    name: 'StayWishlist',
    component: StayWishlist
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
  }
]


export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})

