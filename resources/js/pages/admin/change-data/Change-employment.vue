<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение вид занятости:</div>
    <form @submit.prevent="changeEmployment" class="category_form">
        <div>Введите новое название вида занятости:</div>
        <input class="category_form_title" v-model="employment.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить вид занятости</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-employment',
    methods: {
        ...mapActions([
                'CHANGE_EMPLOYMENT'
            ]),
        back() {
            this.$router.push({name: "Employment"})
        },
        changeEmployment() {            
            this.CHANGE_EMPLOYMENT(this.employment);
            this.$router.push({name: "Employment"})
        }
    },
    computed: {
        ...mapState([
            'employment'
        ])
    },
}
</script>