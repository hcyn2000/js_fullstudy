<template>
<h1>{{ state.count }}*2 = {{ double }}</h1>
<h2>{{ num }}</h2>
<button @click="add">累加</button>
</template>

<script>
// 提高treeShaking
import {
  computed,
  reactive,
  ref,
  onMounted
} from "vue";
export default {
  setup() {
    // hook函数
    const {
      state,
      double
    } = useCounter(1);
    // const state = reactive({
    //   count: 1,
    // });
    const num = ref(2);

    function add() {
      num.value++;
      state.count++;
    }
    // const double = computed(() => state.count * 2);

    onMounted(() => {
      console.log("mounted");
    });

    return {
      state,
      add,
      double,
      num,
    };
  },
};

function useCounter(count, n) {
  const state = reactive({
    count,
  });
  const double = computed(() => state.count * 2);
  return {
    state,
    double,
  };
}
</script>

<style>
</style>
