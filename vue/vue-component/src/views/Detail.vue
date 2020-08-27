<template>
  <div class="detail">
    <h1>Computed 计算属性</h1>

    <div class="price">{{totalPrice}}元</div>
    <div class="news">
      <ul>
        <li v-for="(item,index)  in reverseNews" :key="index">{{item.title}}--{{item.date}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 100,
      num: 4,
      news: [
        {
          title: "辽宁发布2号令！台风“巴威”下午14时离开辽宁",
          date: "2020/08/24",
        },
        {
          title: "黄牌货车可走雅康高速啦 8月28日起分时段分车型通行",
          date: "2020/08/25",
        },
        {
          title: "深圳全城亮灯 庆祝经济特区建立40周年",
          date: "2020/08/26",
        },
        {
          title: "袁隆平爷爷90岁生日前去理发",
          date: "2020/08/27",
        },
      ],
    };
  },
  computed: {
    totalPrice: function () {
      return this.price * this.num;
    },
    reverseNews: function () {
      let news = this.news;
      return news.reverse();
    },
  },
};
</script>

<style>
</style>