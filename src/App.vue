<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
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
