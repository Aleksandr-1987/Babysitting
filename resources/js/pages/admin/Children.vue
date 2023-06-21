<template>
    <div class="category_title">Добавление количества детей для работы:</div>    
    <form @submit.prevent="createChildren" class="category_form">
        <div>Введите количество детей:</div>
        <input class="category_form_title" v-model="children.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Добавить количество детей</button>
    </form>
    <div class="category_title">Вся информация о количестве детей для работы:</div>       
    <ul>                
        <li v-for="post in childrens" :key="post.id" class="category_item">
            {{ post.title }} 
            <span class="category_change_btn" @click.prevent="change_children(post.id, post.title)">Изменить количество детей</span>
            <span class="category_change_btn red" @click.prevent="delete_children(post.id)">Удалить количество детей</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'Children',
        data() {
            return {
                children: {},
                fix_children: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_CHILDRENS', 'CREATE_CHILDREN', 'GET_CHILDREN', 'DELETE_CHILDREN'
            ]),
            createChildren() {
                this.CREATE_CHILDREN(this.children);
                this.children.title = '';
            },
            change_children(id, title) {
                this.fix_children.id = id;
                this.fix_children.title = title;
                this.GET_CHILDREN(this.fix_children);
                this.$router.push({name: "Change-children"})                
            },
            delete_children(id) {                
                this.DELETE_CHILDREN(id);                                
            } 
        },
        mounted() {
            this.GET_CHILDRENS();                        
        },
        computed: {
            ...mapState([
                'childrens' 
            ])
        },
    }
</script>