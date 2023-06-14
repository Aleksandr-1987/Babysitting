<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение периода работы:</div>
    <form @submit.prevent="changeWorkperiod" class="category_form">
        <div>Введите новый период работы:</div>
        <input class="category_form_title" v-model="workperiod.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить период работы</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-workperiod',
    methods: {
        ...mapActions([
                'CHANGE_WORKPERIOD'
            ]),
        back() {
            this.$router.push({name: "Workperiod"})
        },
        changeWorkperiod() {            
            this.CHANGE_WORKPERIOD(this.workperiod);
            this.$router.push({name: "Workperiod"})
        }
    },
    computed: {
        ...mapState([
            'workperiod'
        ])
    },
}
</script>