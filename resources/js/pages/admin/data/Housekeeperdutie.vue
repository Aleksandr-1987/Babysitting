<template>
    <div class="category_title">Добавление обязаности домработницы:</div>    
    <form @submit.prevent="createHousekeeperdutie" class="category_form">
        <div>Введите обязаность домработницы:</div>
        <input class="category_form_title" v-model="housekeeperdutie.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Добавить обязаность домработницы</button>
    </form>
    <div class="category_title">Все обязаности домработницы:</div>       
    <ul>                
        <li v-for="post in housekeeperduties" :key="post.id" class="category_item">
            {{ post.title }} 
            <span class="category_change_btn" @click.prevent="change_housekeeperdutie(post.id, post.title)">Изменить обязаность</span>
            <span class="category_change_btn red" @click.prevent="delete_housekeeperdutie(post.id)">Удалить обязаность</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'Housekeeperdutie',
        data() {
            return {
                housekeeperdutie: {},
                fix_housekeeperdutie: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_HOUSEKEEPERDUTIES', 'CREATE_HOUSEKEEPERDUTIE', 'GET_HOUSEKEEPERDUTIE', 'DELETE_HOUSEKEEPERDUTIE'
            ]),
            createHousekeeperdutie() {
                this.CREATE_HOUSEKEEPERDUTIE(this.housekeeperdutie);
                this.housekeeperdutie.title = '';
            },
            change_housekeeperdutie(id, title) {
                this.fix_housekeeperdutie.id = id;
                this.fix_housekeeperdutie.title = title;
                this.GET_HOUSEKEEPERDUTIE(this.fix_housekeeperdutie);
                this.$router.push({name: "Change-housekeeperdutie"})                
            },
            delete_housekeeperdutie(id) {                
                this.DELETE_HOUSEKEEPERDUTIE(id);                                
            } 
        },
        mounted() {
            this.GET_HOUSEKEEPERDUTIES();                        
        },
        computed: {
            ...mapState([
                'housekeeperduties' 
            ])
        },
    }
</script>
