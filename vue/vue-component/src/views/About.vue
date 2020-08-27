<template>
  <div class="about">
    <User :userName="name" @babyChange="getBabyName"></User>
    <Animal :babyName="babyName"></Animal>
  </div>
</template>

<script>
import User from "@/components/User";
import Animal from "@/components/Animal";
export default {
  data() {
    return {
      name: "一诺",
      babyName: undefined,
    };
  },
  components: {
    User,
    Animal,
  },
  methods: {
    getBabyName(e) {
      this.babyName = e;
    },
  },
};
</script>

<style>
.about {
  color: skyblue;
}
</style>