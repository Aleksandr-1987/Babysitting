<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение диагноза:</div>
    <form @submit.prevent="changeDiagnose" class="category_form">
        <div>Введите новое название диагноза:</div>
        <input class="category_form_title" v-model="diagnose.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить диагноз</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-diagnose',
    methods: {
        ...mapActions([
                'CHANGE_DIAGNOSE'
            ]),
        back() {
            this.$router.push({name: "Diagnose"})
        },
        changeDiagnose() {            
            this.CHANGE_DIAGNOSE(this.diagnose);
            this.$router.push({name: "Diagnose"})
        }
    },
    computed: {
        ...mapState([
            'diagnose'
        ])
    },
}
</script>