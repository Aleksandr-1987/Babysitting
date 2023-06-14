<template>    
    <div class="category_title">Изменение рекомендации:</div>
    <form @submit.prevent="changeCredential" class="category_form">
        <div>Введите ФИО рекомендателя:</div>
        <input class="category_form_title" v-model="credential.full_name" type="text" required placeholder="Напишите что-нибудь"> 
        <div>Укажите номер телефона рекомендателя:</div>
        <input class="category_form_title" v-model="credential.phone" type="tel" required placeholder="Напишите что-нибудь">
        <div>Введите электронный адрес рекомендателя:</div>
        <input class="category_form_title" v-model="credential.email" type="text" required placeholder="Напишите что-нибудь"> 
        <div>Укажите комментарии по рекомендации:</div>        
        <textarea v-model="credential.content" required class="category_form_title" placeholder="about"></textarea>                
        <button class="category_form_btn" type="submit">Изменить рекомендацию</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-credential',
    methods: {
        ...mapActions([
            'CHANGE_CREDENTIAL'
        ]),        
        changeCredential() {            
            this.CHANGE_CREDENTIAL(this.credential);
            this.$router.push({name: "Credentials"})
        }
    },
    computed: {
        ...mapState([
            'credential'
        ])
    },
}
</script>