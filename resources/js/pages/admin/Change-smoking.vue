<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение отношения к курению:</div>
    <form @submit.prevent="changeSmoking" class="category_form">
        <div>Введите новое название отношения к курению:</div>
        <input class="category_form_title" v-model="smoking.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить отношение</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-smoking',
    methods: {
        ...mapActions([
                'CHANGE_SMOKING'
            ]),
        back() {
            this.$router.push({name: "Smoking"})
        },
        changeSmoking() {            
            this.CHANGE_SMOKING(this.smoking);
            this.$router.push({name: "Smoking"})
        }
    },
    computed: {
        ...mapState([
            'smoking'
        ])
    },
}
</script>