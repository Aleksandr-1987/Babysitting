<template>
    <div class="category_title">Добавление почасовой оплаты:</div>    
    <form @submit.prevent="createHourlypayment" class="category_form">
        <div>Введите почасовую оплату:</div>
        <input class="category_form_title" v-model="hourlypayment.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Добавить почасовую оплату</button>
    </form>
    <div class="category_title">Все почасовые оплаты:</div>       
    <ul>                
        <li v-for="post in hourlypayments" :key="post.id" class="category_item">
            {{ post.title }} 
            <span class="category_change_btn" @click.prevent="change_hourlypayment(post.id, post.title)">Изменить почасовую оплату</span>
            <span class="category_change_btn red" @click.prevent="delete_hourlypayment(post.id)">Удалить почасовую оплату</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'Hourlypayment',
        data() {
            return {
                hourlypayment: {},
                fix_hourlypayment: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_HOURLYPAYMENTS', 'CREATE_HOURLYPAYMENT', 'GET_HOURLYPAYMENT', 'DELETE_HOURLYPAYMENT'
            ]),
            createHourlypayment() {
                this.CREATE_HOURLYPAYMENT(this.hourlypayment);
                this.hourlypayment.title = '';
            },
            change_hourlypayment(id, title) {
                this.fix_hourlypayment.id = id;
                this.fix_hourlypayment.title = title;
                this.GET_HOURLYPAYMENT(this.fix_hourlypayment);
                this.$router.push({name: "Change-hourlypayment"})                
            },
            delete_hourlypayment(id) {                
                this.DELETE_HOURLYPAYMENT(id);                                
            } 
        },
        mounted() {
            this.GET_HOURLYPAYMENTS();                        
        },
        computed: {
            ...mapState([
                'hourlypayments' 
            ])
        },
    }
</script>
