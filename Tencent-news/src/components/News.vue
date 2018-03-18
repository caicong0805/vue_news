<template>
<div class="app">
    <Header></Header>
    <div class="tab">
        <div class="tab-item" @click="toggleTab('yaowen')">
            <a v-link="{path:'/yaowen'}">要闻</a>
        </div>
        <div class="tab-item" @click="toggleTab('shipin')">
            <a v-link="{path:'/shipin'}">视频</a>
        </div>
        <div class="tab-item" @click="toggleTab('lianghui')">
            <a v-link="{path:'/lianghui'}">两会</a>
        </div>
        <div class="tab-item">
            <a v-link="{path:'/nanchang'}">南昌</a>
        </div>
        <div class="tab-item">
            <a v-link="{path:'/yule'}">娱乐</a>
        </div>
        <div class="tab-item">
            <a v-link="{path:'/junshi'}">军事</a>
        </div>
        <div class="tab-item">
            <a v-link="{path:'/+'}">+</a>
        </div>        
    </div>
    <div :is="currentTab" keep-alive></div>
</div>
</template>

<script>
import Header from './Headers'
import yaowen from './yaowen'
import shipin from './shipin'
import lianghui from './lianghui'
// import Swipper from './swipper'
const ERR_OK = 0;
export default {
    components:{
        Header,
        yaowen,
        shipin,
        lianghui
    },
    data(){
        return{
            currentTab:'yaowen',
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
    },
    methods:{
        toggleTab: function(tab) {
        this.currentTab = tab; // tab 为当前触发标签页的组件名
        }
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
