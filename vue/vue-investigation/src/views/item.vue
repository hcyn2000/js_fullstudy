<template>
  <div class="item">
    <div class="topBox">
      <span>题目{{number}}</span>
    </div>
    <div class="bgd">
      <div class="content">
        <span
          class="subject"
          v-for="(item, index) in titleNumber[subscript].word"
          :key="index"
        >题目{{item.num}}</span>
        <ul>
          <li
            class="list"
            @click="clickSelect(index,item.fraction)"
            v-for="(item, index) in content[subscript].details"
            :key="index"
          >
            <span class="choose" :class="{'select':index == n}">{{item.option}}</span>
            <span class="answer">{{item.details}}</span>
          </li>
        </ul>
      </div>
    </div>
    <span
      class="start"
      @click="clickBtn"
      :style="{backgroundImage:  'url('+(number == 5 ? require('../image/3-1.png') : require('../image/2-2.png'))  +')'}"
    ></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choice: false,
      n: -1,
      number: 1,
      subscript: 0,
      fraction: 0,
      totalScore: 0,
      bacImage: "../image/3-1.png",
      image: "../image/2-2.png",
      titleNumber: [
        {
          word: [{ num: "一" }],
        },
        {
          word: [{ num: "二" }],
        },
        {
          word: [{ num: "三" }],
        },
        {
          word: [{ num: "四" }],
        },
        {
          word: [{ num: "五" }],
        },
      ],
      content: [
        {
          details: [
            { option: "A", details: "答案aaaa", fraction: 0 },
            { option: "B", details: "正确答案", fraction: 20 },
            { option: "C", details: "答案cccc", fraction: 0 },
            { option: "D", details: "答案dddd", fraction: 0 },
          ],
        },
        {
          details: [
            { option: "A", details: "正确答案", fraction: 20 },
            { option: "B", details: "答案bbbb", fraction: 0 },
            { option: "C", details: "答案cccc", fraction: 0 },
            { option: "D", details: "答案dddd", fraction: 0 },
          ],
        },
        {
          details: [
            { option: "A", details: "答案aaa", fraction: 0 },
            { option: "B", details: "答案bbbb", fraction: 0 },
            { option: "C", details: "正确答案", fraction: 20 },
            { option: "D", details: "答案dddd", fraction: 0 },
          ],
        },
        {
          details: [
            { option: "A", details: "答案aaa", fraction: 0 },
            { option: "B", details: "答案bbbb", fraction: 0 },
            { option: "C", details: "答案ccc", fraction: 0 },
            { option: "D", details: "正确答案", fraction: 20 },
          ],
        },
        {
          details: [
            { option: "A", details: "正确答案", fraction: 20 },
            { option: "B", details: "答案bbbb", fraction: 0 },
            { option: "C", details: "正确ccc", fraction: 0 },
            { option: "D", details: "答案dddd", fraction: 0 },
          ],
        },
      ],
    };
  },
  methods: {
    clickSelect(index, fraction) {
      this.fraction = fraction;
      console.log(this.fraction);
      this.n = index;
      this.choice = true;
    },
    clickBtn() {
      if (this.choice) {
        this.number++;
        this.subscript++;
        if (this.subscript == 5) {
          this.subscript = 5;
        }
        this.n = -1;
        this.choice = false;
        this.totalScore += this.fraction;
        console.log(this.totalScore);
      } else {
        alert("为什么不选一个？？？");
      }
      if (this.number > 5) {
        this.$router.push({
          path: "/score",
          query: { totalScore: this.totalScore },
        });
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
  background: no-repeat;
  background-image: url(../image/2-2.png);
  background-size: 100% 100%;
}
</style>