<template>
<!-- 头部导航 -->
  <div class="tab">
    <router-link tag="div" to="/recommend" class="tab-item">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" to="/singer" class="tab-item">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" to="/rank" class="tab-item">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" to="/search" class="tab-item">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl';

.tab {
  display: flex;
  height: px2rem(88);
  line-height: px2rem(88);
  font-size: 14px;

  &-item {
    flex: 1;
    text-align: center;

    .tab-link {
      padding-bottom: 5px;
      color: hsla(0, 0, 100%, 0.5);
    }

    &.active {
      .tab-link {
        color: #ea2448;
        border-bottom: 2px solid #ea2448;
      }
    }
  }
}
</style>