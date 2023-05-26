<template>
  <div class="content">
    <h1>我是主页</h1>
    <button v-if="!this.username" @click="login">去登录</button>
    <h2 v-if="this.username">欢迎回来{{ this.username }}</h2>
    <button v-if="this.username" @click="exitLogin">退出登录</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "home",
  data() {
    return {
      user_code: "",
    };
  },
  computed: {
    ...mapState("user", ["username"]),
  },
  created() {
    if (this.username) {
      this.$store.dispatch("user/getUserInfo");
    }
  },
  methods: {
    login() {
      this.$router.push("login");
    },
    exitLogin() {
      this.$store.dispatch("user/exitLogin");
    },
  },
};
</script>

<style>
</style>