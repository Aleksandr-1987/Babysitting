<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение умения для сиделки:</div>
    <form @submit.prevent="changeNursingskill" class="category_form">
        <div>Введите новое умение для сиделки:</div>
        <input class="category_form_title" v-model="nursingskill.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить умение</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-nursingskill',
    methods: {
        ...mapActions([
                'CHANGE_NURSINGSKILL'
            ]),
        back() {
            this.$router.push({name: "Nursingskill"})
        },
        changeNursingskill() {            
            this.CHANGE_NURSINGSKILL(this.nursingskill);
            this.$router.push({name: "Nursingskill"})
        }
    },
    computed: {
        ...mapState([
            'nursingskill'
        ])
    },
}
</script>