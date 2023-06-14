<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение обязаность для няни:</div>
    <form @submit.prevent="changeBabysittingdutie" class="category_form">
        <div>Введите новую обязаность:</div>
        <input class="category_form_title" v-model="babysittingdutie.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить обязаность</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-babysittingdutie',
    methods: {
        ...mapActions([
                'CHANGE_BABYSITTINGDUTIE'
            ]),
        back() {
            this.$router.push({name: "Babysittingdutie"})
        },
        changeBabysittingdutie() {            
            this.CHANGE_BABYSITTINGDUTIE(this.babysittingdutie);
            this.$router.push({name: "Babysittingdutie"})
        }
    },
    computed: {
        ...mapState([
            'babysittingdutie'
        ])
    },
}
</script>