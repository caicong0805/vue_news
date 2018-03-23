<template>
  <div class="search">
          <img class="icon" src="https://ss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/wisegame/wh%3D68%2C68/sign=6f7827c6fb36afc30e5937638b35ddfc/0ff41bd5ad6eddc43deddefd35dbb6fd526633a9.jpg" alt="">
      <router-link to="./Search.vue">
          <input class="input" type="text" placeholder="大家都在搜：俄罗斯大选">
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.search
    // background-color red
    .icon
        width 6%
        margin-top .533333rem /* 40/75 */
        margin-left .533333rem /* 40/75 */
    .input
        width 80%
        height 1.466667rem /* 110/75 */
        position absolute
        top .533333rem /* 40/75 */
        right .933333rem /* 70/75 */
        border-radius .7rem /* 45/75 */
        border 0
        background-color #f3f6f8
        color #a8b3ba
        text-align center 
        justify-content center
</style>
