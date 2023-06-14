<template>
    <div @click.prevent="home" class="user_btn">home</div>
    <div v-if="token" @click.prevent="cabinet" class="user_btn">personal</div> 
    <div v-if="!token" @click.prevent="login" class="user_btn">login</div>
    <div v-if="!token" @click.prevent="register" class="user_btn">register</div>
    <div v-if="token && (user.role === 'Администратор')" @click.prevent="admin" class="user_btn">admin</div>
    <div v-if="token" @click.prevent="logout" class="user_btn">logout</div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: "Header",
    methods: {
        ...mapActions([
            'LOGOUT_USER'
        ]),   
        home() {
            this.$router.push({name: "Home"})
        },     
        cabinet() {
            this.$router.push({name: "Account"})
        },
        login() {
            this.$router.push({name: "Login"})
        },
        register() {
            this.$router.push({name: "Register-menu"})
        },
        admin() {
            this.$router.push({name: "Users"})
        },
        logout() {
            this.LOGOUT_USER()
        },
    },    
    computed: {
        ...mapState([
            'token', 'user' 
        ])
    },    
}
</script>