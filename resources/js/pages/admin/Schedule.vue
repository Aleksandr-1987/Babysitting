<template>
    <div class="category_title">Добавление графика работы:</div>    
    <form @submit.prevent="createSchedule" class="category_form">
        <div>Введите графика работы:</div>
        <input class="category_form_title" v-model="schedule.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Добавить график работы</button>
    </form>
    <div class="category_title">Все графики работы:</div>       
    <ul>                
        <li v-for="post in schedules" :key="post.id" class="category_item">
            {{ post.title }} 
            <span class="category_change_btn" @click.prevent="change_schedule(post.id, post.title)">Изменить график</span>
            <span class="category_change_btn red" @click.prevent="delete_schedule(post.id)">Удалить график</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'Schedule',
        data() {
            return {
                schedule: {},
                fix_schedule: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_SCHEDULES', 'CREATE_SCHEDULE', 'GET_SCHEDULE', 'DELETE_SCHEDULE'
            ]),
            createSchedule() {
                this.CREATE_SCHEDULE(this.schedule);
                this.schedule.title = '';
            },
            change_schedule(id, title) {
                this.fix_schedule.id = id;
                this.fix_schedule.title = title;
                this.GET_SCHEDULE(this.fix_schedule);
                this.$router.push({name: "Change-schedule"})                
            },
            delete_schedule(id) {                
                this.DELETE_SCHEDULE(id);                                
            } 
        },
        mounted() {
            this.GET_SCHEDULES();                        
        },
        computed: {
            ...mapState([
                'schedules' 
            ])
        },
    }
</script>
