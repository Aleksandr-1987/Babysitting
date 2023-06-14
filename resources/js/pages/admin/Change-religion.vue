<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение религии:</div>
    <form @submit.prevent="changeReligion" class="category_form">
        <div>Введите новое название религии:</div>
        <input class="category_form_title" v-model="religion.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить религию</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-religion',
    methods: {
        ...mapActions([
                'CHANGE_RELIGION'
            ]),
        back() {
            this.$router.push({name: "Religion"})
        },
        changeReligion() {            
            this.CHANGE_RELIGION(this.religion);
            this.$router.push({name: "Religion"})
        }
    },
    computed: {
        ...mapState([
            'religion'
        ])
    },
}
</script>