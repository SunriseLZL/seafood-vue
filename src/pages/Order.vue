<template>
  <div>
    <mt-header title="我的订单" class="header"></mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">未付款</mt-tab-item>
      <mt-tab-item id="3">已付款</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" class="m-bottom">
        <div class="lists" v-if="orderList.length" v-for="order in orderList" @click="getPay(order)">
          <p class="list-no">订单号：{{order.orderCode}}
            <span v-if="order.status === 1">（未付款）</span>
            <span v-if="order.status === 2">（已付款）</span>
          </p>
          <div class="row" v-for="item in order.goodsInfo">
            <img :src="item.photo" class="picture">
            <div class="right-content">
              <p class="good-name">{{item.title}}</p>
              <!--              <p class="good-remain">仅剩 500 斤</p>-->
              <p class="good-price">批发价<span class="flag">￥</span>{{item.goodsWholesalePrice}}<span class="discount">零售价￥{{item.goodsRetailPrice}}</span>
              </p>
            </div>
            <div class="buy">x{{item.goodsBuyNum}}</div>
          </div>
          <p class="total">总价：￥{{order.goodsTotal}}</p>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="m-bottom">
        <div class="lists" v-if="order.status === 1" v-for="order in orderList"  @click="getPay(order)">
          <p class="list-no">订单号：{{order.orderCode}}
            <span v-if="order.status === 1">（未付款）</span>
            <span v-if="order.status === 2">（已付款）</span>
          </p>
          <div class="row" v-for="item in order.goodsInfo">
            <img :src="item.photo" class="picture">
            <div class="right-content">
              <p class="good-name">{{item.title}}</p>
              <!--              <p class="good-remain">仅剩 500 斤</p>-->
              <p class="good-price">批发价<span class="flag">￥</span>{{item.goodsWholesalePrice}}<span class="discount">零售价￥{{item.goodsRetailPrice}}</span>
              </p>
            </div>
            <div class="buy">x{{item.goodsBuyNum}}</div>
          </div>
          <p class="total">总价：￥{{order.goodsTotal}}</p>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3" class="m-bottom">
        <div class="lists" v-if="order.status === 2" v-for="order in orderList">
          <p class="list-no">订单号：{{order.orderCode}}
            <span v-if="order.status === 1">（未付款）</span>
            <span v-if="order.status === 2">（已付款）</span>
          </p>
          <div class="row" v-for="item in order.goodsInfo">
            <img :src="item.photo" class="picture">
            <div class="right-content">
              <p class="good-name">{{item.title}}</p>
              <!--              <p class="good-remain">仅剩 500 斤</p>-->
              <p class="good-price">批发价<span class="flag">￥</span>{{item.goodsWholesalePrice}}<span class="discount">零售价￥{{item.goodsRetailPrice}}</span>
              </p>
            </div>
            <div class="buy">x{{item.goodsBuyNum}}</div>
          </div>
          <p class="total">总价：￥{{order.goodsTotal}}</p>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import api from '@/api/api';
  import { Indicator } from 'mint-ui';
  export default {
    data() {
      return {
        selected: '1',
        openId: '',
        orderId: '',
        payObject: {},
        orderList: []
      }
    },
    methods: {
      getOrder() {
        Indicator.open();
        api.post('/order/select', {"userId": localStorage.getItem('userId')}).then((res) => {
          console.log(res);
          this.orderList = res.data.orderList;
          Indicator.close();
        }).catch((error) => {
          console.log(error);
          Indicator.close();
        });
      },
      getPay(item) {
        if (item.status === 1) {
          this.orderId = item.orderId;
          this.wxPay()
        }
      },
      wxPay() {
        api.post('/wx/orderPay', {orderId: this.orderId, openId: this.openId}).then(res => {
          if (res.code === 200) {
            this.payObject = res.data;
            if (typeof WeixinJSBridge == "undefined") {
              if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false);
              } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady);
              }
            } else {
              this.onBridgeReady();
            }
          }
        })
      },
      onBridgeReady() {
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', this.payObject,
          function (res) {
            if (res.err_msg === "get_brand_wcpay_request:ok") {
              MessageBox('提示', '支付成功!');
            } else {
              MessageBox('提示', '支付失败!');
            }
          }
        );
      },
    },
    mounted() {
      this.getOrder()
    },
    created() {
      this.selected = this.$route.query.tab || '1';
      this.openId = localStorage.getItem('openId');
    }
  }
</script>

<style lang="scss" scoped="" rel="stylesheet/scss">
  @import "../assets/css/function.scss";

  .mint-tab-item.is-selected {
    border-bottom: 3px solid #DE2D2E;
    color: #DE2D2E;
  }

  .m-bottom{
    margin-bottom: px2rem(100px);
  }

  .lists {
    background-color: #f2f2f2;
    overflow: hidden;
    padding-top: px2rem(20px);
    padding-bottom: px2rem(20px);
    margin-top: px2rem(6px);

    .list-no {
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

  .none-order {
    text-indent: px2rem(16px);
  }

  .total {
    margin-right: px2rem(30px);
    color: #DE2D2E;
    text-align: right;
  }
</style>
