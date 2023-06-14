<template>
    <div class="category_title">Добавление обязаности сиделки:</div>    
    <form @submit.prevent="createNursedutie" class="category_form">
        <div>Введите название обязаности сиделки</div>
        <input class="category_form_title" v-model="nursedutie.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Добавить обязаность сиделки</button>
    </form>
    <div class="category_title">Все обязаности сиделки:</div>       
    <ul>                
        <li v-for="post in nurseduties" :key="post.id" class="category_item">
            {{ post.title }} 
            <span class="category_change_btn" @click.prevent="change_nursedutie(post.id, post.title)">Изменить обязаность</span>
            <span class="category_change_btn red" @click.prevent="delete_nursedutie(post.id)">Удалить обязаность</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'Nursedutie',
        data() {
            return {
                nursedutie: {},
                fix_nursedutie: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_NURSEDUTIES', 'CREATE_NURSEDUTIE', 'GET_NURSEDUTIE', 'DELETE_NURSEDUTIE'
            ]),
            createNursedutie() {
                this.CREATE_NURSEDUTIE(this.nursedutie);
                this.nursedutie.title = '';
            },
            change_nursedutie(id, title) {
                this.fix_nursedutie.id = id;
                this.fix_nursedutie.title = title;
                this.GET_NURSEDUTIE(this.fix_nursedutie);
                this.$router.push({name: "Change-nursedutie"})                
            },
            delete_nursedutie(id) {                
                this.DELETE_NURSEDUTIE(id);                                
            } 
        },
        mounted() {
            this.GET_NURSEDUTIES();                        
        },
        computed: {
            ...mapState([
                'nurseduties' 
            ])
        },
    }
</script>
