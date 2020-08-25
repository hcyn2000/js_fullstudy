<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <router-link :to="{name:'hi1',params:{name:'红尘'}}">hi 1</router-link>
    <br />
    <router-link to="/hi/hi2">hi 2</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Hi",
  data() {
    return {
      msg: "Hi, I am HHH",
    };
  },
};
</script>

<style>
</style>