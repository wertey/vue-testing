<template>
    <div class="header">
        <button class="btn" v-show="loggedIn">Logout</button>
    </div>
</template>

<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
                loggedIn: false
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
