<template>
    <div class="category_title">Добавление умения для сиделки:</div>    
    <form @submit.prevent="createNursingskill" class="category_form">
        <div>Введите название умения:</div>
        <input class="category_form_title" v-model="nursingskill.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Добавить умение</button>
    </form>
    <div class="category_title">Все умения для сиделки:</div>       
    <ul>                
        <li v-for="post in nursingskills" :key="post.id" class="category_item">
            {{ post.title }} 
            <span class="category_change_btn" @click.prevent="change_nursingskill(post.id, post.title)">Изменить умение</span>
            <span class="category_change_btn red" @click.prevent="delete_nursingskill(post.id)">Удалить умение</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'Nursingskill',
        data() {
            return {
                nursingskill: {},
                fix_nursingskill: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_NURSINGSKILLS', 'CREATE_NURSINGSKILL', 'GET_NURSINGSKILL', 'DELETE_NURSINGSKILL'
            ]),
            createNursingskill() {
                this.CREATE_NURSINGSKILL(this.nursingskill);
                this.nursingskill.title = '';
            },
            change_nursingskill(id, title) {
                this.fix_nursingskill.id = id;
                this.fix_nursingskill.title = title;
                this.GET_NURSINGSKILL(this.fix_nursingskill);
                this.$router.push({name: "Change-nursingskill"})                
            },
            delete_nursingskill(id) {                
                this.DELETE_NURSINGSKILL(id);                                
            } 
        },
        mounted() {
            this.GET_NURSINGSKILLS();                        
        },
        computed: {
            ...mapState([
                'nursingskills' 
            ])
        },
    }
</script>
