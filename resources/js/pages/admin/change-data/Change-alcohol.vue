<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение отношение к алкоголю:</div>
    <form @submit.prevent="changeAlcohol" class="category_form">
        <div>Введите новое название отношения к алкоголю:</div>
        <input class="category_form_title" v-model="alcohol.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить отношение</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-alcohol',
    methods: {
        ...mapActions([
                'CHANGE_ALCOHOL'
            ]),
        back() {
            this.$router.push({name: "Languages"})
        },
        changeAlcohol() {            
            this.CHANGE_ALCOHOL(this.alcohol);
            this.$router.push({name: "Alcohol"})
        }
    },
    computed: {
        ...mapState([
            'alcohol'
        ])
    },
}
</script>