<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение возрастную групу:</div>
    <form @submit.prevent="changeAgegroup" class="category_form">
        <div>Введите новое название возрастной групы:</div>
        <input class="category_form_title" v-model="agegroup.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить возрастную групу</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-agegroup',
    methods: {
        ...mapActions([
                'CHANGE_AGEGROUP'
            ]),
        back() {
            this.$router.push({name: "Agegroup"})
        },
        changeAgegroup() {            
            this.CHANGE_AGEGROUP(this.agegroup);
            this.$router.push({name: "Agegroup"})
        }
    },
    computed: {
        ...mapState([
            'agegroup'
        ])
    },
}
</script>