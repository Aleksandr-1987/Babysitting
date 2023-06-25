<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение языка:</div>
    <form @submit.prevent="changeLanguage" class="category_form">
        <div>Введите новое название языка:</div>
        <input class="category_form_title" v-model="language.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить язык</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-language',
    methods: {
        ...mapActions([
                'CHANGE_LANGUAGE'
            ]),
        back() {
            this.$router.push({name: "Languages"})
        },
        changeLanguage() {            
            this.CHANGE_LANGUAGE(this.language);
            this.$router.push({name: "Languages"})
        }
    },
    computed: {
        ...mapState([
            'language'
        ])
    },
}
</script>