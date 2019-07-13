<template>
  <div>
    <mt-header title="购物车(50)" class="header">
      <mt-button slot="right">编辑</mt-button>
    </mt-header>

    <div class="goods-list">
      <div class="row">
        <div class="circle">
          <div class="core">
            <i class="fa  fa-check-circle fa-fw"></i>
          </div>
        </div>
        <img src="../../static/images/23.jpg" class="picture">
        <div class="right-content">
          <p class="good-name">我是大闸蟹</p>
          <p class="good-remain">仅剩 500 斤</p>
          <p class="good-price">惊爆价<span class="flag">￥</span>20<span class="discount">原价￥15</span></p>
        </div>
        <div class="buy">
          <div class="core-buy">x1</div>
        </div>
      </div>
      <div class="row">
        <div class="circle active">
          <div class="core">
            <i class="fa fa-check-circle fa-fw"></i>
          </div>
        </div>
        <img src="../../static/images/23.jpg" class="picture">
        <div class="right-content">
          <p class="good-name">我是大闸蟹</p>
          <p class="good-remain">仅剩 500 斤</p>
          <p class="good-price">惊爆价<span class="flag">￥</span>20<span class="discount">原价￥15</span></p>
        </div>
        <div class="buy">
          <div class="core-buy">
            <div class="circle-plus"><i class="fa fa-minus-circle fa-fw"></i></div>
            <input placeholder="0" class="input-number" v-model="food_count"/>
            <div class="circle-plus"><i class="fa fa-plus-circle fa-fw"></i></div>
          </div>
        </div>
      </div>
    </div>

    <div class="selection">
      <div class="circle">
        <div class="core">
          <i class="fa fa-check-circle fa-fw"></i>
        </div>
      </div>
      <p class="all">全选</p>
      <p class="clean">合计：</p>
      <p class="price">￥1024</p>
      <div class="del">
        <div class="btn-save">预约</div>
        <div class="btn-buy" @click="confirmOrder">下单</div>
      </div>
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
      toShoppingCart () {
        this.$router.push({path: '/shoppingCart'})
      },
      confirmOrder () {
        this.$router.push({path: '/confirmOrder'})
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
    margin-top: px2rem(28px);
    margin-bottom: px2rem(34px);

    .picture {
      width: px2rem(160px);
      height: px2rem(130px);

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    .circle {
      width: px2rem(56px);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 px2rem(12px);

      &.active {
        .core i {
          display: block;
        }
      }

      .core {
        width: px2rem(40px);
        height: px2rem(40px);
        background-color: #ffffff;
        border-radius: 50%;
        border: px2rem(2px) solid #DE2D2E;
        color: #de2d2e;
        font-size: px2rem(40px);
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          display: none;
        }
      }
    }
  }

  .right-content {
    width: px2rem(280px);
    overflow: hidden;
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

  .goods-list {
    min-height: px2rem(800px);
  }

  .selection {
    position: fixed;
    right: 0;
    bottom: px2rem(110px);
    width: 100%;
    height: px2rem(80px);
    background: #FFFFFF;
    display: flex;
    align-items: center;

    .circle {
      width: px2rem(56px);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 px2rem(12px);

      &.active {
        .core i {
          display: block;
        }
      }

      .core {
        width: px2rem(40px);
        height: px2rem(40px);
        background-color: #ffffff;
        border-radius: 50%;
        border: px2rem(2px) solid #DE2D2E;
        color: #de2d2e;
        font-size: px2rem(40px);
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          display: none;
        }
      }
    }

    .all {
      height: px2rem(40px);
      font-size: px2rem(22px);
      line-height: px2rem(40px);
      color: #666666;
    }

    .del {
      width: px2rem(240px);
      height: px2rem(80px);
      position: absolute;
      right: 0;
      bottom: 0;
      margin: 0 px2rem(20px);
      overflow: hidden;
      display: flex;

      .btn-save {
        float: left;
        text-align: center;
        width: 50%;
        background: #F99D27;
        color: #ffffff;
        font-weight: bold;
        font-size: px2rem(24px);
        line-height: px2rem(80px);
      }

      .btn-buy {
        @extend .btn-save;
        background: #DE2D2E;
      }
    }

    .clean {
      width: fit-content;
      height: px2rem(40px);
      font-size: px2rem(24px);
      line-height: px2rem(40px);
      font-weight: bold;
      color: #666666;
      margin-left: px2rem(24px);
    }

    .price {
      font-size: px2rem(24px);
      color: #DE2D2E;
    }
  }

</style>
