<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение образование:</div>
    <form @submit.prevent="changeEducation" class="category_form">
        <div>Введите новое название образованиея:</div>
        <input class="category_form_title" v-model="education.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить образование</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-education',
    methods: {
        ...mapActions([
                'CHANGE_EDUCATION'
            ]),
        back() {
            this.$router.push({name: "Education"})
        },
        changeEducation() {            
            this.CHANGE_EDUCATION(this.education);
            this.$router.push({name: "Education"})
        }
    },
    computed: {
        ...mapState([
            'education'
        ])
    },
}
</script>