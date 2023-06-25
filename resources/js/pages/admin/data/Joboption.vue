<template>
    <div class="category_title">Добавление варианта работы:</div>    
    <form @submit.prevent="createJoboption" class="category_form">
        <div>Введите название варианта работы:</div>
        <input class="category_form_title" v-model="joboption.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Добавить вариант работы</button>
    </form>
    <div class="category_title">Все варианты работы:</div>       
    <ul>                
        <li v-for="post in joboptions" :key="post.id" class="category_item">
            {{ post.title }} 
            <span class="category_change_btn" @click.prevent="change_joboption(post.id, post.title)">Изменить вариант работы</span>
            <span class="category_change_btn red" @click.prevent="delete_joboption(post.id)">Удалить вариант работы</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'Joboption',
        data() {
            return {
                joboption: {},
                fix_joboption: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_JOBOPTIONS', 'CREATE_JOBOPTION', 'GET_JOBOPTION', 'DELETE_JOBOPTION'
            ]),
            createJoboption() {
                this.CREATE_JOBOPTION(this.joboption);
                this.joboption.title = '';
            },
            change_joboption(id, title) {
                this.fix_joboption.id = id;
                this.fix_joboption.title = title;
                this.GET_JOBOPTION(this.fix_joboption);
                this.$router.push({name: "Change-joboption"})                
            },
            delete_joboption(id) {                
                this.DELETE_JOBOPTION(id);                                
            } 
        },
        mounted() {
            this.GET_JOBOPTIONS();                        
        },
        computed: {
            ...mapState([
                'joboptions' 
            ])
        },
    }
</script>
