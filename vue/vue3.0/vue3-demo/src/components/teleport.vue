<template>
  <div class="confirm-modal">
    <button @click="isDpen = true">打开</button>
    <Teleport to="#foot-container">
      <div v-if="isDpen">
        <p>底部信息</p>
        <button @click="isDpen = false">取消</button>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isDpen = ref(false);

    return { isDpen };
  },
};
</script>

<style>
</style>