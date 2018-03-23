import Vue from 'vue'  
import Router from 'vue-router'  
import News from '../components/News.vue'  
import Videos from '../components/Videos.vue'  
import Recommend from '../components/Recommend.vue'   
import Me from '../components/Me.vue'  
import Search from '../components/Search.vue'
  
Vue.use(Router)  
  
export default new Router({  
  //mode: 'history',  
  //base: __dirname,  
  //linkActiveClass: 'active', // 更改激活状态的Class值  
  routes: [  
    {  
      path: '/',  
      name: 'News',  
      component: News  
    },  
    {  
      path: '/videos',  
      name: 'Videos',  
      component: Videos  
    },  
    {  
      path: '/recommend',  
      name: 'Recommend',  
      component: Recommend  
    },  
    {  
      path: '/me',  
      name: 'Me',  
      component: Me  
    },
    {
      path: '/serach',
      name: 'Search',
      component:Search
    }
  ]  
})