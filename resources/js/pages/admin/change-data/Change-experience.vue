<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение опыта работы:</div>
    <form @submit.prevent="changeExperience" class="category_form">
        <div>Введите новое название опыта работы:</div>
        <input class="category_form_title" v-model="experience.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить опыт работы</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-experience',
    methods: {
        ...mapActions([
                'CHANGE_EXPERIENCE'
            ]),
        back() {
            this.$router.push({name: "Experience"})
        },
        changeExperience() {            
            this.CHANGE_EXPERIENCE(this.experience);
            this.$router.push({name: "Experience"})
        }
    },
    computed: {
        ...mapState([
            'experience'
        ])
    },
}
</script>