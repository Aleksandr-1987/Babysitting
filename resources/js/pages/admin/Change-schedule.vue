<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение графика работы:</div>
    <form @submit.prevent="changeSchedule" class="category_form">
        <div>Введите новое название графика работы:</div>
        <input class="category_form_title" v-model="schedule.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить график</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-schedule',
    methods: {
        ...mapActions([
                'CHANGE_SCHEDULE'
            ]),
        back() {
            this.$router.push({name: "Schedule"})
        },
        changeSchedule() {            
            this.CHANGE_SCHEDULE(this.schedule);
            this.$router.push({name: "Schedule"})
        }
    },
    computed: {
        ...mapState([
            'schedule'
        ])
    },
}
</script>