<template>
    <div> mail box </div>
    <form @submit.prevent="sentMessage" class="login_form">     
        <div>Укажите свое имя:</div>
        <input v-model="user.name" required class="login_form_item" type="text" placeholder="имя">        
        <div>Укажите свою фамилию:</div>
        <input v-model="user.surname" required class="login_form_item" type="text" placeholder="фамилия">
        <div>Укажите свой телефон:</div>
        <input v-model="user.phone" required class="login_form_item" type="tel" placeholder="телефон">        
        <div>Укажите свой email:</div>
        <input v-model="user.email" required class="login_form_item" type="email" placeholder="email">
        <div>Укажите свой город:</div>
        <input v-model="user.city" required class="login_form_item" type="text" placeholder="город"> 
        <div>Укажите свою страну:</div>
        <input v-model="user.country" required class="login_form_item" type="text" placeholder="страна">      
        <div>Укажите тему сообщения:</div>
        <input v-model="user.title" required class="login_form_item" type="text" placeholder="тема">
        <div>Напишите текст сообщения:</div>        
        <textarea v-model="user.content" required class="login_form_item" placeholder="about"></textarea>        
        <button type="submit" class="login_form_btn">Отправить сообщение</button>
    </form>
    
    <div @click.prevent="incoming" class="admin_sidebar_item">Входящие</div>
    <div @click.prevent="sent" class="admin_sidebar_item">Отправленные</div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: "Mailbox",    
    methods: {
        ...mapActions([
            'GET_ADMIN', 'GET_USER', 'CREATE_MESSAGE', 'GET_MESSAGES', 'GET_TOKEN'
        ]),
        sentMessage() {
            this.user.reading = 0
            this.user.sender = this.user.id
            this.user.recipient = this.admin_id          
            this.user.time = new Date().toLocaleTimeString('en-US', {
                hour12: false, hour: 'numeric', minute: 'numeric'
            });
            //console.log(this.user);
            this.CREATE_MESSAGE(this.user);            
        },
        incoming() {
            this.$router.push({name: "Incoming"})
        },
        sent() {
            this.$router.push({name: "Sent"})
        },
    },
    mounted() {            
        this.GET_ADMIN(); this.GET_USER(); this.GET_TOKEN();                
    },
    computed: {
        ...mapState([
            'admin_id', 'user'
        ])
    },
}
</script>
<style>
    
</style>