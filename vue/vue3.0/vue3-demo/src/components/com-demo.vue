<!-- fragment -->
<template>
  <ul>
    <FragmentDemo :data="[1, 2, 3, 4, 5, 6, 7]" />
  </ul>
</template>

<script>
import FragmentDemo from "./fragment.vue";
export default {
  components: {
    FragmentDemo,
  },
};
</script>

<style>
</style>
