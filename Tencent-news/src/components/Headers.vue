<template>
  <div class="wrapper">
    <el-autocomplete size="small"
                     v-model="msg"
                     :fetch-suggestions="querySearchAsync"
                     placeholder="请输入内容..."
                     @select="handleSelect">
      <i slot="suffix" class="el-input__icon el-icon-close" @click="msg=''"></i>
    </el-autocomplete>
  </div>
</template>

<script>
import Vue from 'vue'
  import {Button, Select, Input, Autocomplete} from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
//   import {get_hot, search_movie} from "../api/movie_api";

  Vue.component(Button.name, Button)
  Vue.component(Select.name, Select)
  Vue.component(Input.name, Input)
  Vue.component(Autocomplete.name, Autocomplete)
export default {
    name: "search",
    data() {
      return {
        movie_list: [],
        msg: '',
      };
    },
    components: {},
    methods: {
      clear() {
        console.log('clear')
      },
      async loadAll() {
        let list = await get_hot()
        // console.log('hot list', list)
        return list
      },
      async querySearchAsync(queryString, cb) {

        if (this.msg.length == 0) {
          this.movie_list = await get_hot()
        } else {
          this.movie_list = await search_movie(this.msg)
        }
        let results = []
        for (let i of  this.movie_list) {
          // console.log(i)
          results.push({
            value: i['alt_title'],
            movie_id: i['id'],
          })
        }
        cb(results)
      },

      handleSelect(item) {
        // console.log('点击的电影是', item['movie_id']);
        this.$emit('change_movie_id', item['movie_id'])
      }
    },
    mounted() {
      this.movie_list = this.loadAll();
    }
  }
</script>

<style lang="stylus" scoped>
    .wrapper 
        display flex
        justify-content center

    /*margin: 5px;*/
  
</style>
