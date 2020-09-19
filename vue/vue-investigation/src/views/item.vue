<template>
  <div class="item">
    <div class="topBox">
      <span>题目{{number}}</span>
    </div>
    <div class="bgd">
      <div class="content">
        <span class="subject">题目一</span>
        <ul v-for="(item, index) in content[0].details" :key="index">
          <li class="list" @click="clickSelect(index)">
            <span class="choose" :class="{'select':index == n}">{{item.option}}</span>
            <span class="answer">{{item.details}}</span>
          </li>
        </ul>
      </div>
    </div>
    <span class="start" @click="clickBtn"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choice: false,
      n: -1,
      number: 1,
      content: [
        {
          details: [
            { option: "A", details: "答案aaaa" },
            { option: "B", details: "答案" },
            { option: "C", details: "答案cccc" },
            { option: "D", details: "答案dddd" },
          ],
        },
        {
          details: [
            { option: "A", details: "答案aaaa" },
            { option: "B", details: "答案" },
            { option: "C", details: "答案cccc" },
            { option: "D", details: "答案dddd" },
          ],
        },
      ],
    };
  },
  methods: {
    clickSelect(index) {
      this.n = index;
      this.choice = true;
    },
    clickBtn() {
      if (this.choice) {
        this.number++;
      } else {
        alert("这答案还不明显？？？");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.bgd {
  position: absolute;
  top: 125px;
  left: 40px;
  width: 340px;
  height: 300px;
  background: url(../image/2-1.png) no-repeat;
  background-size: 100% 100%;
}
.content {
  width: 200px;
  color: #ffffff;
  position: absolute;
  top: 60px;
  left: 75px;
  font-weight: lighter;
}
.content .list {
  margin-top: 12px;
}
.list .choose {
  font-size: 14px;
  display: inline-block;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border: 1px solid #fff;
  text-align: center;
  border-radius: 50%;
  margin-right: 10px;
}
.list .select {
  background-color: #ffd400;
  color: #575757;
  border-color: #ffd400;
}
.list .answer {
  font-size: 15px;
}
.topBox {
  position: absolute;
  right: 36px;
  width: 84px;
  height: 165px;
  background: url(../image/WechatIMG2.png) no-repeat;
  background-size: 100% 100%;
}
.topBox span {
  font-size: 15px;
  font-weight: 700;
  color: #a57c50;
  position: absolute;
  top: 124px;
  left: 22px;
}
.start {
  position: absolute;
  top: 430px;
  left: 145px;
  display: block;
  width: 112px;
  height: 54px;
  background: url(../image/2-2.png) no-repeat;
  background-size: 100% 100%;
}
</style>