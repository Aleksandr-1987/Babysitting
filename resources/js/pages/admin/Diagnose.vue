<template>
    <div class="category_title">Добавление диагноза:</div>    
    <form @submit.prevent="createDiagnose" class="category_form">
        <div>Введите название диагноза:</div>
        <input class="category_form_title" v-model="diagnose.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Добавить диагноз</button>
    </form>
    <div class="category_title">Все диагнозы:</div>       
    <ul>                
        <li v-for="post in diagnoses" :key="post.id" class="category_item">
            {{ post.title }} 
            <span class="category_change_btn" @click.prevent="change_diagnose(post.id, post.title)">Изменить диагноз</span>
            <span class="category_change_btn red" @click.prevent="delete_diagnose(post.id)">Удалить диагноз</span>                
        </li>   
    </ul>    
</template>

<script>
import {mapActions, mapState} from 'vuex';
    export default {
        name: 'Diagnose',
        data() {
            return {
                diagnose: {},
                fix_diagnose: {},                
            }
        },
        methods: {
            ...mapActions([
                'GET_DIAGNOSES', 'CREATE_DIAGNOSE', 'GET_DIAGNOSE', 'DELETE_DIAGNOSE'
            ]),
            createDiagnose() {
                this.CREATE_DIAGNOSE(this.diagnose);
                this.diagnose.title = '';
            },
            change_diagnose(id, title) {
                this.fix_diagnose.id = id;
                this.fix_diagnose.title = title;
                this.GET_DIAGNOSE(this.fix_diagnose);
                this.$router.push({name: "Change-diagnose"})                
            },
            delete_diagnose(id) {                
                this.DELETE_DIAGNOSE(id);                                
            } 
        },
        mounted() {
            this.GET_DIAGNOSES();                        
        },
        computed: {
            ...mapState([
                'diagnoses' 
            ])
        },
    }
</script>
