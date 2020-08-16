<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      :class="{active: index === currentIndex}"
      @click="itemClick(index)"
      class="tab-control-item"
    >
      <div>
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      // type: Array,
      dafault() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  margin-top: 20px;
  padding:  10px ;
  background: #fff;
  box-sizing: border-box;
  position: sticky;
  top: 44px;
  
}
.tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding-bottom: 5px;
  border-bottom: 3px solid var(--color-tint);
}
</style>