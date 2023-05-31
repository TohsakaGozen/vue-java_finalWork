<template>
  <div class="content">
    <Header />
    <Direction :Osize="Osize" :Isize="Isize" />
    <TodayGoods />
    <Like />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header from "../components/Header.vue";
import Direction from "../components/Direction.vue";
import TodayGoods from "../components/TodayGoods.vue";
import Like from "../components/Like";

export default {
  name: "home",
  data() {
    return {
      Osize: "width: 80%; height: 480px;",
      Isize: "480px",
    };
  },
  components: {
    Header,
    Direction,
    TodayGoods,
    Like,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>