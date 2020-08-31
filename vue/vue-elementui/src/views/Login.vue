<template>
  <div class="login">
    <h2>旅梦后台管理系统</h2>
    <div class="login-wrapper">
      <p class="input">
        <el-input v-model="user" placeholder="请输入账号"></el-input>
      </p>
      <p class="input">
        <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
      </p>
      <p class="btn">
        <el-button type="primary" round @click="login">登录</el-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (!this.user || !this.password) {
        this.$message.error("账号或密码不能为空！！！");
      } else {
        this.$message({
          message: "恭喜你，登陆成功。",
          type: "success",
        });
        // 路由跳转
        this.$router.push({ path: "/home", query: { name: this.user } });
        // this.$emit("username", this.user);
      }
    },
  },
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: skyblue;
}
.login-wrapper {
  margin-top: 30px;
  width: 250px;
}
.input {
  margin-bottom: 20px;
}
.btn button {
  width: 100%;
}
</style>