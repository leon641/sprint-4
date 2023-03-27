<template>
    <div class="user-nav">
            <a v-if="!user">Login</a>
            <router-link v-if="user" to="/dashboard/host/orders">Dashboard</router-link>
            <router-link v-if="user" to="/dashboard/buyer/trips">My Trips</router-link>
            <router-link v-if="user" to="/wishlist">Wishlist</router-link>
            <a v-if="user" @click.stop="logout">Logout</a>
    </div>
                  
</template>

<script>
export default {
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
    },
};
</script>