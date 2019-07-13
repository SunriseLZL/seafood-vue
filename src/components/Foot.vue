<template>
  <mt-tabbar v-model="selected" :fixed="true">
    <mt-tab-item id="Home" @click.native="toRouter('/')">
      <img slot="icon" src="../../static/images/home.png">
      首页
    </mt-tab-item>
    <mt-tab-item id="Order" @click.native="toRouter('/order')">
      <img slot="icon" src="../../static/images/shopping.png">
      订单
    </mt-tab-item>
    <mt-tab-item id="Mine" @click.native="toRouter('/mine')">
      <img slot="icon" src="../../static/images/mine.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  export default {
    data () {
      return {
        selected: 'Home'
      }
    },
    methods: {
      toRouter (path) {
        this.$router.push({path})
      }
    },
    created () {
      this.selected = this.$route.name
      console.log(this.selected)
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../assets/css/function.scss";

  .mint-tabbar {
    background-image: none !important;
  }

  .mint-tabbar > .mint-tab-item.is-selected {
    color: #de2d2e;
  }


  .foot {
    width: 100%;
    height: px2rem(98px);
    background-color: #FDFDFD;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    border-top: px2rem(1px) solid #dfdfdf;
    z-index: 9999;

    .nav {
      flex: 1;
      text-align: center;
      font-size: px2rem(24px);
      color: #878B8A;

      & > .active {
        color: #F3393F;
      }

      img {
        height: px2rem(40px);
        margin-top: px2rem(10px);
      }
    }
  }
</style>
