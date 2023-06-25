<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение вида работы для сиделки:</div>
    <form @submit.prevent="changeNursetypeofwork" class="category_form">
        <div>Введите новое название вида работы:</div>
        <input class="category_form_title" v-model="nursetypeofwork.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить вида работы</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-nursetypeofwork',
    methods: {
        ...mapActions([
                'CHANGE_NURSETYPEOFWORK'
            ]),
        back() {
            this.$router.push({name: "Nursetypeofwork"})
        },
        changeNursetypeofwork() {            
            this.CHANGE_NURSETYPEOFWORK(this.nursetypeofwork);
            this.$router.push({name: "Nursetypeofwork"})
        }
    },
    computed: {
        ...mapState([
            'nursetypeofwork'
        ])
    },
}
</script>