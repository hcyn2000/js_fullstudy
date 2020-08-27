<template>
  <div class="watch">
    <span>{{temp}}°</span>
    <span>{{suggest}}</span>
    <br />
    <button @click="add">add</button>
    <button @click="reduce">reduce</button>
  </div>
</template>

<script>
// mixins
let addLog = {
  updated: function () {
    console.log("数据发生变化了，此时温度为" + this.temp);
  },
};

// extends
let ext = {
  created() {
    console.log("我是被扩展出来的created");
  },
  methods: {
    adds() {
      console.log("我是被扩展出来的add");
    },
  },
};

export default {
  data() {
    return {
      temp: 25,
      suggest: "穿短袖",
    };
  },
  methods: {
    add() {
      this.temp += 3;
    },
    reduce() {
      this.temp -= 3;
    },
  },
  watch: {
    temp: function (newVal, oldVal) {
      console.log(newVal, oldVal);
      if (newVal >= 20) {
        this.suggest = "穿短袖";
      } else if (newVal < 20 && newVal >= 0) {
        this.suggest = "穿夹克";
      } else if (newVal < 0) {
        this.suggest = "穿羽绒服";
      }
    },
  },
  mixins: [addLog],
  extends: ext,
};
</script>

<style>
</style>