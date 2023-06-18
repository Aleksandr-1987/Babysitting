<template>
    <div class="category_title">Все пользователи:</div>       
    <ul>                
        <li v-for="post in users" :key="post.id" class="category_item">
            {{ post.name }} 
            <span class="category_change_btn" @click.prevent="addMessage(post.id)">Написать сообщение</span>                            
        </li>   
    </ul>
    
    <div @click.prevent="incoming" class="admin_sidebar_item">Входящие {{ countmessage }}</div>
    <div @click.prevent="sent" class="admin_sidebar_item">Отправленные</div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: "Messages",
    methods: {
        ...mapActions([
            'GET_USERS', 'GET_USER', 'GET_TOKEN', 'GET_USERID', 'GET_COUNTMESSAGE'
        ]),
        incoming() {
            this.$router.push({name: "Msg-received"})
        },
        sent() {
            this.$router.push({name: "Msg-sent"})
        },
        addMessage(id) {
            localStorage.user_id = id; this.GET_USERID();
            this.$router.push({name: "Add-message"})
        }
    },
    mounted() {         
        this.GET_USERS(); this.GET_USER(); this.GET_TOKEN(); this.GET_COUNTMESSAGE(this.user.id);                                        
    },
    computed: {
        ...mapState([
            'users', 'countmessage', 'user'
        ])
    },
}
</script>

<style>
    
</style>