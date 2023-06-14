<template>
    <div>home </div>   
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: "Home",
    methods: {
        ...mapActions([
            'GET_TOKEN'
        ]),
    },
    mounted() {
        this.GET_TOKEN();                    
    },
}
</script>

