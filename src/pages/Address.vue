<template>
  <div>
    <mt-header title="新增收货地址" class="header">
      <mt-button icon="back" slot="left" @click.native="goBack">返回</mt-button>
    </mt-header>
    <div class="content">
      <div class="form">
        <div class="section" v-for="item in addressList" @click="selectAdd(item)">
          <div class="info">
            <p class="name">{{item.name}}</p>
            <p class="phone">{{item.mobile}}</p>
            <p class="realAdd">
              {{item.addressArea+item.addressDetail}}
            </p>
          </div>
          <div class="btnGroup">
            <div class="edit">
              <div class="wrap" @click="edit(item)">
                <img src="../../static/images/edit_icon.png" class="pic">
                <span class="font">编辑</span>
              </div>
            </div>
            <div class="edit">
              <div class="wrap" @click="del(item.id)">
                <img src="../../static/images/delete_icon.png" class="pic">
                <span class="font">删除</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn">
      <mt-button size="small" class="login" @click="toRouter('/addAddress')">新增收货地址</mt-button>
    </div>
  </div>
</template>

<script>
  import api from '@/api/api';
  import {MessageBox, Toast} from 'mint-ui';

  export default {
    data() {
      return {
        addressList: []
      };
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      toRouter(path) {
        this.$router.push({path});
      },
      del(id) {
        const vm = this;
        MessageBox.confirm('确定要删除吗?').then(action => {
          api.post('/address/delete', {id: id}).then(res => {
            if (res.code === 200) {
              Toast({
                message: '删除成功'
              });
              vm.init();
            } else {
              Toast({
                message: res.message
              });
            }
          }).catch(err => {
            Toast({
              message: res.message
            });
          });
        });
      },
      edit(item) {
        this.$router.push({path: '/editAddress', query: {...item}});
      },
      add() {
        this.$router.push({path: '/addAddress'});
      },
      selectAdd(item) {
        console.log(item);
        this.$router.push({path: '/confirmOrder', query: {addressId: item.id}});
      },
      init() {
        api.post('/address/select', {'userId': localStorage.getItem('userId') || 'a9755b894fbb4cc59def8455d3902762'}).then(res => {
          if (res.code === 200) {
            this.addressList = res.data;
            console.log(this.addressList);
          } else {
            this.$Message.error(res.message);
          }
        }).catch(err => {
          this.$Message.error(err);
        });
      }
    },
    mounted() {
      this.init();
    }
  };
</script>

<style lang="scss" scoped="" rel="stylesheet/scss">
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
      height: 100%;
      overflow: auto;

      .section {
        width: 100%;
        min-height: px2rem(218px);
        display: flex;
        background-color: #ffffff;
        margin-bottom: px2rem(20px);
        padding-bottom: px2rem(22px);

        .info {
          flex: 6;
          padding-left: px2rem(22px);
          padding-right: px2rem(22px);
          padding-top: px2rem(38px);

          .name {
            float: left;
            font-size: px2rem(24px);
            color: #3F3F3F;
          }

          .phone {
            float: right;
            font-size: px2rem(24px);
            color: #3F3F3F;
          }

          .realAdd {
            float: left;
            margin-top: px2rem(22px);
            font-size: px2rem(24px);
            color: #3F3F3F;
          }
        }

        .btnGroup {
          flex: 4;
          display: flex;

          .edit {
            flex: 1;
            display: flex;
            padding: 0 px2rem(3px);
            justify-content: center;
            align-items: center;

            .wrap {
              flex: 1;
              display: flex;
              height: px2rem(60px);
              overflow: hidden;

              .font {
                flex: 1;
                font-size: px2rem(16px);
                text-align: center;
                /*height: px2rem(50px);*/
                line-height: px2rem(60px);
                color: #A8A8A9;
              }

              .pic {
                float: left;
                width: px2rem(40px);
                height: px2rem(40px);
                /*height: px2rem(50px);*/
                padding: px2rem(4px);
              }
            }
          }
        }
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

</style>
