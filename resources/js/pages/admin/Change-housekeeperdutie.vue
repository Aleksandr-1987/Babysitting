<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение обязаность домработницы:</div>
    <form @submit.prevent="changeHousekeeperdutie" class="category_form">
        <div>Введите новую обязаность домработницы:</div>
        <input class="category_form_title" v-model="housekeeperdutie.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить обязаность домработницы</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-housekeeperdutie',
    methods: {
        ...mapActions([
                'CHANGE_HOUSEKEEPERDUTIE'
            ]),
        back() {
            this.$router.push({name: "Housekeeperdutie"})
        },
        changeHousekeeperdutie() {            
            this.CHANGE_HOUSEKEEPERDUTIE(this.housekeeperdutie);
            this.$router.push({name: "Housekeeperdutie"})
        }
    },
    computed: {
        ...mapState([
            'housekeeperdutie'
        ])
    },
}
</script>