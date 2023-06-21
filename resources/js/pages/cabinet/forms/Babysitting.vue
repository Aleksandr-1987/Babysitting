<template> 
    <div @click.prevent="back" class="category_change_btn">Назад</div>   
    <div class="category_title">Все языки:</div>
    <div @click.prevent="show">button</div>                    
    <div v-for="post in languages" :key="post.id" class="language_item">
        <input type="checkbox" v-bind:value="post" v-model="selectedUsers">
        {{ post.title }}                                    
    </div>
    
    <ul>
        <li v-for="user in selectedUsers">{{user}} {{user.title}}</li>
    </ul>    
</template>
<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: "Babysitting",
    data() {
        return {
            selectedUsers:[] 
        }
    },
    methods: {
        ...mapActions([
            'GET_LANGUAGES', 'GET_USER', 'GET_TOKEN', 'CREATE_USERLANGUAGES', 
        ]),
        back() {
            this.$router.push({name: "Account"})
        },
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
        this.GET_USER();
        this.GET_LANGUAGES();                   
    },
    computed: {
        ...mapState([
            'languages', 'user' 
        ])
    },
}
</script>

<style>
.language_item {
    display: inline-block;
}
    
</style>