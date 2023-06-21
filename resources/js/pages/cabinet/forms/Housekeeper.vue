<template>
    <div @click.prevent="back" class="category_change_btn">Назад</div>
    <div> Housekeeper </div>
</template>

<script>
export default {
    name: "Housekeeper",
    methods: {
        back() {
            this.$router.push({name: "Account"})
        },
    },
}
</script>

<style>
    
</style>