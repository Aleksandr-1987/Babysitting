<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение предпочтение:</div>
    <form @submit.prevent="changeHousekeeperpreference" class="category_form">
        <div>Введите новое предпочтение:</div>
        <input class="category_form_title" v-model="housekeeperpreference.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить предпочтение</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-housekeeperpreference',
    methods: {
        ...mapActions([
                'CHANGE_HOUSEKEEPERPREFERENCE'
            ]),
        back() {
            this.$router.push({name: "Housekeeperpreference"})
        },
        changeHousekeeperpreference() {            
            this.CHANGE_HOUSEKEEPERPREFERENCE(this.housekeeperpreference);
            this.$router.push({name: "Housekeeperpreference"})
        }
    },
    computed: {
        ...mapState([
            'housekeeperpreference'
        ])
    },
}
</script>