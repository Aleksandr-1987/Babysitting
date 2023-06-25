<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение вида работы для домработницы:</div>
    <form @submit.prevent="changeHousekeepertypeofwork" class="category_form">
        <div>Введите новое название вида работы:</div>
        <input class="category_form_title" v-model="housekeepertypeofwork.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить вид работы</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-housekeepertypeofwork',
    methods: {
        ...mapActions([
                'CHANGE_HOUSEKEEPERTYPEOFWORK'
            ]),
        back() {
            this.$router.push({name: "Housekeepertypeofwork"})
        },
        changeHousekeepertypeofwork() {            
            this.CHANGE_HOUSEKEEPERTYPEOFWORK(this.housekeepertypeofwork);
            this.$router.push({name: "Housekeepertypeofwork"})
        }
    },
    computed: {
        ...mapState([
            'housekeepertypeofwork'
        ])
    },
}
</script>