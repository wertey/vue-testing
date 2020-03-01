<template>
    <div class="counter">
        <p class="counter__info">
            {{ counter }}
        </p>
        <ul>
            <li :class="{ active: i < 2 }"
                v-for="(star,i) in stars"
                class="stars"
            >
                {{ i + 1 }}
            </li>
        </ul>
        <div class="summary">
            2 of {{ stars }}
        </div>
        <button @click="counter++">
            Click
        </button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data() {
        return {
            counter: 0,
            stars: 5
        }
    }
}
</script>

<style scoped>
    .active {
        color: orange;
    }
</style>
