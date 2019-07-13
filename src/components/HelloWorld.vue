<template>
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger">danger</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>


<style lang="scss" scoped="" rel="stylesheet/scss">
  @import "../assets/css/function.scss";

  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: px2rem(88px);
    width: 100%;
    background-color: #ffffff;
    border-bottom: px2rem(1px) solid #dfdfdf;
    z-index: 999;
  }
</style>
