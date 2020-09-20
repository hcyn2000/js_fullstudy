<template>
  <div class="score">
    <div class="bac">
      <div class="your_score">
        <span class="num">{{totalScore}}</span>
        <span class="fenshu">分!</span>
      </div>
      <div class="tip">{{showComments}}</div>
    </div>
    <div class="share" @click="clickShare"></div>
    <div class="mask" v-show="share" @click="clickHide">
      <img class="share_img" src="../image/5-2.png" alt />
    </div>
    <div class="code">
      <div class="header">关注葡萄之家，获取答案。</div>
      <img src="../image/4-4.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalScore: 0,
      showComments: "",
      share: false,
      comment: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，葡萄之家欢迎你！",
      ],
    };
  },
  methods: {
    fraction() {
      const totalScore = this.$route.query.totalScore;
      this.totalScore = totalScore;
    },
    getScoreTip() {
      let index = this.$route.query.totalScore / 20 - 1;
      this.showComments = this.comment[index];
    },
    clickShare() {
      this.share = true;
    },
    clickHide() {
      this.share = false;
    },
  },
  created() {
    this.fraction();
    this.getScoreTip();
  },
};
</script>

<style lang="less" scoped>
.score {
  height: 100vh;
  background: url(../image/4-1.jpg) no-repeat;
  background-size: 100% 100%;
  padding-top: 30px;
}
.bac {
  margin: 0 auto;
  width: 250px;
  height: 230px;
  background: url(../image/4-2.png) no-repeat;
  background-size: 100% 100%;
}
.bac .your_score {
  position: absolute;
  width: 100%;
  text-indent: 85px;
  top: 150px;
  font-size: 36px;
  font-weight: 900;
  -webkit-text-stroke: 0.05rem #412318;
  font-family: Microsoft YaHei;
  .num {
    color: #a51d31;
  }
  .fenshu {
    color: #a51d31;
  }
}
.tip {
  position: absolute;
  font-weight: 300;
  top: 208px;
  left: 98px;
  width: 230px;
  color: #3e2415;
  font-size: 16px;
  text-align: center;
}
.share {
  margin: 25px auto 0;
  width: 155px;
  height: 62px;
  background: url(../image/4-3.png) no-repeat;
  background-size: 100% 100%;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url(../image/5-1.png) no-repeat;
  img {
    width: 310px;
    height: 283px;
    position: fixed;
    top: 20px;
    left: 55px;
  }
}
.code {
  width: 144px;
  margin: 40px auto 0;
  .header {
    color: #664718;
    font-size: 12px;
    margin-bottom: 18px;
    font-weight: 500;
  }
  img {
    text-align: center;
    width: 137px;
    height: 137px;
  }
}
</style>