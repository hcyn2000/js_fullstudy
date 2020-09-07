<template>
  <div class="shop-cart-detail" @click.stop="hide">
    <div class="mask"></div>
    <div class="constainer">
      <div class="list-header">
        <div class="title">购物车</div>
        <div class="empty" @click="showBtn">清空</div>
      </div>
      <!-- 菜品 -->
        <cube-scroll ref="scroll" class="scroll-list-wrap">
          <ul>
            <li class="food" v-for="(selectFood, index) in selectFoods" :key="index">
              <span class="name">{{selectFood.name}}</span>
              <div class="price">￥{{selectFood.count * selectFood.price}}</div>
              <cart-control :food="selectFood" class="cart-control-wrapper"></cart-control>
            </li>
          </ul>
        </cube-scroll>
      <!-- <div class="list-content">
        <ul>
          <li class="food" v-for="(selectFood, index) in selectFoods" :key="index">
            <span class="name">{{selectFood.name}}</span>
            <div class="price">￥{{selectFood.count * selectFood.price}}</div>
            <cart-control :food="selectFood" class="cart-control-wrapper"></cart-control>
          </li>
        </ul>
      </div>-->
    </div>
  </div>
</template>

<script>
import CartControl from "@/components/cart-control/cart-control";

export default {
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      scrollbar: true,
      startY: 0,
    };
  },
  computed: {
    options() {
      return {
        scrollbar: this.scrollbarObj,
        startY: this.startY,
      };
    },
    scrollbarObj: function () {
      return this.scrollbar ? { fade: this.scrollbarFade } : false;
    },
  },
  methods: {
    hide() {
      this.$emit("hide", false);
      // console.log(this.selectFoods);
    },
    showBtn() {
      let that = this;
      this.$createDialog({
        type: "confirm",
        content: "清空购物车？",
        confirmBtn: {
          text: "确定",
        },
        cancelBtn: {
          text: "取消",
        },
        onConfirm: () => {
          this.selectFoods.forEach((food) => {
            food.count = 0;
          });
          console.log(this.selectFoods);
        },
      }).show();
    },
    // empty() {

    // }
  },
  components: {
    CartControl,
  },
  computed: {},
};
</script>

<style lang="stylus" scoped >
@import '../../common/stylus/variable.styl';

.shop-cart-detail {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  bottom: 48px;
  pointer-events: auto;
  // background-color: skyblue;
}

.mask {
  z-index: -1;
  background-color: #07111b;
  opacity: 0.6;
  overflow: hidden;
  pointer-events: auto;
  position: absolute;
  width: 100%;
  height: 100%;
}

.constainer {
  position: absolute;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  pointer-events: auto;
  width: 100%;
  // transform: translate(-100%,-100%);
}

.list-header {
  display: flex;
  justify-content: space-between;
  background: $color-background-ssss;
  height: 40px;
  line-height: 40px;
  padding: 0 18px;

  .title {
    color: #333;
    float: left;
    font-size: 14px;
  }

  .empty {
    color: #00a0dc;
    float: right;
    font-size: 12px;
  }
}

.scroll-list-wrap {
  padding: 0 18px;
  max-height: 217px;
  overflow hidden
  background-color: #fff;

  .food {
    box-sizing: border-box;
    padding: 12px 0;
    position: relative;

    .name {
      color: #333;
      font-size: 14px;
      line-height: 24px;
    }

    .price {
      position: absolute;
      right: 90px;
      bottom: 12px;
      color: #f01414;
      font-size: 14px;
      font-weight: 700;
      line-height: 24px;
    }

    .cart-control-wrapper {
      bottom: 6px;
      position: absolute;
      right: 0;
    }
  }
}
</style>