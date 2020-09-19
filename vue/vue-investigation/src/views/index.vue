<template>
  <div class="index">
    <div class="bgd"></div>
    <div class="topBox">
      <span>第一周</span>
    </div>
    <router-link class="start" to="/item"></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.bgd {
  position: absolute;
  top: 125px;
  left: 40px;
  width: 340px;
  height: 300px;
  background: url(../image/1-2.png) no-repeat;
  background-size: 100% 100%;
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
  background: url(../image/1-4.png) no-repeat;
  background-size: 100% 100%;
}
</style>