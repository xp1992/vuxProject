<template>
  <div id="city">
    <!-- <header-item message="城市列表" backUrl="/"></header-item> -->
    <search v-model="searchWord" @on-focus="searchFocus" @on-cancel="cencalFocun"></search>
    <div style="height: 44px;" ref="line"></div>
    <group v-for="x in objCitys" :key="x.start" :title="x.start" :ref="x.start">
      <cell-box v-for="y in x.citys" :key="y.id">{{ y.areaName }}</cell-box>
    </group>
    <aside class="left">
      <p v-for="x in objCitys" :key="x.start" class="letter" @click="navigate(x.start)">{{ x.start }}</p>
    </aside>
    <div ref="tip">{{ tipString }}</div>
  </div>
</template>

<script>
import Group from 'vux/src/components/group/index.vue'
import CellBox from 'vux/src/components/cell-box/index.vue'
import Search from 'vux/src/components/search/index.vue'
import Tip from 'vux/src/components/tip/index.vue'
import XHeader from 'vux/src/components/x-header/index.vue'

// import pinyin from 'pinyin'

// 给需要的参数设定初值
// var objCitys = []
// let showCity = []
var bakCitys

export default {
  components: {
    Group,
    CellBox,
    Search,
    Tip,
    XHeader
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      objCitys: [],
      searchWord: '',
      tipString: ''
    }
  },
  created () {
    // let showCity = []
    this.getDefaultCitys()
  },
  mounted: function () { // 钩子函数，使用methods中的方法，先执行钩子函数
  },
  methods: {
    getDefaultCitys: function () {
      this.$http.post('home/cityList').then(resolve => {
        bakCitys = resolve.data.objValue
        this.objCitys = this.sortCitys(resolve.data.objValue)
        // $('#line').hide()
        this.$refs.line.style.display = 'none'
      })
    },
    sortCitys: function (citys) {
      let showCitys = []
      let sortStarts = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      for (let star of sortStarts) { // 对26个字母进行排序
        let city1 = {
          start: star,
          citys: []
        }
        for (let temp of citys) { // 对城市列表进行排序
          if (star === temp.pyName.substring(0, 1).toUpperCase()) {
            city1.citys.push(temp)
          }
        }
        showCitys.push(city1)
      }
      showCitys = showCitys.filter(function (value) {
        return value.citys.length > 0
      })
      return showCitys
    },
    searchFocus: function () {
      this.$refs.line.style.display = 'flex'
    },
    cencalFocun: function () {
      this.$refs.line.style.display = 'none'
    },
    navigate: function (a) {
      this.tipString = a // 设置显示的数字
      this.$refs.tip.className = 'tip' // 设置显示的class
      let ctx = this
      setTimeout(function () { ctx.$refs.tip.className = '' }, 500) // 设置显示多少秒后消失
      // let obj2 = this.getDomObj(a)
      let obj = this.$refs[a]
      // console.log(obj)
      // console.log(obj[0].$el.offsetTop)
      window.scrollTo(0, obj[0].$el.offsetTop - 60)
    }
  },
  watch: {
    searchWord: function (newCitySearch) {
      let nowCitys = bakCitys.filter(function (value) {
        return value.areaName.indexOf(newCitySearch) > -1
      })
      this.objCitys = this.sortCitys(nowCitys)
    }
  }
}
</script>

<style>
  aside.left {
    position: fixed; 
    top: 53px;
    left: 90%;
  }
  p.letter {
    width: 15px;
    padding: 3px;
    text-align: center;
    color: #aaaaa7
  }
  .tip {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 1px solid #333333;
    width: 70px;
    height: 70px;
    z-index: 10;
    text-align: center;
    line-height: 70px;
    font-size: 40px;
    opacity: 0.7;
  }
</style>
