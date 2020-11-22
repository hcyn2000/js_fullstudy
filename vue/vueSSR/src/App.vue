<template>
  <div id="app">
    <Com></Com>
  </div>
</template>

<script>
import Com from "./Com.vue";
export default {
  components: {
    Com,
  },
  beforeCreate() {
    // node 里面输出的
    console.log(111);
  },
  mounted() {
    console.log(222);
  },
};
</script>

<style>
</style>