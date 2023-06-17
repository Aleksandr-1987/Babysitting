<template> 
    <Header></Header>   
    <component :is="layout">
        <router-view/>
    </component>        
</template>

<script>
import Admin from './pages/interface/Admin.vue';
import User from './pages/interface/User.vue';
import Cabinet from './pages/interface/Cabinet.vue';
import Header from './pages/layouts/Header.vue';
export default {
    name: "App",
    computed: {
        layout(){
            return (this.$route.meta.layout || 'User')
        }
    },
    components: {
        Admin, User, Cabinet, Header
    }
}
</script>
