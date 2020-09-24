<template>
  <div id="app">
    {{ this.$store.state.count }}
    {{ this.$store.getters.getCount }}
    <button @click="add">+1</button>
    <button @click="reduce">+2</button>
    <!-- 123 -->
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit("addCount", 1);
    },
    reduce() {
      this.$store.dispatch("getReduceCount", 2);
    },
  },
};
</script>

<style>
</style>