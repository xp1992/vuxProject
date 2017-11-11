<template>
  <div id="bottomMenu" class="home-footer">
    <ul class="menu">
		  <li class="home-bottom">
        <div v-if="showItem === 'home'" @click="clickItem('home')">
		      <img class="home_icon" :src="require('../assets/detialImg/home_icon_2.jpg')"/>
          <span class="am-navbar-label" style="color: #FF8080;">首页</span>
        </div>
        <div v-else @click="clickItem('home')">
          <img class="home_icon" :src="require('../assets/detialImg/home_icon.jpg')"/>
          <span class="am-navbar-label">首页</span>
        </div>
		  </li>
		  <li class="home-bottom">
        <div v-if="showItem === 'shoppingcart'" @click="clickItem('shoppingcart')">
		      <img class="home_icon" :src="require('../assets/detialImg/shoppingcart_icon_2.jpg')"/>
          <span class="am-navbar-label" style="color: #FF8080;">购物车</span>
        </div>
        <div v-else @click="clickItem('shoppingcart')">
          <img class="home_icon" :src="require('../assets/detialImg/shoppingcart_icon.jpg')"/>
          <span class="am-navbar-label">购物车</span>
        </div>
		  </li>
		  <li class="home-bottom">
		    <div v-if="showItem === 'order'" @click="clickItem('order')">
		      <img class="home_icon" :src="require('../assets/detialImg/order_icon_2.jpg')"/>
          <span class="am-navbar-label" style="color: #FF8080;">订单</span>
		    </div>
        <div v-else @click="clickItem('order')">
          <img class="home_icon" :src="require('../assets/detialImg/order_icon.jpg')"/>
          <span class="am-navbar-label">订单</span>
		    </div>
		  </li>
		  <li class="home-bottom">
		    <div v-if="showItem === 'vip'" @click="clickItem('vip')">
		      <img class="home_icon" :src="require('../assets/detialImg/vip_icon_2.jpg')"/>
          <span class="am-navbar-label" style="color: #FF8080;">会员</span>
		    </div>
        <div v-else @click="clickItem('vip')">
          <img class="home_icon" :src="require('../assets/detialImg/vip_icon.jpg')"/>
          <span class="am-navbar-label">会员</span>
		    </div>
		  </li>
		</ul>
  </div>
</template>

<script>
// 给需要的参数设定初值

export default {
  name: 'bottommenu',
  components: {
  },
  data () {
    return {
      showItem: 'home'
    }
  },
  created () {
  },
  mounted: function () { // 钩子函数，使用methods中的方法，先执行钩子函数
  },
  methods: {
    clickItem: function (str) {
      this.showItem = str
      // this.$refs[str + '_text'].style.color = '#FF8080' // 把字体颜色也设置成玫瑰红
    }
  },
  watch: {
  }
}
</script>

<style>
  @import '../assets/css/bottomMenu.css';
</style>
