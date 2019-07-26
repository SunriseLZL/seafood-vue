<template>
  <div>
    <router-view></router-view>
    <Foot></Foot>
  </div>
</template>

<script>
  import Foot from './components/foot.vue'

  export default {
    data () {
      return {}
    },
    components: {Foot},
  }
</script>

<style lang="scss" scoped="" rel="stylesheet/scss">
  @import "./assets/css/function.scss";
</style>
