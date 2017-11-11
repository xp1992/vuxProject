<template>
  <div id="city">
    <swiper :list="homeBanner" height="220px" :show-desc-mask="false" auto loop></swiper>
    <search v-model="searchWord" :autoFixed="false"></search>
  </div>
</template>

<script>
// 导入UI控件
import Swiper from 'vux/src/components/swiper/swiper.vue'
import Search from 'vux/src/components/search/index.vue'

export default {
  components: {
    Swiper,
    Search
  },
  data () {
    return {
      homeBanner: [
        {
          url: '',
          img: require('../assets/detialImg/home_banner_1.jpg'),
          title: ''
        },
        {
          url: '',
          img: require('../assets/detialImg/home_banner_2.jpg'),
          title: ''
        },
        {
          url: '',
          img: require('../assets/detialImg/home_banner_3.jpg'),
          title: ''
        }
      ],
      searchWord: ''
    }
  },
  created () {
  },
  mounted: function () { // 钩子函数，使用methods中的方法，先执行钩子函数
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style>
</style>
