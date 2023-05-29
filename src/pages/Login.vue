<template>
  <div class="content">
    <div class="leftImage"></div>
    <div v-if="!isRegister" class="loginBox">
      <h2>登录</h2>
      <div id="inputBox">
        <div class="input">
          <label for=""> 账号 </label>
          <input v-model="loginInfo.username" type="text" />
        </div>
        <div class="input">
          <label for=""> 密码 </label>
          <input v-model="loginInfo.password" type="password" />
        </div>
      </div>
      <div id="btn">
        <button @click="login">立即登录</button>
        <button @click="login_g">第三方登录</button>
        <button @click="register">立即注册</button>
      </div>
    </div>
    <div v-if="isRegister" class="registerBox">
      <h2>注册</h2>
      <div id="inputBox">
        <div class="input">
          <label for=""> 账户 </label>
          <input v-model="registInfo.username" type="text" />
        </div>
        <div class="input">
          <label for=""> 密码 </label>
          <input v-model="registInfo.password" type="password" />
        </div>
        <div class="input">
          <label for=""> 电话 </label>
          <input v-model="registInfo.phone" type="text" />
        </div>
      </div>
      <div id="btn">
        <button @click="submit">提交</button>
        <button @click="login_g">第三方登录</button>
        <button @click="register">去登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      isRegister: false,
      loginInfo: {
        username: "",
        password: "",
      },
      registInfo: {
        username: "",
        password: "",
        phone: "",
      },
    };
  },
  methods: {
    login() {
      console.log(this.loginInfo);
    },
    login_g() {
      window.location.href =
        "https://gitee.com/oauth/authorize?client_id=11932fab08db243baeb357860a3bd7d86989ea43dc9dafdee185e4ee077afd2a&redirect_uri=http://10.131.119.37:8080/success&response_type=code";
    },
    register() {
      this.isRegister = !this.isRegister;
    },
    submit() {
      console.log(this.registInfo);
    },
  },
};
</script>

<style scoped>
.content {
  margin-right: auto;
  margin-left: auto;
  margin-top: 10vh;
  width: 60vw;
  height: 70vh;
  display: flex;
  box-shadow: 0 0 10px black;
  align-items: center;
}
.leftImage {
  width: 50%;
  height: 100%;
}
.loginBox,
.registerBox {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.registerBox input {
  width: 80%;
  height: 50%;
}
#inputBox {
  width: 80%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.input {
  width: 100%;
  height: 100%;
}
h2 {
  font-family: YOUYUAN;
  font-size: 40px;
}
.loginBox input {
  width: 80%;
  height: 36%;
  border: 0;
  box-shadow: 0 0 3px black;
  border-radius: 5px;
}
#btn {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 25%;
  margin-top: -60px;
}
button {
  border: 0;
  background-color: rgb(215, 255, 242);
  width: 80%;
  height: 30%;
  cursor: pointer;
  border-radius: 10px;
}
button:hover {
  background-color: aqua;
}
</style>