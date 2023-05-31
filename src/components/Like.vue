<template>
  <div class="like">
    <div class="py-container">
      <div class="title">
        <h3 class="fl">DO YOU LIKE</h3>
        <a href="javascript:;" class="fr tip changeBnt" @click.prevent="setNew"
          >换一换</a
        >
      </div>
      <div class="bd">
        <ul v-for="(like, index) in likeList" :key="index" class="favourate">
          <li v-for="(item, index) in like" :key="index">
            <img @click="goDetails(item)" :src="item.path" alt="" />
            <div @click="goDetails(item)" class="like-text">
              <p>{{ item.produce }}</p>
              <h3>{{ item.price }}￥</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Like",
  data() {
    return {
      likeList: {
        likeList1: {
          image1: {
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
          image2: {
            path: "/images/like02.jpg",
            moreImage: {
              path1: "/images/like02_1.jpg",
              path2: "/images/like02_2.jpg",
              path3: "/images/like02_3.jpg",
            },
            produce:
              "啄木鸟更衣人偶坠入爱河 喜多川海梦cos 黑江雫女仆装 cosplay服装全套 喜多川女仆全套+假发 ",
            price: " 349",
            isStar: 0,
          },
          image3: {
            path: "/images/like03.jpg",
            moreImage: {
              path1: "/images/like03_1.jpg",
              path2: "/images/like03_2.jpg",
              path3: "/images/like03_3.jpg",
            },
            produce: "缘之空穹妹手办动漫周边和风穹语春日野穹",
            price: " 509",
            isStar: 0,
          },
          image4: {
            path: "/images/hot08.jpg",
            moreImage: {
              path1: "/images/hot08_1.jpg",
              path2: "/images/hot08_2.jpg",
              path3: "/images/hot08_3.jpg",
            },
            produce:
              "冰菓漫画.1-10（套装共10册）日本推理大师米泽穗信高人气出道作同名漫画",
            price: " 175",
            isStar: 0,
          },
          image5: {
            path: "/images/like03.jpg",
            moreImage: {
              path1: "/images/like03_1.jpg",
              path2: "/images/like03_2.jpg",
              path3: "/images/like03_3.jpg",
            },
            produce: "缘之空穹妹手办动漫周边和风穹语春日野穹",
            price: " 509",
            isStar: 0,
          },
          image6: {
            path: "/images/like03.jpg",
            moreImage: {
              path1: "/images/like03_1.jpg",
              path2: "/images/like03_2.jpg",
              path3: "/images/like03_3.jpg",
            },
            produce: "缘之空穹妹手办动漫周边和风穹语春日野穹",
            price: " 509",
            isStar: 0,
          },
        },
        likeList2: {
          image7: {
            path: "/images/like09.jpg",
            produce: "【哔哩哔哩】GSC POP UP PARADE 哔哩哔哩 22&33娘 手办",
            price: "256",
          },
          image8: {
            path: "/images/like12.jpg",
            produce:
              "【官网价直降1100】Apple iPhone 8 Plus 256GB 绿色全网通4G手机",
            price: "306",
          },
          image9: {
            path: "/images/like13.jpg",
            produce:
              "【官网价直降1100】Apple iPhone 9 Plus 256GB 青色全网通4G手机",
            price: "668",
          },
          image10: {
            path: "/images/like14.jpg",
            produce:
              "【官网价直降1100】Apple iPhone 10 Plus 256GB 蓝色全网通4G手机",
            price: "546",
          },
          image11: {
            path: "/images/like15.jpg",
            produce: "【米哈游/崩坏学园2】希儿·摇曳猫尾 1/7手办",
            price: "325",
          },
          image12: {
            path: "/images/like16.jpg",
            produce:
              "【官网价直降1100】Apple iPhone 12 Plus 256GB 银色全网通4G手机",
            price: "119",
          },
        },
        likeList3: {
          image13: {
            path: "/images/like15.jpg",
            produce:
              "【火影忍者】手办鸣人卡卡西宇智波佐助GK模型摆件动漫二次元周边雕像",
            price: "158",
          },
          image14: {
            path: "/images/like20.jpg",
            produce:
              "【官网价直降1100】Apple iPhone 8 Plus 256GB 绿色全网通4G手机",
            price: "306",
          },
          image15: {
            path: "/images/like21.jpg",
            produce:
              "【官网价直降1100】Apple iPhone 9 Plus 256GB 青色全网通4G手机",
            price: "668",
          },
          image16: {
            path: "/images/like22.jpg",
            produce:
              "【官网价直降1100】Apple iPhone 10 Plus 256GB 蓝色全网通4G手机",
            price: "546",
          },
          image17: {
            path: "/images/like23.jpg",
            produce:
              "【官网价直降1100】Apple iPhone 11 Plus 256GB 紫色全网通4G手机",
            price: "325",
          },
          image18: {
            path: "/images/like24.jpg",
            produce:
              "【官网价直降1100】Apple iPhone 12 Plus 256GB 银色全网通4G手机",
            price: "119",
          },
        },
      },
    };
  },
  methods: {
    goDetails(goodDetail) {
      //   this.$router.push({
      //     name: "details",
      //     query: goodDetail,
      //     params: goodDetail.moreImage,
      //   });
    },
    setNew() {
      this.likeList = likeList;
      //随机顺序展示
      var likeList1 = Object.values(this.likeList.likeList1);
      var length = likeList1.length,
        randomIndex,
        temp;
      while (length) {
        randomIndex = Math.floor(Math.random() * length--);
        temp = likeList1[randomIndex];
        likeList1[randomIndex] = likeList1[length];
        likeList1[length] = temp;
      }
      state.likeList1 = likeList1;
    },
  },
};
</script>

<style scoped>
.like {
  margin-top: 15px;
  font-family: YOUYUAN;
  box-shadow: 0 0 5px slategrey;
}
.like .py-container {
  width: 1200px;
  min-height: 850px;
  margin: 0 auto;
}
.like .py-container .title {
  overflow: hidden;
}
.like .py-container .title .fl {
  float: left;
  font-size: 20px;
  line-height: 30px;
  margin-left: 25px;
}
.like .py-container .title .fr {
  float: right;
  width: 66px;
  height: 25px;
  background-position: 182px -104px;
  line-height: 30px;
  font-size: 12px;
  font-weight: 400;
  color: #666;
  text-decoration: none;
}
.like .py-container .bd .favourate {
  border: 1px solid #e4e4e4;
  overflow: hidden;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
}
.like .py-container .bd .favourate li {
  height: 250px;
  margin: 0 -1px;
  overflow: hidden;
  background: #fff;
  position: relative;
  width: 16.667%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  box-shadow: 0 0 5px silver;
  margin: 10px;
  transition: all 400ms;
  border-radius: 10px;
}
.like .py-container .bd .favourate li img {
  width: 160px;
  height: 142px;
  transition: all 400ms;
  border-radius: 5px;
  box-shadow: 0 0 5px silver;
}
.like .py-container .bd .favourate li:hover {
  opacity: 0.8;
  transform: scale(1.1);
}
.like .py-container .bd .favourate li .like-text {
  padding: 0 5px 0 5px;
  width: 160px;
  height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5px;
  overflow: hidden;
}
.like .py-container .bd .favourate li .like-text p {
  overflow: hidden;
  font-size: 15px;
}
.like .py-container .bd .favourate li .like-text h3 {
  color: rgb(250, 104, 25);
  position: relative;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  font-family: YOUYUAN;
}
</style>