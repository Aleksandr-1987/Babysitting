<template>
    <div class="category_title">Добавление рекомендации:</div>    
    <form @submit.prevent="createCredential" class="category_form">
        <div>Введите ФИО рекомендателя:</div>
        <input class="category_form_title" v-model="credential.full_name" type="text" required placeholder="Напишите что-нибудь"> 
        <div>Укажите номер телефона рекомендателя:</div>
        <input class="category_form_title" v-model="credential.phone" type="tel" required placeholder="Напишите что-нибудь">
        <div>Введите электронный адрес рекомендателя:</div>
        <input class="category_form_title" v-model="credential.email" type="text" required placeholder="Напишите что-нибудь"> 
        <div>Укажите комментарии по рекомендации:</div>        
        <textarea v-model="credential.content" required class="category_form_title" placeholder="about"></textarea>               
        <button class="category_form_btn" type="submit">Добавить рекомендацию</button>
    </form>
    <div class="category_title">Все рекомендации:</div>       
    <ul>                
        <li v-for="post in credentials" :key="post.id" class="category_item">
            {{ post.full_name }} {{ post.phone }} {{ post.email }} {{ post.content }}
            <span class="category_change_btn" @click.prevent="change_credential(post.id, post.full_name, post.phone, post.email, post.content)">Изменить рекомендацию</span>
            <span class="category_change_btn red" @click.prevent="delete_credential(post.id)">Удалить рекомендацию</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'Credentials',
        data() {
            return {
                credential: {},
                fix_credential: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_CREDENTIALS', 'CREATE_CREDENTIAL', 'GET_CREDENTIAL', 'DELETE_CREDENTIAL', 'GET_USER'
            ]),
            createCredential() {
                this.credential.user_id = this.user.id;
                this.CREATE_CREDENTIAL(this.credential);
                this.credential.full_name = ''; this.credential.phone = ''; this.credential.email = ''; this.credential.content = '';
            },
            change_credential(id, full_name, phone, email, content) {
                this.fix_credential.id = id;
                this.fix_credential.full_name = full_name;
                this.fix_credential.phone = phone;
                this.fix_credential.email = email;
                this.fix_credential.content = content;
                this.fix_credential.user_id = this.user.id;                
                this.GET_CREDENTIAL(this.fix_credential);
                this.$router.push({name: "Change-credential"})                
            },
            delete_credential(id) {                
                this.DELETE_CREDENTIAL(id);                                
            } 
        },
        mounted() {
            this.GET_CREDENTIALS(); 
            this.GET_USER();                       
        },
        computed: {
            ...mapState([
                'credentials', 'user' 
            ])
        },
    }
</script>