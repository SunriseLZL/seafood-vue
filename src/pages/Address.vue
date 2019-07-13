<template>
  <div>
    <mt-header title="新增收货地址" class="header">
      <mt-button icon="back" slot="left" @click.native="goBack">返回</mt-button>
    </mt-header>
    <div class="content">
      <div class="form">
        <div class="section">
          <div class="info">
            <p class="name">都是分开录</p>
            <p class="phone">16822223151</p>
            <p class="realAdd">
              健康的事故发生可见度发挥，上雕刻技法和告诉大家看法和，士大夫河南山东科技孵化
            </p>
          </div>
          <div class="btnGroup">
            <div class="edit">
              <div class="wrap">
                <img src="../../static/images/edit_icon.png" class="pic">
                <span class="font">编辑</span>
              </div>
            </div>
            <div class="edit">
              <div class="wrap">
                <img src="../../static/images/delete_icon.png" class="pic">
                <span class="font">删除</span>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="info">
            <p class="name">李智龙</p>
            <p class="phone">18758286741</p>
            <p class="realAdd">
              浙江省杭州市萧山区浦沿街道123后
            </p>
          </div>
          <div class="btnGroup">
            <div class="edit">
              <div class="wrap">
                <img src="../../static/images/edit_icon.png" class="pic">
                <span class="font">编辑</span>
              </div>
            </div>
            <div class="edit">
              <div class="wrap">
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
  export default {
    data () {
      return {}
    },
    methods: {
      goBack () {
        this.$router.go(-1)
      },
      toRouter (path) {
        this.$router.push({path})
      }
    },
    mounted () {

    }
  }
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
      overflow: hidden;

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
                width: px2rem(48px);
                /*height: px2rem(50px);*/
                padding: px2rem(5px);
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
    height: px2rem(68px);
    padding: 0 px2rem(24px);
    box-sizing: border-box;
    .login {
      width: 100%;
      height: 100%;
      font-size: px2rem(36px);
      color: #FFFFFF;
      border: px2rem(1px) solid #DE2D2E;
      background: #DE2D2E !important;
    }
    .login:focus {
      box-shadow: 0 0 0 2px rgba(190, 173, 138, .2);
    }
  }

</style>
