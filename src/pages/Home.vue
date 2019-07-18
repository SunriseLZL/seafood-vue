<template>
  <div>
    <div class="swipe-box">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in banners" :key="item.id">
          <div class="img-wrap">
            <img :src="item.photo" @click="toRouter('/buy',{id:item.id})">
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="goods-list">
      <p class="tip">注：单品满30斤即可享受批发价</p>
      <div class="row" v-for="item in goodsList">
        <div class="picture" @click="toRouter('/buy',{id:item.id})">
          <img v-lazy="item.photo">
        </div>
        <div class="right-content" @click="toRouter('/buy',{id:item.id})">
          <p class="good-name">{{item.title}}</p>
          <p class="good-remain">仅剩 {{item.num}}{{item.unit}}</p>
          <p class="good-price">零售：<span class="flag">￥</span>{{item.retailPrice}}<span class="discount">&nbsp;&nbsp;批发：￥{{item.wholesalePrice}}</span>
          </p>
        </div>
        <div class="buy">
          <div class="core-buy">
            <div class="circle-plus" @click="delAmount(item.id)"><i class="fa  fa-minus-circle fa-fw"></i></div>
            <input placeholder="0" class="input-number" v-model="item.amount"/>
            <div class="circle-plus" @click="addAmount(item.id)"><i class="fa  fa-plus-circle fa-fw"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="shopping-cart animated fadeIn" v-if="goodsTotal > 0" @click="toShoppingCart">
      <i class="fa fa-shopping-cart fa-fw"></i>
      <p class="shop-amount">{{goodsTotal}}</p>
    </div>
  </div>
</template>

<script>
  import api from '@/api/api';

  export default {
    data() {
      return {
        banners: [],
        goodsList: [],
      };
    },
    computed: {
      goodsTotal() {
        let total = 0;
        this.goodsList.forEach((item) => {
          total += item.amount;
        });
        return total;
      }
    },
    methods: {
      toRouter(path, params = {}) {
        this.$router.push({path, query: {...params}});
      },
      toShoppingCart() {
        const params = [];
        this.goodsList.forEach((item) => {
          if (item.amount > 0) {
            params.push(item);
          }
        });
        localStorage.setItem('goodsList', JSON.stringify(params));
        this.$router.push({path: '/shoppingCart'});
      },
      addAmount(id) {
        this.goodsList.map((item, index) => {
          if (item.id === id) {
            this.$set(this.goodsList, index, {
              ...this.goodsList[index],
              amount: this.goodsList[index].amount + 1
            });
          }
        });
      },
      delAmount(id) {
        this.goodsList.map((item, index) => {
          if (item.id === id) {
            if (this.goodsList[index].amount > 0) {
              this.$set(this.goodsList, index, {
                ...this.goodsList[index],
                amount: this.goodsList[index].amount - 1
              });
            }
          }
        });
      },
      getGoodsList() {
        api.post('/goods/list').then((res) => {
          this.banners = res.data.banners;
          this.goodsList = res.data.goodsList.map((item) => {
            return {
              ...item,
              amount: 0
            };
          });
        }).catch((error) => {
          console.log(error);
        });
      },
      aaa() {
        api.post('/user/getOpenId').then(res => {
          console.log(res);
        });
      }
    },
    mounted() {
      this.getGoodsList();
      this.aaa();
    }
  };
</script>

<style lang="scss" scoped="" rel="stylesheet/scss">
  @import "../assets/css/function.scss";

  .swipe-box {
    width: 100%;
    height: px2rem(300px);
  }

  .tip {
    text-indent: px2rem(20px);
    margin-top: px2rem(10px);
    color: #DE2D2E;
  }

  .goods-list {
    min-height: px2rem(600px);
    margin-bottom: px2rem(100px);
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
      font-size: px2rem(24px);
      color: #2B2B2B;
    }

    .good-remain {
      position: absolute;
      left: px2rem(16px);
      bottom: px2rem(40px);
      font-size: px2rem(20px);
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

