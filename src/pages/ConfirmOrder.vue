<template>
  <div>
    <mt-header title="确认订单" class="header">
      <mt-button @click="toShoppingCart" icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="addressFirm" @click="changeAdd" v-if="addressList.length > 0">
      <p class="name">收货人：{{addressInfo.name}}</p>
      <p class="phone">{{addressInfo.mobile}}</p>
      <p class="address">收货地址：{{addressInfo.address}}</p>
    </div>
    <div class="addressSect" v-else>
      <p class="left">您还没有填写收货地址，为了以后更好的购物体验，现在就去添加收货地址吧！</p>
      <p class="right" @click="toAddAddress">去添加&nbsp;&#62;</p>
    </div>
    <div class="row" v-for="good in goodsList">
      <img :src="good.photo" class="picture">
      <div class="right-content">
        <p class="good-name">{{good.title}}</p>
        <!--        <p class="good-remain">仅剩 500 斤</p>-->
        <p class="good-price">批发价<span class="flag">￥</span>{{good.wholesalePrice}}<span class="discount">零售价￥{{good.retailPrice}}</span>
        </p>
      </div>
      <div class="buy">x{{good.amount}}</div>
    </div>
    <div class="sendWay">
      <mt-field label="买家留言" placeholder="（选填）此处给商家留言" :disableClear="true" v-model="orderNote"></mt-field>
    </div>
    <div class="goodMoney">
      <div class="sect">
        <div class="label">商品金额：</div>
        <div class="price">￥{{totalPrice}}</div>
      </div>
      <div class="sect">
        <div class="label">运费：</div>
        <div class="free">免邮</div>
      </div>
      <div class="sect">
        <div class="label">合计：</div>
        <div class="price">￥{{totalPrice}}</div>
      </div>
      <div class="sect money">
        <div class="label">支付方式：</div>
        <div class="free">微信</div>
      </div>
    </div>
    <div class="submit" @click="addOrder">提交订单</div>
  </div>
</template>


<script>
  import api from '@/api/api'
  import {MessageBox, Toast} from 'mint-ui'

  export default {
    data () {
      return {
        orderNote: '',
        orderId: '',
        openId: '',
        payObject: {},
        addressList: [],
        goodsList: [],
        addressInfo: {
          id: '',
          name: '',
          mobile: '',
          address: ''
        }
      }
    },
    computed: {
      totalPrice () {
        let total = 0
        if (this.goodsList && this.goodsList.length > 0) {
          this.goodsList.forEach(item => {
            if (item.amount >= 30) {
              total += item.wholesalePrice * item.amount
            } else {
              total += item.retailPrice * item.amount
            }
          })
        }
        return total.toFixed(2)
      }
    },
    methods: {
      toAddAddress () {
        this.$router.replace({path: '/addAddress', query: {select: 1}})
      },
      toShoppingCart () {
        this.$router.push({path: '/shoppingCart'})
      },
      changeAdd () {
        this.$router.push({path: '/address', query: {change: 1}})
      },
      getAddress () {
        api.post('/address/select', {'userId': localStorage.getItem('userId')}).then(res => {
          if (res.code === 200) {
            this.addressList = res.data
            let addressId = this.$route.query.addressId
            if (addressId) {
              let address = this.addressList.find(item => item.id === addressId)
              this.addressInfo = {
                id: address.id,
                name: address.name,
                mobile: address.mobile,
                address: address.addressArea + address.addressDetail,
              }
            } else {
              this.addressInfo = {
                id: this.addressList[0].id,
                name: this.addressList[0].name,
                mobile: this.addressList[0].mobile,
                address: this.addressList[0].addressArea + this.addressList[0].addressDetail,
              }
            }
          }
        })
      },
      addOrder () {
        if (!this.addressList.length) {
          MessageBox.alert('请先填写收获地址', '提示')
          return false
        }
        // 添加订单获取订单id后支付
        api.post('/order/add', {
          userId: localStorage.getItem('userId'),
          goodsList: this.goodsList.map(item => {
            return {
              'goodsId': item.id,
              'goodsNum': item.amount
            }
          }),
          goodsTotal: this.totalPrice,
          orderNote: this.orderNote,
          addressId: this.addressInfo.id,
        }).then(res => {
          if (res.code === 200) {
            this.orderId = res.data.orderId
            this.wxPay()
          }
        })
      },
      wxPay () {
        api.post('/wx/orderPay', {orderId: this.orderId, openId: this.openId}).then(res => {
          if (res.code === 200) {
            this.payObject = res.data
            if (typeof WeixinJSBridge == 'undefined') {
              if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady, false)
              } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady)
                document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady)
              }
            } else {
              this.onBridgeReady()
            }
          }
        })
      },
      onBridgeReady () {
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', this.payObject,
          function (res) {
            if (res.err_msg === 'get_brand_wcpay_request:ok') {
              MessageBox('提示', '支付成功!')
            } else {
              MessageBox('提示', '支付失败!')
            }
          }
        )
      },
    },
    mounted () {
      this.goodsList = JSON.parse(localStorage.getItem('goodsList'))
      console.log(this.goodsList)
      this.getAddress()
      this.openId = localStorage.getItem('openId')
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
      overflow: hidden;
      padding-left: px2rem(16px);
      position: relative;

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

    .buy {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: px2rem(16px);
    }
  }

  .addressSect {
    width: 100%;
    height: px2rem(100px);
    background-color: #ffffff;
    padding: px2rem(67px) px2rem(28px);
    display: flex;

    .left {
      width: px2rem(400px);
    }

    .right {
      color: #989898;
      margin-top: px2rem(15px);
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
        font-size: px2rem(24px);
      }

      .price {
        float: right;
        font-size: px2rem(24px);
        color: #DE2D2E;
      }

      .free {
        float: right;
        font-size: px2rem(24px);
      }
    }

    .sect.money {
      margin-top: px2rem(20px);
    }
  }

  .submit {
    width: 100%;
    height: px2rem(60px);
    background: #DE2D2E;
    text-align: center;
    line-height: px2rem(60px);
    font-size: px2rem(28px);
    color: #FFFFFF;
    margin-top: px2rem(60px);
  }
</style>
