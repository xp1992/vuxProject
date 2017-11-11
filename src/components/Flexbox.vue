<template>
  <div class="hello">
    <divider>Horizontal</divider>
    <flexbox style="height:40px;">
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <divider>Vertical</divider>
    <flexbox orient="vertical" :margin-left="0">
      <flexbox-item><div class="flex-demo" style="margin-left:0">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo" style="margin-left:0">2</div></flexbox-item>
    </flexbox>
    <flexbox :margin-left=0 style="height: 200px; background-color: #fff;" class="vux-1px-tb vux-1px-l vux-1px-r">
      <flexbox-item class="vux-1px-r" style="height:200px;"></flexbox-item>
      <flexbox-item>
        <flexbox orient="vertical" :margin-left="0">
          <flexbox-item class="vux-1px-b"><div class="flex-demo" style="margin-left:0">3</div></flexbox-item>
          <flexbox-item style="height: 100px;"><!--height: 100% doesnot work here-->
            <flexbox :margin-left="0">
              <flexbox-item class="vux-1px-r"><div class="flex-demo" style="margin-left:0">4</div></flexbox-item>
              <flexbox-item><div class="flex-demo" style="margin-left:0">5</div></flexbox-item>
            </flexbox>
          </flexbox-item>
        </flexbox>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Divider, FlexboxItem, Flexbox } from 'vux'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Divider,
    Flexbox,
    FlexboxItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  margin-bottom: 8px;
  border-radius: 4px;
  -webkit-background-clip: padding-box;
}
</style>
