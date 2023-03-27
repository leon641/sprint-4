<template>
    <div class="user-nav">
            <a v-if="!user" @click="openLoginModal">Login</a>
            <router-link v-if="user" to="/dashboard/host/orders">Dashboard</router-link>
            <router-link v-if="user" to="/dashboard/buyer/trips">My Trips</router-link>
            <router-link v-if="user" to="/wishlist">Wishlist</router-link>
            <a v-if="user" @click.stop="logout">Logout</a>
    </div>
         
</template>

<script>

import LoginSignUp from "./LoginSignUp.vue"
export default {
    data()  {
        return {

        }
    },
    methods: {
       
        logout() {
            this.$store.dispatch("logout");
            this.$router.push('/')
        },
    },
    computed: {
        user() {
            return this.$store.getters.loggedinUser;
        },
        openLoginModal() {
            this.$emit('openLogin')
        }
    },
    components : {
        LoginSignUp
    },
    emits : ['openLogin',],
};
</script>