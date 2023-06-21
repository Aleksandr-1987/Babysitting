<template>
    <div @click.prevent="back" class="category_change_btn">Назад</div>
    <div> nurse </div>
</template>

<script>
export default {
    name: "Nurse",
    methods: {
        back() {
            this.$router.push({name: "Account"})
        },
    },
}
</script>

<style>
    
</style>