import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/HelloFromVux'
import Flexbox from '@/components/Flexbox'
import CityList from '@/components/CityList'
import CityListTest from '@/components/CityListTest'
import DetialInfoTest from '@/components/DetialInfoTest'
import ShopListTest from '@/components/ShopListTest'
import ShopListMode from '@/components/ShopListMode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/flexbox',
      name: 'Flexbox',
      component: Flexbox
    },
    {
      path: '/cityList',
      name: 'CityList',
      component: CityList
    },
    {
      path: '/cityListTest',
      name: 'CityListTest',
      component: CityListTest
    },
    {
      path: '/detialInfoTest',
      name: 'DetialInfoTest',
      component: DetialInfoTest
    },
    {
      path: '/shopListTest',
      name: 'ShopListTest',
      component: ShopListTest
    },
    {
      path: '/shopListMode',
      name: 'ShopListMode',
      component: ShopListMode
    }
  ]
})
