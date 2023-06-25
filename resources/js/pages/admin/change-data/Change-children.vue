<template>
    <div @click.prevent="back()" class="category_change_btn">Назад</div>
    <div class="category_title">Изменение количества детей для работы:</div>
    <form @submit.prevent="changeChildren" class="category_form">
        <div>Введите новое количества детей:</div>
        <input class="category_form_title" v-model="children.title" type="text" required placeholder="Напишите что-нибудь">                
        <button class="category_form_btn" type="submit">Изменить количество детей</button>
    </form>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: 'Change-children',
    methods: {
        ...mapActions([
                'CHANGE_CHILDREN'
            ]),
        back() {
            this.$router.push({name: "Children"})
        },
        changeChildren() {            
            this.CHANGE_CHILDREN(this.children);
            this.$router.push({name: "Children"})
        }
    },
    computed: {
        ...mapState([
            'children'
        ])
    },
}
</script>