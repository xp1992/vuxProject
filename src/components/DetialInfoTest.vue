<template>
  <div id="city">
    <swiper :list="banner" height="300px" auto loop></swiper>
    <div class="detial"> <!-- 显示像信息的部分 -->
      <h2>{{ admProject.projname }}</h2>
      <div class="price">
				<span>均价：</span> <b>{{ admProject.unitpriceshow }}</b><span>  元/㎡</span>
			</div>
      <div class="store">
				<p>库存：{{ admProject.isonline }}</p>
				<p>运费：{{ admProject.isonline == '1' ? '免运费' : '' }}</p>
			</div>
    </div>
    <tab>
      <tab-item :selected="activeTab === '0'" @on-item-click="clickTabItem(0)">商品简介</tab-item>
      <tab-item :selected="activeTab === '1'" @on-item-click="clickTabItem(1)">商品信息</tab-item>
      <tab-item :selected="activeTab === '2'" @on-item-click="clickTabItem(2)">商品评价</tab-item>
    </tab>
    <div class="bref bundle" ref="bref">
      <p class="d-title"><span>商品简介</span></p>
      <div class="text-detial">
        这是一个测试用的商品简介模板，居然数据库里面没有信息，所以还是算了吧！我就自己手写一个意思下，随便写点东西，
        就这样吧，再多写几个字；怎么的也要凑足1000个字吧。算了，不凑了，此处省略900个字！
      </div>
    </div>
    <div class="bref bundle" ref="info">
      <p class="d-title"><span>商品信息</span></p>
      <div class="content-wrap">
        <div class='content-item'>
          <label class="item-name">【商品名称】：</label>
          <span class="item-value">{{ admProject.projname }}</span>
        </div>
        <div class='content-item'>
          <label class="item-name">【执行标准】：</label>
          <span class="item-value">GT\IS9001</span>
        </div>
        <div class='content-item'>
          <label class="item-name">【生产厂家】：</label>
          <span class="item-value">{{ admProject.developunitname }}</span>
        </div>
        <div class='content-item'>
          <label class="item-name">【材&nbsp;&nbsp;&nbsp;&nbsp;质】：</label>
          <span class="item-value">丝绸、棉</span>
        </div>
        <div class='content-item'>
          <label class="item-name">【产&nbsp;&nbsp;&nbsp;&nbsp;地】：</label>
          <span class="item-value">江苏南通</span>
        </div>
        <div class='content-item'>
          <label class="item-name">【级&nbsp;&nbsp;&nbsp;&nbsp;别】：</label>
          <span class="item-value">特等品</span>
        </div>
        <div class='content-item'>
          <label class="item-name">【生产日期】：</label>
          <span class="item-value">见喷码</span>
        </div>
        <div class='content-item'>
          <label class="item-name">【保&nbsp;质&nbsp;期】：</label>
          <span class="item-value">三年</span>
        </div>
        <div class='content-item'>
          <label class="item-name">【贮存方式】：</label>
          <span class="item-value">避光、干燥处储存</span>
        </div>
      </div>
    </div>

    <div class="bref bundle" ref="rater"> <!-- 商品评价，一个打分的星，加上评语 -->
      <p class="d-title"><span>商品评价</span></p>
      <div class="rater">
        <rater></rater>
      </div>
      <div class="text-detial">
        <span>商家点评：</span>
        这款产品是一个非常完美的产品，不但用了非常好的材料，而且有这独特的制作工艺。
        任何品鉴大师，都不能挑出它的不足，堪称物华之天宝，地灵之精粹。完美，完美。。。
      </div>
    </div>

    <div class="footer"> <!-- 给详情页面弄上底 -->
      <ul class="menu">
        <li>
          <img class="shoppingcart" :src="require('../assets/detialImg/shoppingcart.jpg')">
          <transition name="badge">
            <badge v-show="!this.commonFn.isNullOrBlank(badgeText)" class="badge" :text="badgeText"/>
          </transition>
        </li>
        <li class="button first-button"><x-button type="warn" action-type="button" mini>立即购买</x-button></li>
        <li class="button"><x-button type="warn" action-type="button" @click.native="addToShoppingcart(admProject.projguid)" mini>加入购物车</x-button></li>
      </ul>
    </div>

    <div class="blank"></div>
  </div>
</template>

<script>
// 导入相应的控件
import Swiper from 'vux/src/components/swiper/swiper.vue'
import Tab from 'vux/src/components/tab/tab.vue'
import TabItem from 'vux/src/components/tab/tab-item.vue'
import Rater from 'vux/src/components/rater/index.vue'
import XButton from 'vux/src/components/x-button/index.vue'
import Badge from 'vux/src/components/Badge/index.vue'

export default {
  components: {
    Swiper,
    Tab,
    TabItem,
    Rater,
    XButton,
    Badge
  },
  data () {
    return {
      banner: [
        {
          url: '',
          img: require('../assets/detialImg/detial_swiper_1.jpg'),
          title: '一行白鹭上青天'
        },
        {
          url: '',
          img: require('../assets/detialImg/detial_swiper_2.jpg'),
          title: '无边瀑布潇潇下'
        },
        {
          url: '',
          img: require('../assets/detialImg/detial_swiper_3.jpg'),
          title: '日落浮云遮望眼'
        },
        {
          url: '',
          img: require('../assets/detialImg/detial_swiper_4.jpg'),
          title: '孤松立雪迎客来'
        },
        {
          url: '',
          img: require('../assets/detialImg/detial_swiper_5.jpg'),
          title: '枫叶红于二月花'
        }
      ],
      admProject: {},
      activeTab: '0',
      badgeText: ''
    }
  },
  created () {
    this.getDetilInfo()
  },
  mounted: function () { // 钩子函数，使用methods中的方法，先执行钩子函数
  },
  methods: {
    getDetilInfo: function () {
      let param = { buildingId: '97090310075553451' } // 借用杭州翡翠城的 id
      this.$http.post('/estate/getProjectInfo', param).then(resolve => {
        this.admProject = resolve.data.objValue.admProject
      })
    },
    clickTabItem: function (index) {
      if (this.activeTab !== (index + '')) {
        let obj
        if (index === 0) {
          obj = this.$refs.bref
        }
        if (index === 1) {
          obj = this.$refs.info
        }
        if (index === 2) {
          obj = this.$refs.rater
        }
        window.scrollTo(0, obj.offsetTop - 50)
        // 还需要修改跳转到相应的地方
      }
      this.activeTab = index + ''
    },
    addToShoppingcart: function (str) {
      console.log(str) // 需要调用接口，增加购物车中数量
      // 让购物车里面的数量显示
      this.badgeText = (this.commonFn.isNullOrBlank(this.badgeText) ? 0 : parseInt(this.badgeText)) + 1
    }
  },
  watch: {
  }
}
</script>

<style>
  @import '../assets/css/detialInfo.css';
</style>
