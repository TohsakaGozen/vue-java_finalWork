<template>
  <div class="today-recommend">
    <div class="py-container">
      <ul class="recommend">
        <li class="clock">
          <div class="time">
            <img src="../../public/images/clock.png" />
            <h3>今日推荐</h3>
          </div>
        </li>
        <li v-for="(image, index) in todayList" :key="index" class="banner">
          <img :src="image.path" />
        </li>
      </ul>
    </div>
  </div>
</template>     

<script>
import { mapState } from "vuex";
export default {
  name: "Today",
  methods: {},
  data() {
    return {
      todayList: {
        image1: {
          path: "/images/hot01.jpg",
          moreImage: {
            path1: "/images/hot01_1.jpg",
            path2: "/images/hot01_2.jpg",
            path3: "/images/hot01_3.jpg",
          },
          produce: "【现货】Broccoli 偶像大师 闪耀色彩 樋口円香 手办 带特典！",
          price: "1450",
          isStar: 0,
        },
        image2: {
          path: "/images/like01.jpg",
          moreImage: {
            path1: "/images/like01_1.jpg",
            path2: "/images/like01_2.jpg",
            path3: "/images/like01_3.jpg",
          },
          produce:
            "立赐原神cos服刻晴套装少女cospaly动漫服装刻晴c服可爱官方旗舰 暗纹款 ",
          price: " 509",
          isStar: 0,
        },
        image3: {
          path: "/images/hot03.webp",
          moreImage: {
            path1: "/images/hot03_1.webp",
            path2: "/images/hot03_2.webp",
          },
          produce:
            "美式复古vintage超火短袖t恤女宽松韩版潮ins原宿风学生半袖上衣",
          price: "26",
          isStar: 0,
        },
        image4: {
          path: "/images/hot06.jpg",
          moreImage: {
            path1: "/images/hot06_1.jpg",
            path2: "/images/hot06_2.jpg",
            path3: "/images/hot06_3.jpg",
          },
          produce:
            "不存在的战区小说全套1-7册简中86不存在的地域天闻角川轻小说文学动漫画书日本",
          price: " 194",
          isStar: 0,
        },
      },
    };
  },
  mounted() {},
};
</script>

<style scoped>
.today-recommend .py-container {
  width: 1220px;
}
.today-recommend .py-container .recommend {
  height: 165px;
  background-color: #eaeaea;
  margin: 10px 0;
  display: flex;
}
.today-recommend .py-container .recommend .clock {
  width: 16.67%;
  background-color: #5c5251;
  color: #fff;
  font-size: 18px;
  text-align: center;
}
.today-recommend .py-container .recommend .clock .time {
  padding: 30px 0;
}
.today-recommend .py-container .recommend .clock h3 {
  margin: 9px 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 30.06px;
  color: rgb(255, 226, 171);
}
.today-recommend .py-container .recommend .banner {
  list-style: none;
  width: 20.83%;
}
.today-recommend .py-container .recommend .banner img {
  width: 99%;
  height: 100%;
  transition: all 400ms;
  cursor: pointer;
}
.today-recommend .py-container .recommend .banner img:hover {
  opacity: 0.8;
  transform: scale(1.01);
}
</style>