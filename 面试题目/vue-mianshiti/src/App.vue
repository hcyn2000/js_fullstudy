<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <keep-alive>
      <HelloWorld @getData="getDataFromSon" msg="Welcome to Your Vue.js App" />
    </keep-alive>

    <input type="text" :value="value" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      value: "123",
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    getDataFromSon(data) {
      console.log(data);
    },
  },
  activated() {
    // 命中缓存
  },
  deactivated() {},
  beforeCreate() {
    console.log("App beforeCreate");
  },
  created() {
    console.log("App created");
  },
  beforeMount() {
    console.log("App beforeMount");
  },
  mounted() {
    console.log("App mounted");
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
