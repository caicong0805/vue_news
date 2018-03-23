<template>  
  <div id="app">
    <Tabs></Tabs>  
    <div class="content">  
      <router-view></router-view>  
    </div>  
  </div>  
</template>  
<script>
  const ERR_OK = 0
  import Serach from './components/Search.vue'
  import Tabs from "./components/Tabs.vue"
  import Headers from "./components/Headers.vue"
  export default {  
    name: 'app',  
    data(){  
      return {}  
    }, 
    created(){
      this.$http.get('/api/videos').then((response) => {
        response = response.json();
        if(response.errno === ERR_OK){
          this.videos = response.data
          console.log(this.videos)
        }
      })
    },
    components: {
      Tabs,
      Headers,
      Serach
      }  
  }  
</script>  
<style>
  @import'./common/stylus/icon.styl';
  *{  
    padding:0;  
    margin:0;  
  }  
</style>