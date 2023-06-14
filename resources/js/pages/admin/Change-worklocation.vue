<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение местоположения работы для сиделки:</div>
    <form @submit.prevent="changeWorklocation" class="category_form">
        <div>Введите новое местоположение работы для сиделки:</div>
        <input class="category_form_title" v-model="worklocation.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить местоположение</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-worklocation',
    methods: {
        ...mapActions([
                'CHANGE_WORKLOCATION'
            ]),
        back() {
            this.$router.push({name: "Worklocation"})
        },
        changeWorklocation() {            
            this.CHANGE_WORKLOCATION(this.worklocation);
            this.$router.push({name: "Worklocation"})
        }
    },
    computed: {
        ...mapState([
            'worklocation'
        ])
    },
}
</script>