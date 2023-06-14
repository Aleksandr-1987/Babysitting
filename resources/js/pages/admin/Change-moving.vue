<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение варианта переезда:</div>
    <form @submit.prevent="changeLanguage" class="category_form">
        <div>Введите новое название варианта переезда:</div>
        <input class="category_form_title" v-model="moving.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить вариант переезда</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-moving',
    methods: {
        ...mapActions([
                'CHANGE_MOVING'
            ]),
        back() {
            this.$router.push({name: "Moving"})
        },
        changeLanguage() {            
            this.CHANGE_MOVING(this.moving);
            this.$router.push({name: "Moving"})
        }
    },
    computed: {
        ...mapState([
            'moving'
        ])
    },
}
</script>