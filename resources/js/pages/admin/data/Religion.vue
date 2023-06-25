<template>
    <div class="category_title">Добавление религии:</div>    
    <form @submit.prevent="createReligion" class="category_form">
        <div>Введите название религии:</div>
        <input class="category_form_title" v-model="religion.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Добавить религию</button>
    </form>
    <div class="category_title">Все религии:</div>       
    <ul>                
        <li v-for="post in religions" :key="post.id" class="category_item">
            {{ post.title }} 
            <span class="category_change_btn" @click.prevent="change_religion(post.id, post.title)">Изменить религию</span>
            <span class="category_change_btn red" @click.prevent="delete_religion(post.id)">Удалить религию</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'Religion',
        data() {
            return {
                religion: {},
                fix_religion: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_RELIGIONS', 'CREATE_RELIGION', 'GET_RELIGION', 'DELETE_RELIGION'
            ]),
            createReligion() {
                this.CREATE_RELIGION(this.religion);
                this.religion.title = '';
            },
            change_religion(id, title) {
                this.fix_religion.id = id;
                this.fix_religion.title = title;
                this.GET_RELIGION(this.fix_religion);
                this.$router.push({name: "Change-religion"})                
            },
            delete_religion(id) {                
                this.DELETE_RELIGION(id);                                
            } 
        },
        mounted() {
            this.GET_RELIGIONS();                        
        },
        computed: {
            ...mapState([
                'religions' 
            ])
        },
    }
</script>
