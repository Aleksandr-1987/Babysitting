<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div>received</div>    
    <ul>                
        <li v-for="post in messages_in" :key="post.id" class="category_item">
            {{ post.name }} {{ post.surname }} {{ post.title }} {{ post.content }}                                      
        </li>   
    </ul>
    
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: "Msg-received",
    methods: {
        ...mapActions([
            'GET_USER', 'GET_MSG_IN', 'GET_TOKEN'
        ]),
        back() {
            this.$router.push({name: "Messages"})
        },
    },
    mounted() {         
        this.GET_USER(); this.GET_TOKEN();                
        this.GET_MSG_IN(this.user.id);                   
    },
    computed: {
        ...mapState([
            'messages_in', 'user'
        ])
    },
}
</script>

<style>
    
</style>