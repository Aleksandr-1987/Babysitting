<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div> incoming </div>
    <div>{{ messages_in }}</div>
    
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: "Incoming",
    data() {
        return {
            option: {}
        }
    },
    methods: {
        ...mapActions([
            'GET_ADMIN', 'GET_USER', 'GET_MESSAGES_IN', 'GET_TOKEN'
        ]),
        back() {
            this.$router.push({name: "Mailbox"})
        },                
    },
    mounted() {         
        this.GET_ADMIN(); this.GET_USER(); this.GET_TOKEN();        
         
        this.option.user_id = this.user.id; 
        this.option.admin_id = this.admin_id;        
        this.GET_MESSAGES_IN(this.option);                   
    },
    computed: {
        ...mapState([
            'messages_in', 'admin_id', 'user'
        ])
    },
}
</script>

<style>
    
</style>