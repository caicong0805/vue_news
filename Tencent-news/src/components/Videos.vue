<template>
<div class="app">
    <div class="tab">
        <div class="tab-item" @click="toggleTab('tuijian')">
            <a>推荐</a>
        </div>
        <div class="tab-item" @click="toggleTab('zhibo')">
            <a>直播</a>
        </div>
        <div class="tab-item" @click="toggleTab('gaofang')">
            <a>高效</a>
        </div>
        <div class="tab-item" @click="toggleTab('guoji')">
            <a>国际</a>
        </div>
        <div class="tab-item" @click="toggleTab('shenghuo')">
            <a>生活</a>
        </div>
        <div class="tab-item" @click="toggleTab('caiyi')">
            <a>才艺</a>
        </div>
        <div class="tab-item" @click="toggleTab('qiche')">
            <a>汽车</a>
        </div>        
    </div>
    <div class="content">
        我是内容
    </div>
</div>
</template>

<script>
const ERR_OK = 0;
export default {
    components:{
    },
    data(){
        return{
            videos:{}
        }
    },
    created(){
        this.$http.get('/api/videos').then((response) =>  {
            response = response.body
            console.log(response)
            if(response.body === ERR_OK){
                this.videos = response.data;
                console.log(this.videos)
            }
        })
    }

}
</script>

<style lang="stylus" scoped>
.app
    .tab
        display flex
        width 100%
        height 40px
        line-height 40px
        .tab-item
            flex 1
            text-align center
</style>
