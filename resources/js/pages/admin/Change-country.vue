<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение страны:</div>
    <form @submit.prevent="changeCountry" class="category_form">
        <div>Введите новое название страны:</div>
        <input class="category_form_title" v-model="country.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить страну</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-country',
    methods: {
        ...mapActions([
                'CHANGE_COUNTRY'
            ]),
        back() {
            this.$router.push({name: "Country"})
        },
        changeCountry() {            
            this.CHANGE_COUNTRY(this.country);
            this.$router.push({name: "Country"})
        }
    },
    computed: {
        ...mapState([
            'country'
        ])
    },
}
</script>