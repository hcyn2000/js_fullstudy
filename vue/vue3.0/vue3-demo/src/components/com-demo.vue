<!-- fragment -->
<template>
  <ul>
    <FragmentDemo :data="[1, 2, 3, 4, 5, 6, 7]" />
    <hr />
    <TeleportDemo />
    <hr />
    <!-- <suspense-demo></suspense-demo> -->
    <Suspense>
      <template #default> <AsyncComponent :timeout="3000" /> </template>
      <template #fallback> <Loading /> </template>
    </Suspense>
  </ul>
</template>

<script>
import FragmentDemo from "./fragment.vue";
import TeleportDemo from "./teleport.vue";
import AsyncComponent from "./suspense.vue";
import Loading from "./loading.vue";
export default {
  components: {
    FragmentDemo,
    TeleportDemo,
    AsyncComponent,
    Loading,
  },
};
</script>

<style>
</style>
