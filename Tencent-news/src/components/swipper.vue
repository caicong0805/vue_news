<template>
 <div>
 <mt-swipe :auto="2000">
  <mt-swipe-item v-for="item in items" :key="item.id">
  <a :href="item.href" rel="external nofollow" >
   <img :src="item.url" class="img"/>
   <span class="desc">{{item.title}}</span>
  </a>
  </mt-swipe-item>
 </mt-swipe>
 </div>
</template>
<script>
 import {Swipe, SwipeItem} from 'mint-ui'
 import 'mint-ui/lib/style.css'
 
 export default {
 components: {
  'mt-swipe': Swipe,
  'mt-swipe-item': SwipeItem
 },
 data () {
  return {
  items: [{
   title: '"掏粪工"戴防毒面具钻粪罐，画面震慑人心',
   href: '1',   url: 'http://img1.gtimg.com/ninja/2/2018/03/ninja152107687478035.jpg'
  }, 
  {
   title: '"渐冻人"霍金的一生，结过两次婚，有三个孩子',
   href: '2',   url: 'http://img1.gtimg.com/ninja/2/2018/03/ninja152107689945292.jpg'
  },{
   title: '男子连撞三人后逃逸，怕担责在家挖坑埋车',
   href: '3',   url: 'http://img1.gtimg.com/ninja/2/2018/03/ninja152107691866705.jpg'
  },{
   title: '五座豪宅占地1500平 建成后家主就没居住过已闲置87年',
   href: '4',   url: 'http://img1.gtimg.com/ninja/2/2018/03/ninja152107696455705.jpg'
  },{
   title: '剑桥大学学院降半旗哀悼霍金 师生排队吊唁',
   href: '5',   url: 'http://img1.gtimg.com/ninja/2/2018/03/ninja152107711193010.jpg'
  }
  ]
  }
 }
 }
</script>
<style scoped>
 img {
 width: 100%;
 }
 .mint-swipe {
 height: 218px;
 }
 .desc {
 font-weight: 600;
 opacity: .9;
 padding: 5px;
 height: 20px;
 line-height: 20px;
 width: 100%;
 color: #fff;
 background-color: gray;
 position: absolute;
 bottom: 0;
 }
</style>