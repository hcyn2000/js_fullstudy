<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <router-link :to="{name:'hi1',params:{name:'红尘'}}">hi 1</router-link>
    <br />
    <router-link to="/hi/hi2">hi 2</router-link>
    <br />
    <router-link to="/abc">404</router-link>
    <div>{{$route.params.name}}</div>
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
  beforeRouteEnter: (to, from, next) => {
    console.log("准备进入目标");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开目标");
    next();
  },
};
</script>

<style>
</style>