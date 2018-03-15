<template>  
  <div class="tabs">  
    <!--命名路由-->  
    <ul>  
      <!--this inspection reports XML/HTML tags with missing mandatory attrbutes ,you can specify attrbute name that should not  be reported-->  
      <!--home被点击后，一直处于激活状态，因此需要使用精确匹配模式，在router-link中添加exact属性-->  
      <router-link :to="{name:'News'}" tag="li" exact>  
        <div>  
          <span class="icon-newspaper"></span>  
        </div>  
        <div class="icon-text">新闻</div>  
      </router-link>  
      <router-link :to="{name:'Videos'}" tag="li">  
        <div>  
          <span class="icon-play2"></span>  
        </div>  
        <div class="icon-text">视频</div>  
      </router-link>  
      <router-link :to="{name:'Recommend'}" tag="li">  
        <div>  
          <span class="icon-bookmarks"></span>  
        </div>  
        <div class="icon-text">推荐</div>  
      </router-link>  
      <router-link :to="{name:'Me',params:{user:'xu'}}" tag="li">  
        <div>  
          <span class="icon-smile"></span>  
        </div>  
        <div class="icon-text">我</div>  
      </router-link>  
    </ul>  
  </div>  
</template>  
<script>  
  export default {
      
  }  
</script>  
<style lang="stylus" scoped>  
  .tabs   
    position fixed  
    bottom 0  
    left 0  
    background-color #fff  
    box-shadow 0 2px 4px #000
    width 100%  
    .icon-text
        font-size 12px /* 10/75 */
    & > ul, & > ul > li   
      margin 0  
      padding 0  
      
    ul   
      display table  
      width: 100%  
      & > li   
        text-align center  
        font-size 16px  
        display table-cell  
        padding 8px 12px  
        cursor pointer  
        &.router-link-active 
          color #093f86 
          
        & > div   
          font-size 15px  
            
</style>