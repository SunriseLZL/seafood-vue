<template>
  <div>
    <div class="swipe-box">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <div class="img-wrap">
            <img src="../../static/images/1.jpg">
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="img-wrap">
            <img src="../../static/images/2.jpg">
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="img-wrap">
            <img src="../../static/images/3.jpg">
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="goods-list">
      <div class="row">
        <div class="picture" @click="toRouter('/buy',{id:100})">
          <img src="../../static/images/23.jpg">
        </div>
        <div class="right-content" @click="toRouter('/buy',{id:100})">
          <p class="good-name">我是大闸蟹</p>
          <p class="good-remain">仅剩 500 斤</p>
          <p class="good-price">惊爆价<span class="flag">￥</span>20<span class="discount">原价￥15</span></p>
        </div>
        <div class="buy">
          <div class="core-buy">
            <div class="circle-plus"><i class="fa  fa-minus-circle fa-fw"></i></div>
            <input placeholder="0" class="input-number" v-model="food_count"/>
            <div class="circle-plus"><i class="fa  fa-plus-circle fa-fw"></i></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="picture" @click="toRouter('/buy',{id:100})">
          <img src="../../static/images/23.jpg">
        </div>
        <div class="right-content">
          <p class="good-name">我是大闸蟹</p>
          <p class="good-remain">仅剩 500 斤</p>
          <p class="good-price">惊爆价<span class="flag">￥</span>20<span class="discount">原价￥15</span></p>
        </div>
        <div class="buy">
          <div class="core-buy">
            <div class="circle-plus"><i class="fa  fa-plus-circle fa-fw"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="shopping-cart" @click="toRouter('/shoppingCart')">
      <i class="fa fa-shopping-cart fa-fw"></i>
      <p class="shop-amount">10</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        food_count: 10
      }
    },
    methods: {
      toRouter (path, params = {}) {
        this.$router.push({path, query: {...params}})
      }
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped="" rel="stylesheet/scss">
  @import "../assets/css/function.scss";

  .swipe-box {
    width: 100%;
    height: px2rem(400px);
  }

  .goods-list {
    min-height: px2rem(400px);
  }

  .img-wrap {
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  .row {
    width: 100%;
    overflow: hidden;
    display: flex;
    margin-top: px2rem(28px);
    margin-bottom: px2rem(34px);

    .picture {
      margin-left: px2rem(32px);
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
  }


  .core-buy {
    width: 100%;
    height: px2rem(60px);
    overflow: hidden;
    display: flex;
    justify-content: center;
  }

  .input-number {
    width: px2rem(80px);
    height: px2rem(40px);
    line-height: px2rem(40px);
    border: px2rem(2px) solid #DE2D2E;
    text-align: center;
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
    width: px2rem(200px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: px2rem(16px);
  }

  .shopping-cart {
    width: px2rem(80px);
    height: px2rem(80px);
    position: fixed;
    right: px2rem(40px);
    bottom: px2rem(200px);
    border-radius: 50%;
    background-color: #DE2D2E;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shop-amount {
    position: absolute;
    right: px2rem(-10px);
    top: px2rem(-10px);
    width: px2rem(40px);
    height: px2rem(40px);
    border-radius: 50%;
    background-color: #26a2ff;
    color: #ffffff;
    text-align: center;
    line-height: px2rem(40px);
    font-size: px2rem(12px);
  }
</style>

