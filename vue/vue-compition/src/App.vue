<template>
  <!-- 也要同样的拖拽功能
  复用: mixIn   高阶组件  compition
  函数式编程: 高阶函数 = 高阶组件   curry
   -->
  <h2>拖拽2</h2>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// option api vue2.0
// compition  vue3.0

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
