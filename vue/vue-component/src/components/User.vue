<template>
  <div class="user">
    <p>{{userName}}</p>
    <!-- <button @click="handle">按钮</button> -->
    <button @click="changeBaby">新的宠物</button>
  </div>
</template>

<script>
export default {
  props: ["userName"],
  data() {
    return {
      name: "一诺",
      title: "我是子组件的title",
      baby: "大黑",
    };
  },
  methods: {
    handle() {
      //   console.log("yes");
      this.$emit("titleChange", this.title);
    },
    changeBaby() {
      this.$emit("babyChange", this.baby);
    },
  },
};
</script>

<style>
</style>