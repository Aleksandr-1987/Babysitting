<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение варианта работы:</div>
    <form @submit.prevent="changeJoboption" class="category_form">
        <div>Введите новое название варианта работы:</div>
        <input class="category_form_title" v-model="joboption.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить вариант работы</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-joboption',
    methods: {
        ...mapActions([
                'CHANGE_JOBOPTION'
            ]),
        back() {
            this.$router.push({name: "Joboption"})
        },
        changeJoboption() {            
            this.CHANGE_JOBOPTION(this.joboption);
            this.$router.push({name: "Joboption"})
        }
    },
    computed: {
        ...mapState([
            'joboption'
        ])
    },
}
</script>