<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение вида работы для няни:</div>
    <form @submit.prevent="changeTypeofwork" class="category_form">
        <div>Введите новое название вида работы:</div>
        <input class="category_form_title" v-model="typeofwork.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить вид работы</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-typeofwork',
    methods: {
        ...mapActions([
                'CHANGE_TYPEOFWORK'
            ]),
        back() {
            this.$router.push({name: "Typeofwork"})
        },
        changeTypeofwork() {            
            this.CHANGE_TYPEOFWORK(this.typeofwork);
            this.$router.push({name: "Typeofwork"})
        }
    },
    computed: {
        ...mapState([
            'typeofwork'
        ])
    },
}
</script>