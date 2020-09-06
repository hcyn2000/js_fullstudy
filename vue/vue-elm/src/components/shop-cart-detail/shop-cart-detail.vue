<template>
  <div class="shop-cart-detail" @click.stop="hide">
    <div class="mask"></div>
    <div class="constainer">
        <div class="list-header">
            <div class="title">购物车</div>
            <div class="empty" @click="showBtn">清空</div>
        </div>
        <!-- 菜品 -->
        <div class="list-content">
            <cube-scroll-nav-panel>
              <ul>
                <li v-for="(selectFoods, index) in selectFoods" :key="index" class="food">
                  <span class="name">{{selectFoods.name}}</span>
                  <div class="price">￥{{selectFoods.count * selectFoods.price}}</div>
                  <cart-control class="cart-control-wrapper"></cart-control>
                </li>
              </ul>
            </cube-scroll-nav-panel>
        </div>
    </div>
  </div>
</template>

<script>
import CartControl from "@/components/cart-control/cart-control";

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
    showBtn() {
      this.$createDialog({
        type: 'confirm',
        content: '清空购物车？',
        confirmBtn: {
          text: '确定',
          confirm: function(e){
            console.log('123');
          }
        },
        cancelBtn: {
          text: '取消',
        },
      }).show()
    },
    // empty() {

    // }
  },
  components: {
    CartControl
  },
  computed: {
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
.list-content
  background: #fff;
  max-height: 217px;
  overflow: hidden;
  padding: 0 18px;
  position: relative;
  z-index: 1;
  .food
    box-sizing: border-box;
    padding: 12px 0;
    position: relative;
    .name
      color: #333;
      font-size: 14px;
      line-height: 24px;
    .price
      bottom: 12px;
      color: #f01414;
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
      position: absolute;
      right: 90px;
    .cart-control-wrapper
      bottom: 6px;
      position: absolute;
      right: 0;
</style>