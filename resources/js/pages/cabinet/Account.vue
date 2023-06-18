<template>
    <div class="category_title">Все языки:</div>
    <div @click.prevent="show">button</div>       
    <ul>                    
        <li v-for="post in languages" :key="post.id" class="category_item">
            <input type="checkbox" v-bind:value="post" v-model="selectedUsers">
            {{ post.title }}                                    
        </li>         
    </ul>
    <ul>
        <li v-for="user in selectedUsers">{{user}} {{user.title}}</li>
    </ul>
    <div v-if="!photo">Добавьте изображение</div>
    <img v-else :src="photo" alt=""> 
    
    
</template>
<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: "Account",
    data() {
        return {
            selectedUsers:[] 
        }
    },
    methods: {
        ...mapActions([
            'GET_LANGUAGES', 'GET_USER', 'GET_TOKEN', 'CREATE_USERLANGUAGES', 'GET_PHOTO', 'GET_ADMINID'
        ]),
        show() {
            let user_language = {};
            let result = [];
            this.selectedUsers.forEach((element) => {                               
                user_language.user_id = this.user.id;
                user_language.language_id = element.id;
                result.push(user_language);
                user_language = {};                                               
            })          
            
            //console.log(result.length);
            this.CREATE_USERLANGUAGES([result, result.length]);
        }
    },
    mounted() {
        this.GET_TOKEN();
        this.GET_PHOTO();
        this.GET_USER();
        this.GET_LANGUAGES(); 
        this.GET_ADMINID();           
    },
    computed: {
        ...mapState([
            'languages', 'user', 'photo' 
        ])
    },
}
</script>
<style>
    
</style>