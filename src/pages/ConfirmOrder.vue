<template>
  <div>
    <mt-header title="确认订单" class="header">
      <mt-button @click="toShoppingCart" icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="addressFirm">
      <p class="name">收货人：gdsgfdfgdfg</p>
      <p class="phone">13242344</p>
      <p class="address">收货地址：wqeqwewdas</p>
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
    <div class="sendWay">
      <mt-field label="买家留言" placeholder="（选填）此处给商家留言" :disableClear="true" v-model="orderNote"></mt-field>
    </div>
    <div class="goodMoney">
      <div class="sect">
        <div class="label">商品金额：</div>
        <div class="price">￥145</div>
      </div>
      <div class="sect">
        <div class="label">运费：</div>
        <div class="free">免邮</div>
      </div>
      <div class="sect">
        <div class="label">合计：</div>
        <div class="price">￥435345</div>
      </div>
      <div class="sect money">
        <div class="label">支付方式：</div>
        <div class="free">微信</div>
      </div>
    </div>
    <div class="submit">提交订单</div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        orderNote: ''
      }
    },
    methods: {
      toShoppingCart () {
        this.$router.push({path: '/shoppingCart'})
      }
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped="" rel="stylesheet/scss">
  @import "../assets/css/function.scss";

  .row {
    width: 100%;
    overflow: hidden;
    display: flex;
    padding: px2rem(12px) px2rem(30px);
    color: #3F3F3F;
    box-sizing: border-box;

    .picture {
      width: px2rem(240px);
      height: px2rem(240px);
    }

    .right-content {
      width: px2rem(280px);
      overflow: hidden;
      padding-left: px2rem(16px);
      position: relative;

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
        font-size: px2rem(28px);
        color: #DE2D2E;

        .flag {
          font-size: px2rem(24px);
        }

        .discount {
          margin-left: px2rem(5px);
          font-size: px2rem(24px);
          color: #A4A4A4;
          text-decoration: line-through;
        }
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

  .addressFirm {
    width: 100%;
    max-height: px2rem(218px);
    background-color: #ffffff;
    padding: px2rem(24px) px2rem(30px);
    color: #3F3F3F;
    box-sizing: border-box;
    overflow: hidden;

    .name {
      float: left;
      height: px2rem(40px);
    }

    .phone {
      float: right;
      height: px2rem(40px);
    }

    .address {
      float: left;
      margin-top: px2rem(40px);
      width: px2rem(500px);
    }
  }

  .input {
    width: px2rem(430px);
    height: px2rem(60px);
  }

  .goodMoney {
    width: 100%;
    min-height: px2rem(248px);
    background-color: #ffffff;
    padding: px2rem(24px) px2rem(30px);
    box-sizing: border-box;

    .sect {
      width: 100%;
      height: px2rem(54px);

      .label {
        float: left;
        margin-top: px2rem(5px);
        font-size: px2rem(28px);
      }

      .price {
        float: right;
        font-size: px2rem(36px);
        color: #DE2D2E;
      }

      .free {
        float: right;
        font-size: px2rem(36px);
      }
    }

    .sect.money {
      margin-top: px2rem(60px);
    }
  }

  .submit {
    width: 100%;
    height: px2rem(98px);
    background: #DE2D2E;
    text-align: center;
    line-height: px2rem(98px);
    font-size: px2rem(36px);
    color: #FFFFFF;
    margin-top: px2rem(60px);
  }
</style>
