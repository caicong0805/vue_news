<template>
    <div>
    <swipper></swipper>
    <div v-for="item in news" :key="item" class="list">
        <div class="title">{{item.title}}</div>
        <div class="writer">{{item.writer}}</div>
        <img :src="item.pic" alt="" class="pic">
    </div>
    </div>
</template>

<script>
import swipper from './swipper'
export default {
    props:{
        news:{
            type:Object
        }
    },
    components:{
    },
    data(){
        return{
            news:{}
        }
    },
    created(){
        this.$http.get('/api/news').then((response) =>  {
            response = response.body
            // console.log(response)
            this.news = response.data
            console.log(this.news)
            // console.log(response)
            // if(response.body === ERR_OK){
                // this.videos = response.data;
                // console.log(this.videos)
            // }
        })
    },
    components:{
        swipper
    }
}
</script>

<style lang="stylus" scoped>
    .list
        position: relative
        width: 100%
        height: 6.666667rem /* 500/75 */
        margin-bottom: .133333rem /* 10/75 */
        border .00079rem /* 0.1/75 */ solid #efefef 
        border-top none 
        border-left none 
        border-right none 
        .title
            display inline-block
            font-size: 1rem
            font-weight: 500
            width 60%
            margin-left .533333rem /* 40/75 */
            margin-top .666667rem /* 50/75 */
        .writer
            position absolute 
            margin-left .533333rem /* 40/75 */
            margin-top .533333rem /* 40/75 */
            font-size .266667rem /* 20/75 */
            font-weight light
        .pic
            position: absolute
            right 1rem
            top .666667rem /* 50/75 */
            width 7rem
            height 5rem
</style>
