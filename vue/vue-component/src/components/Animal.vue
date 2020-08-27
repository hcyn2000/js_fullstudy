<template>
  <div class="animal">
    <p>的宠物:{{babyName}}</p>
  </div>
</template>

<script>
export default {
  props: {
    babyName: {
      type: String,
      default: "大白",
    },
  },
  data() {
    return {
      baby: "大白",
    };
  },
};
</script>

<style>
</style>