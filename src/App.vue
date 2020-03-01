<template>
  <div id="app">
    <Title></Title>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <AppHeader></AppHeader>
    <Counter></Counter>
    <ButtonTemplate></ButtonTemplate>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue'
import Counter from './components/Counter.vue'
import Title from './components/TitleApp.vue'
import ButtonTemplate from './components/ButtonTemplate.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppHeader,
    Counter,
    Title,
    ButtonTemplate,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
