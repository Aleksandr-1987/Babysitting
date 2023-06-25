<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение город:</div>
    <form @submit.prevent="changeCity" class="category_form">
        <div>Введите новое название города:</div>
        <input class="category_form_title" v-model="city.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить город</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-City',
    methods: {
        ...mapActions([
                'CHANGE_CITY'
            ]),
        back() {
            this.$router.push({name: "City"})
        },
        changeCity() {            
            this.CHANGE_CITY(this.city);
            this.$router.push({name: "City"})
        }
    },
    computed: {
        ...mapState([
            'city'
        ])
    },
}
</script>