<template>
  <div>
    <mt-header :title="`购物车(${totalCount})`" class="header">
      <mt-button slot="right" @click="editAble = true" v-if="!editAble">编辑</mt-button>
      <mt-button slot="right" @click="editAble = false" v-else>完成</mt-button>
    </mt-header>

    <div class="goods-list">
      <div class="row" v-for="(good,index) in goodsList">
        <div class="circle" :class="{'active':good.select}" @click="choose(good.id)">
          <div class="core">
            <i class="fa fa-check-circle fa-fw"></i>
          </div>
        </div>
        <img :src="good.photo" class="picture" @click="getIndex(index)">
        <div class="right-content">
          <p class="good-name">{{good.title}}</p>
          <p class="good-remain">仅剩 {{good.num}} {{unitDict[good.unit]}}</p>
          <p class="good-price">零售<span class="flag">￥</span>{{good.retailPrice}}<span class="discount">批发￥{{good.wholesalePrice}}</span>
          </p>
        </div>
        <div class="buy">
          <div class="core-buy" v-if="editAble">
            <div class="circle-plus" @click="delAmount(good.id)"><i class="fa fa-minus-circle fa-fw"></i></div>
            <input placeholder="0" class="input-number" v-model="good.amount"/>
            <div class="circle-plus" @click="addAmount(good.id)"><i class="fa fa-plus-circle fa-fw"></i></div>
          </div>
          <div class="core-buy" v-else>x{{good.amount}}</div>
        </div>
      </div>
    </div>

    <div class="selection">
      <div class="circle" :class="{'active':all}" @click="pickAll">
        <div class="core">
          <i class="fa fa-check-circle fa-fw"></i>
        </div>
      </div>
      <p class="all" @click="pickAll">全选</p>
      <p class="clean">合计：</p>
      <p class="price">￥{{totalPrice}}</p>
      <div class="del">
        <div class="btn-save" v-if="false">预约</div>
        <div class="btn-save"></div>
        <div class="btn-buy" @click="submitOrder">下单</div>
      </div>
    </div>
  </div>

</template>

<script>
  import api from '@/api/api';
  import {MessageBox, Toast} from 'mint-ui';

  export default {
    data() {
      return {
        food_count: 10,
        selectCount: 0,
        editAble: false,
        goodsList: [],
        unitDict: {
          '1': '斤',
          '2': '袋',
          '3': '只',
          '4': '桶',
        }
      };
    },
    computed: {
      all() {
        for (let i = 0; i < this.goodsList.length; i++) {
          if (!this.goodsList[i].select) {
            return false;
          }
        }
        return true;
      },
      totalCount() {
        return this.goodsList.length;
      },
      totalPrice() {
        let total = 0;
        let amount = this.goodsList.length;
        if (!amount) {
          return 0;
        }
        this.goodsList.forEach(item => {
          if (item.select) {
            if (item.amount >= 30) {
              total += item.wholesalePrice * item.amount;
            } else {
              total += item.retailPrice * item.amount;
            }
          }
        });
        return total.toFixed(2);
      }
    },
    methods: {
      toShoppingCart() {
        this.$router.push({path: '/shoppingCart'});
      },
      getIndex(index) {
        console.log(index);
      },
      addAmount(id) {
        this.goodsList.map((item, index) => {
          console.log(item, id);
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
      submitOrder() {
        let count = 0;
        const goodsList = [];
        this.goodsList.map(item => {
          console.log(item);
          if (item.select) {
            count++;
            goodsList.push({
              ...item
            });
          }
        });
        this.selectCount = count;
        if (!this.totalPrice) {
          MessageBox.alert('购物车内商品数量为空', '提示');
          return false;
        }
        if (this.selectCount > 0) {
          localStorage.setItem('goodsList', JSON.stringify(goodsList));
          this.$router.push({path: '/confirmOrder'});
        } else {
          MessageBox.alert('您还未选择商品哦', '提示');
          return false;
        }
      },
      choose(id) {
        this.goodsList.map((item, index) => {
          if (item.id === id) {
            this.$set(this.goodsList, index, {
              ...this.goodsList[index],
              select: !this.goodsList[index].select
            });
          }
        });
      },
      pickAll() {
        if (this.all) {
          this.goodsList.map((item, index) => {
            this.$set(this.goodsList, index, {
              ...this.goodsList[index],
              select: false
            });
          });
        } else {
          this.goodsList.map((item, index) => {
            this.$set(this.goodsList, index, {
              ...this.goodsList[index],
              select: true
            });
          });
        }
      },
    },
    mounted() {
      this.goodsList = JSON.parse(localStorage.getItem('goodsList'));
      console.log(this.goodsList);
    }
  };
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
      display: block;

      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }

    .circle {
      width: px2rem(36px);
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
        width: px2rem(28px);
        height: px2rem(28px);
        background-color: #ffffff;
        border-radius: 50%;
        border: px2rem(2px) solid #DE2D2E;
        color: #de2d2e;
        font-size: px2rem(34px);
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
    margin-bottom: px2rem(170px);
  }

  .selection {
    position: fixed;
    right: 0;
    bottom: px2rem(80px);
    width: 100%;
    height: px2rem(80px);
    background: #FFFFFF;
    display: flex;
    align-items: center;

    .circle {
      width: px2rem(36px);
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
        width: px2rem(30px);
        height: px2rem(30px);
        background-color: #ffffff;
        border-radius: 50%;
        border: px2rem(2px) solid #DE2D2E;
        color: #de2d2e;
        font-size: px2rem(36px);
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
        /*background: #F99D27;*/
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
