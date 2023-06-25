<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение почасовую оплату:</div>
    <form @submit.prevent="changeHourlypayment" class="category_form">
        <div>Введите новую почасовую оплату:</div>
        <input class="category_form_title" v-model="hourlypayment.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить почасовую оплату</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-hourlypayment',
    methods: {
        ...mapActions([
                'CHANGE_HOURLYPAYMENT'
            ]),
        back() {
            this.$router.push({name: "Hourlypayment"})
        },
        changeHourlypayment() {            
            this.CHANGE_HOURLYPAYMENT(this.hourlypayment);
            this.$router.push({name: "Hourlypayment"})
        }
    },
    computed: {
        ...mapState([
            'hourlypayment'
        ])
    },
}
</script>