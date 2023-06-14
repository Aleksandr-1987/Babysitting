<template>
    <div class="category_title">Добавление вида работы для няни:</div>    
    <form @submit.prevent="createTypeofwork" class="category_form">
        <div>Введите название вида работы для няни:</div>
        <input class="category_form_title" v-model="typeofwork.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Добавить вида работы</button>
    </form>
    <div class="category_title">Все виды работы:</div>       
    <ul>                
        <li v-for="post in typeofworks" :key="post.id" class="category_item">
            {{ post.title }} 
            <span class="category_change_btn" @click.prevent="change_typeofwork(post.id, post.title)">Изменить вид работы</span>
            <span class="category_change_btn red" @click.prevent="delete_typeofwork(post.id)">Удалить вид работы</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'Typeofwork',
        data() {
            return {
                typeofwork: {},
                fix_typeofwork: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_TYPEOFWORKS', 'CREATE_TYPEOFWORK', 'GET_TYPEOFWORK', 'DELETE_TYPEOFWORK'
            ]),
            createTypeofwork() {
                this.CREATE_TYPEOFWORK(this.typeofwork);
                this.typeofwork.title = '';
            },
            change_typeofwork(id, title) {
                this.fix_typeofwork.id = id;
                this.fix_typeofwork.title = title;
                this.GET_TYPEOFWORK(this.fix_typeofwork);
                this.$router.push({name: "Change-typeofwork"})                
            },
            delete_typeofwork(id) {                
                this.DELETE_TYPEOFWORK(id);                                
            } 
        },
        mounted() {
            this.GET_TYPEOFWORKS();                        
        },
        computed: {
            ...mapState([
                'typeofworks' 
            ])
        },
    }
</script>
