// root component
<template>
  <div id="app">
    <menu1 />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" />
    <aaa msg="Welcome to Your Vue.js2 App" />
    <bb2 />-->
    <router-view></router-view>
  </div>
</template>

<script>
import menu1 from './view/menu1';
export default {
  components: {
    menu1
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
