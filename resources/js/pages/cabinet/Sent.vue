<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div> sent </div>
    <div>{{ messages }}</div>
    
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: "Sent",
    data() {
        return {
            option: {}
        }
    },
    methods: {
        ...mapActions([
            'GET_ADMIN', 'GET_USER', 'GET_MESSAGES', 'GET_TOKEN'
        ]),
        back() {
            this.$router.push({name: "Mailbox"})
        },                
    },
    mounted() {         
        this.GET_ADMIN(); this.GET_USER(); this.GET_TOKEN();        
         
        this.option.user_id = this.user.id; 
        this.option.admin_id = this.admin_id;        
        this.GET_MESSAGES(this.option);                           
    },
    computed: {
        ...mapState([
            'messages', 'admin_id', 'user'
        ])
    },
}
</script>

<style>
    
</style>