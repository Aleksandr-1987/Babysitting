<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение помесячной оплаты:</div>
    <form @submit.prevent="changeMonthlypayment" class="category_form">
        <div>Введите новое название помесячной оплаты:</div>
        <input class="category_form_title" v-model="monthlypayment.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить помесячную оплату</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-monthlypayment',
    methods: {
        ...mapActions([
                'CHANGE_MONTHLYPAYMENT'
            ]),
        back() {
            this.$router.push({name: "Monthlypayment"})
        },
        changeMonthlypayment() {            
            this.CHANGE_MONTHLYPAYMENT(this.monthlypayment);
            this.$router.push({name: "Monthlypayment"})
        }
    },
    computed: {
        ...mapState([
            'monthlypayment'
        ])
    },
}
</script>