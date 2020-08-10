<template>
  <div id="home">
    <nav-bar class="home-nav">
      <!-- 具名插槽 -->
      <span slot="center">购物街</span>
    </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners.list" :key="item.index">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import { getHomeMultidata} from "network/Home";
import { Swiper, SwiperItem } from "components/common/swiper/index";

// import func from '../../../vue-temp/vue-editor-bridge'

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata()
      .then((res) => {
        this.banners = res.data.banner;
        // this.recommends = res.data.recommend;
        console.log(this.banners);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>
