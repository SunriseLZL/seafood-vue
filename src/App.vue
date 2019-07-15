<template>
  <div id="app">
    <router-view v-if="loadFinish"></router-view>
  </div>
</template>

<script>
  import api from '@/api/api'
  import {MessageBox} from 'mint-ui'

  export default {
    data () {
      return {
        openId: '',
        loadFinish: false
      }
    },
    methods: {
      getOpenId () {
        api.post('/user/getOpenId').then(res => {
          if (res.code === 200) {
            this.openId = res.data.openId;
            if (this.openId === '') {
              window.location.href = 'http://hbzkzpp.cn/api/wx/getOpenId'
            } else {
              localStorage.setItem('openId', this.openId)
              this.loadFinish = true
            }
          } else {
            window.location.href = 'http://hbzkzpp.cn/api/wx/getOpenId'
          }
        }).catch(err => {
          window.location.href = 'http://hbzkzpp.cn/api/wx/getOpenId'
        })
      }
    },
    mounted () {
      this.getOpenId()
    }
  }
</script>

<style>
  #app {
    font-family: 微软雅黑, "Microsoft YaHei", "Helvetica Neue", "Helvetica Neue", Helvetica, "Hiragino Sans GB", tahoma, arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    background-color: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
  }
</style>
