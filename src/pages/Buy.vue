<template>
  <div id="container">
    <mt-header title="商品详情" class="header">
      <mt-button icon="back" slot="left" @click.native="goBack">返回</mt-button>
    </mt-header>
    <img src="../../static/images/23.jpg" class="picture">
    <div class="shopDetail">
      <p class="title">我是大闸，我是标题</p>
      <p class="area">产地：牙买加</p>
      <p class="area">库存：800斤</p>
      <p class="good-price">批发价<span class="flag">￥</span>20<span class="discount">原价￥15</span></p>
      <div class="area">
        <span class="amount">选择数量：</span>
        <div class="core-buy">
          <div class="circle-plus"><i class="fa  fa-minus-circle fa-fw"></i></div>
          <input placeholder="0" class="input-number"/>
          <div class="circle-plus"><i class="fa  fa-plus-circle fa-fw"></i></div>
        </div>
      </div>
    </div>
    <div class="action">
      <div class="btn save">加入购物车</div>
      <div class="btn buy">立即购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        goodsId: '',
        goodData: {},
        currentType: '',
        amount: 1,
        evaluateList: []
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      }
    },
    mounted () {
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../assets/css/function.scss";

  .picture {
    width: 100%;
    height: px2rem(400px);
  }

  .good-price {
    font-size: px2rem(32px);
    color: #DE2D2E;
    white-space: nowrap;
    text-align: left;
    margin: 0 px2rem(30px);

    .flag {
      font-size: px2rem(32px);
    }

    .discount {
      margin-left: px2rem(15px);
      font-size: px2rem(32px);
      color: #A4A4A4;
      text-decoration: line-through;
    }
  }

  .shopDetail {
    width: 100%;
    display: block;
    overflow: hidden;

    .title {
      font-size: px2rem(36px);
      color: #2B2B2B;
      height: px2rem(34px);
      line-height: px2rem(34px);
      margin-top: px2rem(36px);
      margin-left: px2rem(30px);
    }

    .area {
      margin: px2rem(30px);
      .amount{
        float: left;
      }
    }

  }

  .action {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: px2rem(106px);

    .btn {
      flex: 1;
      text-align: center;
      line-height: px2rem(106px);
    }

    .save {
      background: #F99D27;
      color: #ffffff;
      font-size: px2rem(34px);
      font-weight: bold;
    }

    .buy {
      background: #DE2D2E;
      color: #ffffff;
      font-size: px2rem(34px);
    }
  }

  .core-buy {
    float: left;
    width: px2rem(200px);
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
</style>
