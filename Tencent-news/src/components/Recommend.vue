<template>
 <div class="head">
    <img src="../assets/search.svg"> 发现
    <text>aa</text>
     <!-- <yaowen></yaowen> -->
 </div>

</template>
<script>
import yaowen from './yaowen'
 export default {
 components: {
     yaowen
 }
 }
</script>
<style lang="stylus" scoped>
.head
    display inline
    img 
        width 1.333333rem /* 100/75 */
        height 1.333333rem /* 100/75 */
        display fixed 

</style>