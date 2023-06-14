<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение семейного положения:</div>
    <form @submit.prevent="changeStatus" class="category_form">
        <div>Введите новое семейного положения:</div>
        <input class="category_form_title" v-model="status.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить положение</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-status',
    methods: {
        ...mapActions([
                'CHANGE_STATUS'
            ]),
        back() {
            this.$router.push({name: "Status"})
        },
        changeStatus() {            
            this.CHANGE_STATUS(this.status);
            this.$router.push({name: "Status"})
        }
    },
    computed: {
        ...mapState([
            'status'
        ])
    },
}
</script>