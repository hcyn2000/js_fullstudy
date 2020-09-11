<template>
<!-- 搜索框 -->
  <div class="search-box">
    <i class="iconfont">&#xe637;</i>
    <input type="text" ref="query" class="box" :placeholder="placeholder" v-model="query" />
    <i class="iconfont icon-dismiss" v-show="query" @click="clear">&#xe641;</i>
  </div>
</template>

<script>
import { debounce } from "@/common/js/util.js"

export default {
  props:{
    placeholder: {
      type: String,
      default: '搜索歌曲、歌手'
    }
  },
  data() {
    return {
      query: ''
    };
  },
  methods: {
    clear() {
      this.query = ''
    },
    blur() {
      this.$refs.query.blur()
    },
    setQuery(query) {
      this.query = query
    }
  },
  created() {
    this.$watch('query', debounce((newQuery) => { //$watch监听事件 监听数据源里的query
      // console.log(newQuery, oldQuery);
      this.$emit('query', newQuery)   // 抛出一个query事件
    },300))
  }
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl';
.search-box
  display flex
  align-items center
  width 100%
  padding 0 px2rem(14)
  box-sizing border-box
  height px2rem(74)
  background #2f3054
  border-radius 6px
  .iconfont
    font-size 20px
    color #6b6a6a
  .box
    flex 1
    margin 0 5px
    line-height px2rem(36)
    background #2f3054
    color #ffffff
    font-size 14px
    outline 0
  .icon-dismiss
    font-size 15px
    margin-right px2rem(10)
</style>