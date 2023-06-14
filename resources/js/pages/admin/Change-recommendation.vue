<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение рекомендации:</div>
    <form @submit.prevent="changeRecommendation" class="category_form">
        <div>Введите новое название рекомендации:</div>
        <input class="category_form_title" v-model="recommendation.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить рекомендацию</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-recommendation',
    methods: {
        ...mapActions([
                'CHANGE_RECOMMENDATION'
            ]),
        back() {
            this.$router.push({name: "Recommendation"})
        },
        changeRecommendation() {            
            this.CHANGE_RECOMMENDATION(this.recommendation);
            this.$router.push({name: "Recommendation"})
        }
    },
    computed: {
        ...mapState([
            'recommendation'
        ])
    },
}
</script>