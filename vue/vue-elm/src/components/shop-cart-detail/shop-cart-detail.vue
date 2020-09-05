<template>
  <div class="shop-cart-detail" @click.stop="hide">
    <div class="mask"></div>
    <div class="constainer">
        <div class="list-header">
            <div class="title">购物车</div>
            <div class="empty">清空</div>
        </div>
        <!-- 菜品 -->
        <div class="list-content">
          <div class="side-container">
              <cube-scroll-nav-panel
                v-for="item in data"
                :key="item.name"
                :label="item.name"
                :title="item.name">
                <ul>
                  <li v-for="(food, index) in item.foods" :key="index">
                    <div>
                      <img :src="food.icon">
                      <p>{{food.name}}</p>
                    </div>
                  </li>
                </ul>
              </cube-scroll-nav-panel>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    selectFoods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    hide() {
      this.$emit("hide", false);
      console.log(this.selectFoods);
    },
  },
};
</script>

<style lang="stylus" scoped >
@import '../../common/stylus/variable.styl';

.shop-cart-detail{
  position: fixed;
  top 0
  left 0
  right 0
  z-index: 1;
  bottom: 48px;
  pointer-events: auto;
  // background-color: skyblue;
}
.mask
  background-color: #07111b;
  opacity: .6;
  overflow: hidden;
  pointer-events: auto;
  position absolute
  width 100%
  height 100%
.constainer {
  position absolute
  top 0
  left 0
  box-sizing: border-box;
  pointer-events: auto;
  width: 100%;
  height 100%
  // transform: translate(-100%,-100%);
}
.list-header 
  display flex
  justify-content space-between
  background: $color-background-ssss
  height: 40px;
  line-height: 40px;
  padding: 0 18px;
  .title
    color: #333;
    float: left;
    font-size: 14px;
  .empty
    color: #00a0dc;
    float: right;
    font-size: 12px;
</style>