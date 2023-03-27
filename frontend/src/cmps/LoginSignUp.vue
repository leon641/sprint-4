<template>
    <section class="login-layout" v-if="isOpen">
        <header class="login-title">
            <h2>Sign up or Login</h2>
            <button @click="toggleModal" class="exit-login-btn">x</button>
        </header>

        <form @submit.prevent="login" class="login-main-content" v-if="isLogin">
            <div class="app-title">
            <h3> Welcome to Appbnb </h3>
            </div>

            <div class="login-form-cont">
                <input v-model="userCred.username" autocomplete="username" placeholder="Username">
                <div class="form-line"></div>
                <input v-model="userCred.password" placeholder="Password" type="password" autocomplete="password">
            </div>

            <button class="btn-container">Log in</button>

            <div class="login-or-line"></div>
            <div class="login-line-text">or</div>

            <button @click="loginAsGuest" @mousemove="hoverEffect" class="btn-container">Continue as a guest</button>

        </form>

        <form @submit.prevent="signup" class="login-main-content" v-if="!isLogin">
            <h3> Welcome to Appbnb </h3>

            <div class="sign-up-form-cont">
                <input v-model="signupCred.fullname" class="fullname-input" type="text" placeholder="Full name">
                <div class="form-line"></div>
                <input v-model="signupCred.username" class="username-input" placeholder="Username">
                <div class="form-line"></div>
                <input v-model="signupCred.password" class="password-input" autocomplete="password"
                    placeholder="Password" type="password">
            </div>

            <button @mousemove="hoverEffect" class="btn-container">Sign up</button>

            <div class="login-or-line"></div>
            <div class="login-line-text">or</div>

            <button @mousemove="hoverEffect" class="btn-container">Continue as a guest</button>

        </form>
    </section>
</template>
  
<script>
export default {
    name: "LoginSignUp",
    data() {
        return {
            isOpen: true,
            isLogin: true,
            userCred: {
                username: "",
                password: "",
            },
            signupCred: {
                fullname: "",
                username: "",
                password: "",
            },
        };
    },
    methods: {
            login() {
           this.$store.dispatch({type : 'login', userCred : {...this.userCred}})
           this.isOpen = !this.isOpen;
           
        },
         signup() {
             this.$store.dispatch({ type: "signup", cred: this.signupCred });
            
        },
          loginAsGuest() {
            this.userCred.username = 'guest'
            this.userCred.password = '111'
            this.login()
        },
         toggleModal() {
      this.isOpen = !this.isOpen;
    },
       

       
    },
    computed: {
        
    },
};
</script>