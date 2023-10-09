<template>
  <!-- <router-link to="/">Go to Home</router-link>｜-->
  <HeaderBar></HeaderBar>
  <router-view/>
  <HomeView msg="Welcome to Your Vue.js App"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderBar from './components/HeaderBar.vue';


export default {
    name: 'App',
    components: { HeaderBar }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
