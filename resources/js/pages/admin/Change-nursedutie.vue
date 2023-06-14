<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение обязаность сиделки:</div>
    <form @submit.prevent="changeNursedutie" class="category_form">
        <div>Введите новое название обязаности сиделки:</div>
        <input class="category_form_title" v-model="nursedutie.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить обязаность сиделки</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-nursedutie',
    methods: {
        ...mapActions([
                'CHANGE_NURSEDUTIE'
            ]),
        back() {
            this.$router.push({name: "Nursedutie"})
        },
        changeNursedutie() {            
            this.CHANGE_NURSEDUTIE(this.nursedutie);
            this.$router.push({name: "Nursedutie"})
        }
    },
    computed: {
        ...mapState([
            'nursedutie'
        ])
    },
}
</script>