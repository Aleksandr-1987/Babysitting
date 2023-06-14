<template>
    <div class="category_title">Добавление вида работы для сиделки:</div>    
    <form @submit.prevent="createNursetypeofwork" class="category_form">
        <div>Введите название вида работы:</div>
        <input class="category_form_title" v-model="nursetypeofwork.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Добавить вид работы</button>
    </form>
    <div class="category_title">Все виды работы для сиделки:</div>       
    <ul>                
        <li v-for="post in nursetypeofworks" :key="post.id" class="category_item">
            {{ post.title }} 
            <span class="category_change_btn" @click.prevent="change_nursetypeofwork(post.id, post.title)">Изменить вид работы</span>
            <span class="category_change_btn red" @click.prevent="delete_nursetypeofwork(post.id)">Удалить вид работы</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'Nursetypeofwork',
        data() {
            return {
                nursetypeofwork: {},
                fix_nursetypeofwork: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_NURSETYPEOFWORKS', 'CREATE_NURSETYPEOFWORK', 'GET_NURSETYPEOFWORK', 'DELETE_NURSETYPEOFWORK'
            ]),
            createNursetypeofwork() {
                this.CREATE_NURSETYPEOFWORK(this.nursetypeofwork);
                this.nursetypeofwork.title = '';
            },
            change_nursetypeofwork(id, title) {
                this.fix_nursetypeofwork.id = id;
                this.fix_nursetypeofwork.title = title;
                this.GET_NURSETYPEOFWORK(this.fix_nursetypeofwork);
                this.$router.push({name: "Change-nursetypeofwork"})                
            },
            delete_nursetypeofwork(id) {                
                this.DELETE_NURSETYPEOFWORK(id);                                
            } 
        },
        mounted() {
            this.GET_NURSETYPEOFWORKS();                        
        },
        computed: {
            ...mapState([
                'nursetypeofworks' 
            ])
        },
    }
</script>
