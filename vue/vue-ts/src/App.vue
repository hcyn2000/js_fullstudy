<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>欢迎来到红浪漫洗浴中心</h1>
  <div>{{ clock }}</div>
  <button @click="updateClock">上电池</button>
  <div>请选择陪你洗澡的小姐</div>
  <button
    @click="selectGirl(index)"
    v-for="(item, index) in girls"
    :key="index"
  >
    {{ index }}:{{ item }}
  </button>
  <div v-if="curGirl">宁当前选择的小姐是【{{ curGirl }}】</div>
  <button @click="check" v-if="!isCheck">确认选择</button>
  <!-- 异步组件 -->
  <Suspense v-if="isCheck">
    <template #default>
      <AsyncShow />
    </template>
    <template #fallback>
      <h2>小姐马上就来...</h2>
    </template>
  </Suspense>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  Suspense,
  onMounted,
} from "vue";
import { clock, updateClock } from "./hooks/useClock";
import AsyncShow from "./components/AsyncShow.vue";

interface DataProps {
  girls: string[];
  curGirl: string;
  selectGirl: (index: number) => void;
}
export default defineComponent({
  name: "App",
  components: { AsyncShow },
  setup() {
    // const girls = ref(["大桥", "小乔", "小红"]);
    // const curGirl = ref("");
    // const selectGirl = (index: number) => {
    //   curGirl.value = girls.value[index];
    // };
    const isCheck = ref(false);
    const data = reactive({
      girls: ["大桥", "小乔", "小红"],
      curGirl: "",
      selectGirl: (index: number) => {
        data.curGirl = data.girls[index];
        isCheck.value = false;
      },
    });

    const check = () => {
      isCheck.value = true;
    };
    const refData = toRefs(data);
    return {
      ...refData,
      clock,
      updateClock,
      isCheck,
      check,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
