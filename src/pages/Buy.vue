<template>
  <div id="container">
    <mt-header title="商品详情" class="header">
      <mt-button icon="back" slot="left" @click.native="goBack">返回</mt-button>
    </mt-header>
    <img :src="goodDetail.photo" class="picture">
    <div class="shopDetail">
      <p class="title">{{goodDetail.title}}</p>
      <p class="area">产地：{{goodDetail.address}}</p>
      <p class="area">库存：{{goodDetail.num}}{{unitDict[goodDetail.unit]}}</p>
      <p class="good-price">零售<span class="flag">￥</span>{{goodDetail.retailPrice}}<span class="discount">批发￥{{goodDetail.wholesalePrice}}</span>
      </p>
      <div class="area">
        <span class="amount">选择数量：</span>
        <div class="core-buy">
          <div class="circle-plus" @click="delAmount"><i class="fa  fa-minus-circle fa-fw"></i></div>
          <input placeholder="0" class="input-number" v-model="amount"/>
          <div class="circle-plus" @click="addAmount"><i class="fa  fa-plus-circle fa-fw"></i></div>
        </div>
      </div>
    </div>
    <div class="action">
      <!--      <div class="btn save" @click="saveCart">加入购物车</div>-->
      <div class="btn buy" @click="toBuy">立即购买</div>
    </div>
  </div>
</template>

<script>
  import api from '@/api/api';
  import {MessageBox} from 'mint-ui';

  export default {
    data() {
      return {
        goodDetail: {},
        amount: 0,
        unitDict: {
          '1': '斤',
          '2': '袋',
          '3': '只',
          '4': '桶',
        }
      };
    },
    methods: {
      goBack() {
        this.$router.push({path: '/'});
      },
      getGoodDetail() {
        api.get('/goods/detail', {id: this.$route.query.id}).then((res) => {
          console.log(res);
          this.goodDetail = res.data;
        }).catch((error) => {
          console.log(error);
        });
      },
      addAmount() {
        this.amount += 1;
      },
      delAmount() {
        if (this.amount > 0) {
          this.amount -= 1;
        }
      },
      toBuy() {
        if (!this.amount) {
          MessageBox('提示', '选择数量不能为空');
          return false;
        }
        localStorage.setItem('goodsList', JSON.stringify([{...this.goodDetail, amount: this.amount}]));
        this.$router.replace({path: '/confirmOrder'});
      }
    },
    mounted() {
      this.getGoodDetail();
    }
  };
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
      margin-top: px2rem(20px);
      margin-left: px2rem(30px);
    }

    .area {
      margin: px2rem(20px) px2rem(30px);

      .amount {
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
    height: px2rem(60px);

    .btn {
      flex: 1;
      text-align: center;
      line-height: px2rem(60px);
    }

    .save {
      background: #F99D27;
      color: #ffffff;
      font-size: px2rem(24px);
    }

    .buy {
      background: #DE2D2E;
      color: #ffffff;
      font-size: px2rem(24px);
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
