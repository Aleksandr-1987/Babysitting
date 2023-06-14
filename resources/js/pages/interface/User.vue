<template>    
    <Header></Header>
    <router-view/>
</template>

<script>
import Header from '../layouts/Header.vue'
export default {
    name: "User",
    components: {
        Header
    },        
}
</script>

<style>
.user_btn {
    display: inline-block;
    margin: 0 20px;
    cursor: pointer;    
}
.user_btn:hover {
    color: green;
}

.login_title {
    text-align: center;
    font-size: 25px;
}
.login_form {
    display: flex;
    flex-direction: column;    
    width: 400px;
    margin: 0 auto;
    padding: 5px;
    border: 2px solid lightskyblue;
    border-radius: 5px;
}
.login_form_item {    
    margin-bottom: 5px;
}
.login_form_btn {
    cursor: pointer;
}
    
</style>