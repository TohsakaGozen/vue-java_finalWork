<template>
  <div class="content">
    <h1>我是登录页面</h1>
    <button @click="login_g">登录</button>
  </div>
</template>

<script>
export default {
  name: "login",

  methods: {
    login_g() {
      window.location.href =
        "https://gitee.com/oauth/authorize?client_id=11932fab08db243baeb357860a3bd7d86989ea43dc9dafdee185e4ee077afd2a&redirect_uri=http://10.131.119.37:8080/success&response_type=code";
    },
  },
};
</script>

<style>
</style>