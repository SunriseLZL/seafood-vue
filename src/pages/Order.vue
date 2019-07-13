<template>
  <div>
    <mt-header title="我的订单" class="header"></mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">未付款</mt-tab-item>
      <mt-tab-item id="3">已付款</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div class="lists">
          <p class="list-no">订单号：10086 </p>
          <div class="row">
            <img src="../../static/images/23.jpg" class="picture">
            <div class="right-content">
              <p class="good-name">我是大闸蟹</p>
              <p class="good-remain">仅剩 500 斤</p>
              <p class="good-price">惊爆价<span class="flag">￥</span>20<span class="discount">原价￥15</span></p>
            </div>
            <div class="buy">x1</div>
          </div>
          <div class="row">
            <img src="../../static/images/23.jpg" class="picture">
            <div class="right-content">
              <p class="good-name">我是大闸蟹</p>
              <p class="good-remain">仅剩 500 斤</p>
              <p class="good-price">惊爆价<span class="flag">￥</span>20<span class="discount">原价￥15</span></p>
            </div>
            <div class="buy">x1</div>
          </div>
          <p class="total">总价：￥5000</p>
        </div>

      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <p>123</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <p>12376</p>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: '1'
      }
    },
    methods: {},
    mounted () {

    }
  }
</script>

<style lang="scss" scoped="" rel="stylesheet/scss">
  @import "../assets/css/function.scss";

  .mint-tab-item.is-selected {
    border-bottom: 3px solid #DE2D2E;
    color: #DE2D2E;
  }

  .lists{
    background-color: #f2f2f2;
    overflow: hidden;
    padding-top: px2rem(20px);
    padding-bottom:px2rem(20px);
    .list-no{
      margin-left: px2rem(30px);
      font-size: px2rem(16px);
      color: #878b8a;
    }
  }

  .row {
    width: 100%;
    overflow: hidden;
    display: flex;
    padding: px2rem(12px) px2rem(30px);
    color: #3F3F3F;
    box-sizing: border-box;

    .picture {
      width: px2rem(160px);
      height: px2rem(130px);

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    .right-content {
      width: px2rem(280px);
      padding-left: px2rem(16px);
      position: relative;
    }

    .good-name {
      font-size: px2rem(32px);
      color: #2B2B2B;
    }

    .good-remain {
      position: absolute;
      left: px2rem(16px);
      bottom: px2rem(50px);
      font-size: px2rem(24px);
      color: #A4A4A4;
    }

    .good-price {
      position: absolute;
      left: px2rem(16px);
      bottom: 0;
      font-size: px2rem(22px);
      color: #DE2D2E;
      white-space: nowrap;

      .flag {
        font-size: px2rem(24px);
      }

      .discount {
        margin-left: px2rem(5px);
        font-size: px2rem(20px);
        color: #A4A4A4;
        text-decoration: line-through;
      }
    }

    .circle-plus {
      width: px2rem(40px);
      height: px2rem(40px);
      line-height: px2rem(40px);
      border-radius: 50%;
      text-align: center;
      color: #DE2D2E;
      font-size: px2rem(40px);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .buy {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: px2rem(16px);
    }
  }

  .total{
    margin-right: px2rem(30px);
    color: #DE2D2E;
    text-align: right;
  }
</style>
