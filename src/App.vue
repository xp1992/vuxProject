<template>
  <div id="app">
    <router-view></router-view>
    <bottommenu v-show="bottommenuFlg"></bottommenu>
  </div>
</template>

<script>
import bottommenu from '@/components/BottomMenu'

export default {
  name: 'app',
  components: {
    bottommenu
  },
  created () {
    this.bottommenuFlg = true
    if (this.$route.name === 'DetialInfoTest') { // 初始化的时候判定路由，那几个路由不用显示底部菜单
      this.bottommenuFlg = false
    }
  },
  data () {
    return {
      bottommenuFlg: true
    }
  },
  watch: {
    $route: function (newRoute, oldRoute) {
      this.bottommenuFlg = true
      if (newRoute.name === 'DetialInfoTest') { // 监听路由那几个路由不用显示底部菜单
        this.bottommenuFlg = false
      }
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
