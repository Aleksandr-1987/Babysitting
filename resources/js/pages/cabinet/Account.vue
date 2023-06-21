<template>
    <div @click.prevent="babysitting" class="admin_sidebar_item">Анкета для няни </div>
    <div @click.prevent="nurse" class="admin_sidebar_item">Анкета для сиделки </div>
    <div @click.prevent="housekeeper" class="admin_sidebar_item">Анкета для домработницы </div>
    
    <div v-if="!photo">Добавьте изображение</div>
    <img v-else :src="photo" alt="">    
</template>
<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: "Account",    
    methods: {
        ...mapActions([
            'GET_USER', 'GET_TOKEN', 'GET_PHOTO', 'GET_ADMINID'
        ]),
        babysitting() {
            this.$router.push({name: "Babysitting"})
        },
        nurse() {
            this.$router.push({name: "Nurse"})
        },
        housekeeper() {
            this.$router.push({name: "Housekeeper"})
        },       
    },
    mounted() {
        this.GET_TOKEN();
        this.GET_PHOTO();
        this.GET_USER();         
        this.GET_ADMINID();           
    },
    computed: {
        ...mapState([
            'user', 'photo' 
        ])
    },
}
</script>
<style>
    
</style>