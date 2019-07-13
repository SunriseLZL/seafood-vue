<template>
  <div>
    <div class="head">
      <div class="avatar">
        <img src="../../static/images/23.jpg" alt="">
      </div>
      <p class="nickName">尊贵的友大大</p>
      <p class="summary">欢迎您选择本平台</p>
    </div>
    <div class="tabs">
      <div class="tab">
        <img src="../../static/images/allOrders.png" class="pic">
        <p class="sub">全部订单</p>
      </div>
      <div class="tab">
        <img src="../../static/images/unpay.png" class="pic">
        <p class="sub">未付款</p>
      </div>
      <div class="tab">
        <img src="../../static/images/unsend.png" class="pic">
        <p class="sub">已付款</p>
      </div>
    </div>
    <div class="content">
      <div class="slide" @click="toRouter('/address')">
        <img src="../../static/images/location.png" class="pic">
        <p class="font">收货地址</p>
        <img src="../../static/images/arrow_s.png" class="arrow">
      </div>
      <div class="slide" @click="codeShow = true">
        <img src="../../static/images/contact.png" class="pic" alt="">
        <p class="font">联系商家</p>
        <img src="../../static/images/arrow_s.png" class="arrow">
      </div>
    </div>
    <div class="mask" v-if="codeShow" @click="codeShow = false">
      <div class="subCode">
        <img src="../../static/images/card.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: '1',
        codeShow: false,
      }
    },
    methods: {
      toRouter (path) {
        this.$router.push({path})
      }
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../assets/css/function.scss";

  .head {
    width: 100%;
    height: px2rem(200px);
    background-image: linear-gradient(-90deg, #DE2D2E 3%, #DE2D2E 100%);
    position: relative;
    overflow: hidden;

    .avatar {
      position: absolute;
      width: px2rem(100px);
      height: px2rem(100px);
      border-radius: 50%;
      overflow: hidden;
      left: px2rem(32px);
      top: px2rem(50px);
    }

    .avatar > img {
      width: 100%;
      height: 100%;
    }

    .nickName {
      position: absolute;
      left: px2rem(166px);
      top: px2rem(54px);
      font-size: px2rem(28px);
      color: #FFFFFF;
    }

    .summary {
      position: absolute;
      left: px2rem(166px);
      top: px2rem(100px);
      font-size: px2rem(24px);
      color: #f0f0f0;
    }
  }

  .tabs {
    width: 100%;
    background-color: #ffffff;
    display: flex;
    overflow: hidden;
    border: px2rem(2px) solid #f2f2f2;
    box-sizing: border-box;
    padding: px2rem(20px) 0;

    .tab {
      flex: 1;
      text-align: center;

      .pic {
        width: px2rem(40px);
      }

      .sub {
        font-size: px2rem(20px);
        color: #6B6B6B;
      }
    }
  }

  .content {
    padding-top: px2rem(40px);
    background-color: #ffffff;
    .slide {
      width: 100%;
      height: px2rem(80px);
      padding: px2rem(20px);
      box-sizing: border-box;
      line-height: px2rem(20px);

      .pic {
        float: left;
        height: px2rem(30px);
      }

      .font {
        float: left;
        font-size: px2rem(28px);
        color: #4E4E4E;
        margin-left: px2rem(20px);
       margin-top: px2rem(4px);
      }

      .arrow {
        float: right;
        width: px2rem(12px);
        margin-top: px2rem(14px);
      }
    }
  }

  .mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.50);
    z-index: 999;

    .subCode {
      position: absolute;
      top: 50%;
      margin-top: px2rem(-200px);
      left: 50%;
      margin-left: px2rem(-200px);
      width: px2rem(400px);
      height: px2rem(400px);
      border-radius: 10px;
      background-color: #ffffff;
      text-align: center;
      box-sizing: border-box;

      img {
        width: px2rem(400px);
        height: px2rem(400px);
      }

      .tips {
        position: absolute;
        width: px2rem(60px);
        height: px2rem(60px);
        left: 50%;
        margin-left: px2rem(-30px);
        top: 50%;
        margin-top: px2rem(-30px);
        z-index: 9999;
      }
    }
  }
</style>
