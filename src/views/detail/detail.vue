<template>
  <div id="detail">
   <nav-bar class="detail-nav">
     <img slot="left" class="back" @click="backClick" src="~assets/img/common/back.svg">
     <div class="title" slot="center">
      <span class="title-item"
            v-for="(item, index) in titleInfos" :key="index"
           >
        {{item}}
      </span>
    </div>
    </nav-bar>
    详情
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: "Detail",
  components: {
    NavBar
  },
  props: {},
  data(){
    return{
      msg: [],
      iid: '',
      titleInfos: ['详情','评价','推荐','更多']
    }
  },
  methods:{
    backClick(){
      this.$router.back(-1)
    },
  },
  mounted() {
    const iid = this.$route.params.iid
    this.iid = iid
    console.log(iid)
    console.log(this.$store.state.currentGoodInfo);
    const arr = [
      {
        id: 1,
        name: "name1"
      },
      {
        id: 2,
        name: "name2"
      }
    ]
  },
}
</script>

<style>
.detail-nav {
    background-color: #fff;
    font-weight: normal;
  }

  .title {
    display: flex;
    padding: 0 20px;
    font-size: 14px;
  }

  .title-item {
    flex: 1;
  }

  .title-item.active {
    color: var(--color-high-text);
  }

  .back {
    margin-top: 12px;
  }
</style>