<template>
  <div class="content">
    <h2>请求成功，{{ time }}s后跳转到主页面</h2>
  </div>
</template>

<script>
export default {
  name: "success",
  data() {
    return {
      time: 3,
    };
  },
  created() {
    this.$store
      .dispatch(
        "user/getToken",
        window.location.href.split("code=")[1].split("#")[0]
      )
      .then(() => {
        this.$store.dispatch("user/getUserInfo");
      });
  },
  mounted() {
    setInterval(() => {
      this.time--;
    }, 1000);
    setTimeout(() => {
      this.$router.push("home");
    }, 3000);
  },
};
</script>

<style scoped>
.content {
  text-align: center;
}
</style>