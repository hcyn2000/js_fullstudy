<template>
  <div class="HomeChild">
    <p>首页的子组件</p>
    <hr />
    <h3>{{count}}</h3>
    <div class="btn">
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
import store from "@/vuex/store.js";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "Hello world",
    };
  },
  store,
  // methods: {
  //   add() {
  //     // this.$store.state.count++;
  //     this.$store.commit("add", 10);
  //   },
  //   reduce() {
  //     this.$store.commit("reduce");
  //   },
  // },
  // methods: mapMutations(["add(10)", "reduce"]),
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction"]),
  },

  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  // },
  // computed: mapState({
  //   count: (state) => state.count,
  // }),
  // computed: mapState(["count"]),
  computed: {
    ...mapState(["count"]),
    ...mapGetters9(["count"]),
  },
};
</script>

<style>
</style>