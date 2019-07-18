<template>
  <div>
    <mt-header title="管理收货地址" class="header">
      <mt-button icon="back" slot="left" @click.native="goBack">返回</mt-button>
    </mt-header>
    <div class="content">
      <div class="form">
        <div class="phone bottom">
          <p class="label">收货人</p>
          <input type="text" class="input" placeholder="请输入收货人" v-model="name">
        </div>
        <div class="phone bottom">
          <p class="label">联系电话</p>
          <input type="text" class="input" placeholder="请输入联系电话" v-model="mobile">
        </div>
        <div class="phone bottom">
          <p class="label">所在地区</p>
          <input type="text" class="input" v-model="addressArea" id='city-picker' placeholder='请选择省市区县'>
        </div>
        <div class="phone">
          <p class="label">详细地址</p>
          <textarea class="address" name="address" cols="40" rows="2" v-model="addressDetail"
                    placeholder="请输入详细地址信息"></textarea>
        </div>
      </div>
      <div class="btn">
        <mt-button size="small" class="login" @click="addAddress">保存</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '@/api/api';
  import { Toast  } from 'mint-ui';
  export default {
    data () {
      return {
        name: '',
        mobile: '',
        area: '',
        addressDetail: '',
        addressArea: [],
        cityData: []
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      toRouter (path) {
        this.$router.push({path})
      },
      addAddress() {
        const vm = this;
        api.post('/address/add', {
          name: vm.name,
          mobile: vm.mobile,
          userId: localStorage.getItem('userId'),
          addressArea: vm.addressArea.join(),
          addressDetail: vm.addressDetail
        }).then(res => {
          if (res.code === 200) {
            Toast({
              message: '添加成功',
            });
            vm.$router.push({path: '/address'})
          }
        })
      },
    },
    mounted () {
      const vm = this
      $('#city-picker').cityPicker({
        title: '选择省市区/县',
        onChange: function (picker, values, displayValues) {
          console.log(values, displayValues)
          vm.addressArea = displayValues
        }
      });
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../assets/css/function.scss";

  .content {
    overflow: hidden;
    .form {
      width: 100%;
      overflow: hidden;
      background-color: #ffffff;
      padding: 0 px2rem(24px);
      box-sizing: border-box;
      .phone {
        min-height: px2rem(56px);
        display: flex;
        margin: px2rem(12px) 0;
        .label {
          width: px2rem(130px);
          font-size: px2rem(24px);
          color: #3F3F3F;
          line-height: px2rem(60px);
          white-space: nowrap;
        }
        .input {
          flex: 1;
          height: px2rem(58px);
          color: #989898;
          font-size: px2rem(24px);
          margin-left: px2rem(20px);
          border: none;
        }
        .input:focus, .code:focus {
          outline: none;
        }
        .address {
          min-height: px2rem(58px);
          margin-left: px2rem(20px);
          margin-top: px2rem(16px);
          margin-bottom: px2rem(50px);
          border: none;
          resize: none;
          font-family: 微软雅黑, "Microsoft YaHei", "Helvetica Neue", "Helvetica Neue", Helvetica, "Hiragino Sans GB", tahoma, arial, sans-serif;
          color: #878b8a;
          font-size: px2rem(24px);
        }
        .address:focus {
          outline: none;
        }
      }
      .phone.bottom {
        height: px2rem(60px);
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
    }
  }
</style>

