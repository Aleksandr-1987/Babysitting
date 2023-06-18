<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div>sent</div>    
    <ul>                
        <li v-for="post in messages" :key="post.id" class="category_item">
            {{ post.name }} {{ post.surname }} {{ post.title }} {{ post.content }}                                      
        </li>   
    </ul>
</template>
<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: "Msg-sent",
    methods: {
        ...mapActions([
            'GET_USER', 'GET_MSG_OUT', 'GET_TOKEN'
        ]),
        back() {
            this.$router.push({name: "Messages"})
        },
    },
    mounted() {         
        this.GET_USER(); this.GET_TOKEN();                
        this.GET_MSG_OUT(this.user.id);                           
    },
    computed: {
        ...mapState([
            'messages', 'user'
        ])
    },
}
</script>
<style>
    
</style>