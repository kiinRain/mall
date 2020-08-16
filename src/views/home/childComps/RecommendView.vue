<template>
  <div class="recommend">
    <div v-for="item in recommends.list" :key="item.index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" />
        <div>
          {{item.title}}
        </div>
      </a>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      // type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend{
  display: flex;
 text-align: center;
 font-size: 16px;
}
.recommend-item{
  flex: 1;
  padding: 10px 0 30px;
  border-bottom: 8px solid #eee;

}
.recommend-item img{
  width: 90%;
  margin-bottom: 10px;
}

</style>