<template>
    <div class="category_title">Добавление города:</div>    
    <form @submit.prevent="createCity" class="category_form">
        <div>Введите название города:</div>
        <input class="category_form_title" v-model="city.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Добавить город</button>
    </form>
    <div class="category_title">Все города:</div>       
    <ul>                
        <li v-for="post in citys" :key="post.id" class="category_item">
            {{ post.title }} 
            <span class="category_change_btn" @click.prevent="change_city(post.id, post.title)">Изменить город</span>
            <span class="category_change_btn red" @click.prevent="delete_city(post.id)">Удалить город</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'City',
        data() {
            return {
                city: {},
                fix_city: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_CITYS', 'CREATE_CITY', 'GET_CITY', 'DELETE_CITY'
            ]),
            createCity() {
                this.CREATE_CITY(this.city);
                this.city.title = '';
            },
            change_city(id, title) {
                this.fix_city.id = id;
                this.fix_city.title = title;
                this.GET_CITY(this.fix_city);
                this.$router.push({name: "Change-city"})                
            },
            delete_city(id) {                
                this.DELETE_CITY(id);                                
            } 
        },
        mounted() {
            this.GET_CITYS();                        
        },
        computed: {
            ...mapState([
                'citys' 
            ])
        },
    }
</script>
