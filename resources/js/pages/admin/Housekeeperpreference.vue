<template>
    <div class="category_title">Предпочтения для домработницы:</div>    
    <form @submit.prevent="createHousekeeperpreference" class="category_form">
        <div>Введите название предпочтения:</div>
        <input class="category_form_title" v-model="housekeeperpreference.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Добавить предпочтение</button>
    </form>
    <div class="category_title">Все предпочтения:</div>       
    <ul>                
        <li v-for="post in housekeeperpreferences" :key="post.id" class="category_item">
            {{ post.title }} 
            <span class="category_change_btn" @click.prevent="change_housekeeperpreference(post.id, post.title)">Изменить предпочтение</span>
            <span class="category_change_btn red" @click.prevent="delete_housekeeperpreference(post.id)">Удалить предпочтение</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'Housekeeperpreference',
        data() {
            return {
                housekeeperpreference: {},
                fix_housekeeperpreference: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_HOUSEKEEPERPREFERENCES', 'CREATE_HOUSEKEEPERPREFERENCE', 'GET_HOUSEKEEPERPREFERENCE', 'DELETE_HOUSEKEEPERPREFERENCE'
            ]),
            createHousekeeperpreference() {
                this.CREATE_HOUSEKEEPERPREFERENCE(this.housekeeperpreference);
                this.housekeeperpreference.title = '';
            },
            change_housekeeperpreference(id, title) {
                this.fix_housekeeperpreference.id = id;
                this.fix_housekeeperpreference.title = title;
                this.GET_HOUSEKEEPERPREFERENCE(this.fix_housekeeperpreference);
                this.$router.push({name: "Change-housekeeperpreference"})                
            },
            delete_housekeeperpreference(id) {                
                this.DELETE_HOUSEKEEPERPREFERENCE(id);                                
            } 
        },
        mounted() {
            this.GET_HOUSEKEEPERPREFERENCES();                        
        },
        computed: {
            ...mapState([
                'housekeeperpreferences' 
            ])
        },
    }
</script>
