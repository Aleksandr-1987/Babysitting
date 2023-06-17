<template>      
    <div class="cabinet">        
        <div class="cabinet_sidebar">
            <div class="cabinet_sidebar_title">{{ user.name }}</div>
            <div @click.prevent="account" class="admin_sidebar_item">Учетная запись</div>
            <div @click.prevent="mailbox" class="admin_sidebar_item">Почтовый ящик</div>            
            <div @click.prevent="vacancies" class="admin_sidebar_item">Мои вакансии</div>
            <div @click.prevent="credentials" class="admin_sidebar_item">Мои рекомендации</div>
            <div @click.prevent="edit" class="admin_sidebar_item">Редактировать профиль</div>
            <div @click.prevent="myphoto" class="admin_sidebar_item">Моя фотография</div>
            <div @click.prevent="logout" class="admin_sidebar_item">Выйти</div>
        </div>
        <div class="cabinet_main">
            <div @click.prevent="back()" class="category_change_btn">Назад</div>
            <router-view/>        
        </div>                
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
export default {
    name: "Cabinet",        
    methods: {
        ...mapActions([
            'GET_USER', 'LOGOUT_USER' 
        ]),
        back() {
            this.$router.push({name: "Home"})
        },
        account() {
            this.$router.push({name: "Account"})
        },
        mailbox() {
            this.$router.push({name: "Mailbox"})
        }, 
        myphoto() {
            this.$router.push({name: "Myphoto"})
        },
        edit() {
            this.$router.push({name: "Edit"})
        },
        vacancies() {
            this.$router.push({name: "Vacancies"})
        },
        credentials() {
            this.$router.push({name: "Credentials"})
        },
        logout() {
            this.LOGOUT_USER()
        },       
    },
    mounted() {        
        this.GET_USER();                    
    },
    computed: {
        ...mapState([
            'user' 
        ])
    },
}
</script>
<style>
.cabinet {
    height: calc(100% - 18px);    
    display: flex;
}
.cabinet_sidebar {    
    width: 20%;    
    background-color: lightgoldenrodyellow;
    overflow-y: auto;        
}
.cabinet_sidebar_title {
    font-size: 25px;    
    text-align: center;
    background-color: lightgreen;
    border-bottom: 1px solid rebeccapurple;
    padding: 10px 0;
    margin-bottom: 15px;    
}

.cabinet_main {
    width: 80%;
    overflow-y: auto;
}
    
</style>