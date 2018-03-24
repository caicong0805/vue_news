import Vue from 'vue'  
import Router from 'vue-router'  
// import News from '../components/News.vue'  
// import Videos from '../components/Videos.vue'  
// import Recommend from '../components/Recommend.vue'   
// import Me from '../components/Me.vue'  
// import Search from '../components/Search.vue'
  
Vue.use(Router)  
  
export default new Router({  
  //mode: 'history',  
  //base: __dirname,  
  //linkActiveClass: 'active', // 更改激活状态的Class值  
  routes: [  
    {  
      path: '/',  
      name: 'News',  
      component: reslove => require(['../components/News'],reslove)  
    },  
    {  
      path: '/videos',  
      name: 'Videos',  
      component: reslove => require(['../components/Videos'],reslove)  
    },  
    {  
      path: '/recommend',  
      name: 'Recommend',  
      component: reslove => require(['../components/Recommend'],reslove)  
    },  
    {  
      path: '/me',  
      name: 'Me',  
      component: reslove => require(['../components/Me'],reslove)  
    },
    {
      path: '/serach',
      name: 'Search',
      component:reslove => require(['../components/Search'],reslove)
    }
  ]  
})