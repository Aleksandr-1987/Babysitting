<template>
    <div class="category_title">Добавление вида занятости:</div>    
    <form @submit.prevent="createEmployment" class="category_form">
        <div>Введите название вида занятости:</div>
        <input class="category_form_title" v-model="employment.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Добавить вид занятости</button>
    </form>
    <div class="category_title">Все виды занятости:</div>       
    <ul>                
        <li v-for="post in employments" :key="post.id" class="category_item">
            {{ post.title }} 
            <span class="category_change_btn" @click.prevent="change_employment(post.id, post.title)">Изменить вид занятости</span>
            <span class="category_change_btn red" @click.prevent="delete_employment(post.id)">Удалить вид занятости</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'Employment',
        data() {
            return {
                employment: {},
                fix_employment: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_EMPLOYMENTS', 'CREATE_EMPLOYMENT', 'GET_EMPLOYMENT', 'DELETE_EMPLOYMENT'
            ]),
            createEmployment() {
                this.CREATE_EMPLOYMENT(this.employment);
                this.employment.title = '';
            },
            change_employment(id, title) {
                this.fix_employment.id = id;
                this.fix_employment.title = title;
                this.GET_EMPLOYMENT(this.fix_employment);
                this.$router.push({name: "Change-employment"})                
            },
            delete_employment(id) {                
                this.DELETE_EMPLOYMENT(id);                                
            } 
        },
        mounted() {
            this.GET_EMPLOYMENTS();                        
        },
        computed: {
            ...mapState([
                'employments' 
            ])
        },
    }
</script>
