<template>  
  <div id="app">
    <Tabs></Tabs>  
    <div class="content">  
      <router-view></router-view>  
    </div>  
  </div>  
</template>  
<script>  
  import Tabs from "./components/Tabs.vue"
  import Headers from "./components/Headers.vue"
  export default {  
    name: 'app',  
    data(){  
      return {}  
    },  
    components: {
      Tabs,
      Headers
      }  
  }  
</script>  
<style>
  @import'./common/stylus/icon.styl';
  *{  
    padding:0;  
    margin:0;  
  }  
  #app {  
    font-family: 'Avenir', Helvetica, Arial, sans-serif;  
    -webkit-font-smoothing: antialiased;  
    -moz-osx-font-smoothing: grayscale;  
  }  
</style>