<template>
    <div class="counter">
        <p class="counter__info">
            {{ counter }}
        </p>
        <button @click="counter++">Click</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data() {
        return {
            counter: 0
        }
    }
}
</script>

<style scoped>

</style>
