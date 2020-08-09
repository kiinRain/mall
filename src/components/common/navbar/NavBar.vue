<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot>1</div>
    <div class="center"><slot name="center"></slot>2</div>
    <div class="right"><slot name="right"></slot>3</div>
   
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
.nav-bar{
  display: flex;
  line-height: 44px;
}
.left,.right{
  background: rgb(143, 143, 143);
  height: 44px;
  width: 60px;
}
.center{
  flex: 1;
  background: hotpink;
}
</style>