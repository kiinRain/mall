<template>
  <div id="app">
    <home/>
    <main-tab-bar/>
  </div> 
</template>
<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
import Home from "views/home/Home";
export default {
  name: 'app',
  components: {
    MainTabBar,
    Home
  }
}
</script>
<style>
@import url(assets/css/base.css);
</style>
