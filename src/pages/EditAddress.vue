<template>
  <div>
    <mt-header title="修改收货地址" class="header">
      <mt-button icon="back" slot="left" @click.native="goBack">返回</mt-button>
    </mt-header>
    <div class="content">
      <div class="form">
        <div class="phone bottom">
          <p class="label">收货人</p>
          <input type="text" class="input" v-model="name">
        </div>
        <div class="phone bottom">
          <p class="label">联系电话</p>
          <input type="text" class="input" v-model="mobile">
        </div>
        <div class="phone bottom">
          <p class="label">所在地区</p>
          <input type="text" class="input" v-model="addressArea" id='city-picker' placeholder='请选择省市区县'>
        </div>
        <div class="phone">
          <p class="label">详细地址</p>
          <textarea class="address" name="address" cols="40" rows="2" v-model="addressDetail"
                    placeholder="请输入详细地址信息，如道路、门牌号、小区楼栋号、单元室等"></textarea>
        </div>
      </div>
      <div class="btn">
        <mt-button size="small" class="login" @click="addAddress">保存</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '@/api/api'
  import {MessageBox, Toast} from 'mint-ui';
  export default {
    data() {
      return {
        id: '',
        name: '',
        mobile: '',
        addressDetail: '',
        addressArea: [],
        cityData :[]
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
      addAddress() {
        const vm = this;
        api.post('/address/update', {
          name: vm.name,
          mobile: vm.mobile,
          id: vm.id,
          addressArea: vm.addressArea.join(),
          addressDetail: vm.addressDetail
        }).then(res => {
          if (res.code === 200) {
            Toast({
              message: '修改成功'
            });
            vm.$router.push({path: '/address'})
          } else {

          }
        }).catch(err => {

        })
      }
    },
    mounted() {
      this.id = this.$route.query.id;
      this.name = this.$route.query.name;
      this.mobile = this.$route.query.mobile;
      this.addressArea = this.$route.query.addressArea.split(',');
      this.addressDetail = this.$route.query.addressDetail;

      const vm = this;
      $("#city-picker").cityPicker({
        title: "选择省市区/县",
        onChange: function (picker, values, displayValues) {
          console.log(values, displayValues);
          vm.addressArea = displayValues;
        }
      });
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../assets/css/function.scss";

  .content {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin-top: px2rem(88px);
    background-color: #f2f2f2;
    overflow: hidden;
    .form {
      width: 100%;
      overflow: hidden;
      background-color: #ffffff;
      padding: 0 px2rem(24px);
      .phone {
        min-height: px2rem(96px);
        .label {
          float: left;
          width: px2rem(132px);
          margin-top: px2rem(32px);
          font-size: px2rem(30px);
          color: #3F3F3F;
        }
        .input {
          float: left;
          width: px2rem(380px);
          height: px2rem(60px);
          color: #989898;
          font-size: px2rem(30px);
          margin-top: px2rem(24px);
          margin-left: px2rem(30px);
          border: none;
        }
        .input:focus, .code:focus {
          outline: none;
        }
        .code {
          float: right;
          width: px2rem(160px);
          height: px2rem(46px);
          background-color: #ffffff;
          margin-top: px2rem(26px);
          border: px2rem(1px) solid #BEAD8A;
          color: #BEAD8A;
          font-size: px2rem(24px);
          border-radius: 100px;
          padding: 0 px2rem(15px);
        }
        .address {
          float: left;
          margin-left: px2rem(24px);
          margin-top: px2rem(32px);
          margin-bottom: px2rem(70px);
          border: none;
          resize: none;
        }
        .address:focus {
          outline: none;
        }
      }
      .phone.bottom {
        height: px2rem(96px);
        border-bottom: px2rem(1px) solid #DFDFDF;
        .select {
          width: px2rem(400px);
          margin-top: px2rem(14px);
          margin-left: px2rem(24px);
          float: left;
        }
      }
    }
    .btn {
      position: absolute;
      bottom: px2rem(20px);
      left: 0;
      width: 100%;
      height: px2rem(60px);
      padding: 0 px2rem(24px);
      box-sizing: border-box;

      .login {
        width: 100%;
        height: 100%;
        font-size: px2rem(28px);
        color: #FFFFFF;
        border: px2rem(1px) solid #DE2D2E;
        background: #DE2D2E !important;
      }

      .login:focus {
        box-shadow: 0 0 0 2px rgba(190, 173, 138, .2);
      }
    }
  }
</style>
