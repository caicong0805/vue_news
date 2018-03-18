<template>
  <div class="my-resume">
    <header class="header">
      关于作者
    </header>
    <section class="resume-card">
      <div class="card-header">
        <img src="" alt="" class="header__avatar">
      </div>
      <h2 class="name">蔡聪</h2>
      <div class="desc">
        <p class="tel">tel:13177896263</p>
        <p class="mail">mail：750746291@qq.com</p>
        <p class="wechat">wechat: caicong</p>
      </div>
      <div class="link-group">
        <a href="https://github.com/caicong0805" class="github">
          <img v-lazy="github" alt="">
        </a>
        <a href="www.weaci.cn" class="resume">
          我的简历
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      avatar: '',
      github: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.my-resume
  position absolute
  top 0
  left 0
  right 0
  height 16.466667rem
  z-index 888
  .header
    width 100%
    text-align center
    margin-top .326667rem
    color #fff
    font-size .544444rem
  .resume-card
    text-align center
    margin-top 1.6rem
    .card-header
      width 100%
      text-align center
      .header__avatar
        width 2rem
        height 2rem
        background-size cover
        border-radius 999px
        border 3px solid #f2f2f2
    .name
      margin-top .3rem
      font-size 1.8rem
      color #333
    .desc
      width 100%
      p
        margin-top .4rem
        font-size 1.4rem
    .link-group
      margin-top 1rem
      position relative
      .github
        text-align center
        font-size 1.4rem
        color #333
        img
          margin-left .3rem
          width 1rem
          height 1rem
          vertical-align middle
      .resume
        margin-top .6rem
        display block
        color #333
        font-size .66667rem
        position relative
</style>
