<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-searchBox @query="onQueryChange"></v-searchBox>
    </div>
    <!-- 热搜 -->
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
      <v-scroll class="shortcut" ref="shortcut">
        <div>
          <!-- 热门搜索 -->
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="(item, index) in hotKey" :key="index">
                <span>{{ item.first }}</span>
              </li>
            </ul>
          </div>
          <!-- 搜索历史 -->
          <div class="search-history" v-show="searchHistory.length">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear" @click="clearSearchHistory">
                <i class="iconfont">&#xe601;</i>
              </span>
            </h1>
            <!-- 历史记录列表 -->
            <v-search-list :searches="searchHistory" @delete="deleteSearchHistory"></v-search-list>
          </div>
        </div>
      </v-scroll>
    </div>

    <!-- 搜索结果列表 -->
    <div class="search-result" ref="searchResult" v-show="query">
      <v-search-result :query="query" @select="saveSearch"></v-search-result>
    </div>
  </div>
</template>

<script>
import searchBox from "@/components/searchBox.vue";
import scroll from "@/components/scroll.vue";
import searchList from "@/components/searchList.vue"; //搜索历史
import searchResult from "@/components/searchResult.vue";

import { searchMixin } from '@/common/js/mixin'
import api from '@/api'
import { mapGetters,mapActions } from 'vuex'

export default {
  data() {
    return {
      hotKey: [],
    };
  },
  mixins: [searchMixin],  // 一种混合机制
  components: {
    "v-searchBox": searchBox,
    "v-scroll": scroll,
    "v-search-list": searchList,
    "v-search-result": searchResult
  },
  created() {
    this._getHotKey()
  },
  methods: {
    _getHotKey() {  // 获取热搜
      api.HotSearchKey().then((res) => {
        console.log(res);
         this.hotKey = res.result.hots.slice(0, 10)
      })
    },
    ...mapActions(['deleteSearchHistory', 'clearSearchHistory', 'saveSearchHistory']),
    saveSearch() {
      // 保存历史记录
      this.saveSearchHistory(this.query)
    }
  },
  computed: {
    ...mapGetters(['searchHistory'])
  },
 watch: {
    query(newQuery) {
      if(newQuery) {
        setTimeout(()=> {
          this.$refs.shortcut.refresh()
        },20)
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "../assets/css/function.styl";
.search 
  overflow hidden
  .search-box-wrapper 
    margin px2rem(40px)
  .shortcut-wrapper 
    position fixed
    top px2rem(360px)
    bottom 0
    width 100%
    .shortcut 
      height 100%
      overflow hidden
      .hot-key 
        margin 0 px2rem(40px) px2rem(40px) px2rem(40px)
        .title 
          margin-bottom px2rem(40px)
          font-size 14px
          color hsla(0,0%,100%,.5)
        .item 
          display inline-block
          padding px2rem(10px) px2rem(20px)
          margin 0 px2rem(20px) px2rem(20px) 0
          border-radius 6px
          background #2f3054
          font-size 14px
          color hsla(0,0%,100%,.3)
      .search-history 
        position relative
        margin 0 px2rem(40px)
        .title 
          display flex
          align-items center
          height px2rem(80px)
          font-size 14px
          color hsla(0,0%,100%,.5)
          .text 
            flex 1
          .clear 
            // extend-click()
            .iconfont 
              font-size 18px
              color hsla(0,0%,100%,.3)
  .search-result 
    position fixed
    width 100%
    top px2rem(360px)
    bottom 0
</style>
