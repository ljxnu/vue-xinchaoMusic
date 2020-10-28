<template>
    <transition name="search">
        <div class="search">
            <div class="search-box-wrapper">
                <i class="fa fa-angle-left" @click="back"></i>
                <search-box @query="onQueryChange" ref="searchBox"></search-box>
            </div>
          <scroll class="search-scroll-wrapper" ref="scroll" :pullup="pullup" @scrollToEnd="searchMore">
              <div ref="search">
                <div class="search-hot" v-show="!query">
                    <p class="title">热门搜索</p>
                    <span class="search-hot-item" v-for="item in hots" :key="item.id" @click="addQuery(item.first)">{{item.first}}</span>
                </div>
                <div class="shortcut-wrapper" v-show="!query">
                    <div class="search-history" v-show="searchHistory.length"> 
                       <h1 class="title">
                           <span class="text">搜索历史</span>
                           <span class="clear" @click="showConfirm">
                               <i class="icon-clear"></i>
                           </span>
                       </h1>
                       <search-list @select="addQuery" @delete="deleteSearchHistory" :searches="searchHistory"></search-list>
                    </div>
                </div>
              </div>
              <div class="search-result">
            <suggest @select="saveSearch" @refresh="refresh" :query="query" ref="suggest"></suggest>
          </div>
          </scroll>
          <confirm ref="confirm" @confirm="clearSearchHistory" text="是否清空历史记录？" confirmBtnText="清空"></confirm>
      <router-view></router-view>
        </div>

    </transition>
</template>

<script>
import SearchBox from 'base/search-box/search-box'
import Scroll from 'base/scroll/scroll'
import {getSearchHot} from 'api/search'
import Suggest from 'components/suggest/suggest'
import Confirm from 'base/confirm/confirm'
import SearchList from 'base/search-list/search-list'
import {searchMixin, playlistMixin} from 'common/js/mixin'


export default {
    mixins: [searchMixin, playlistMixin],
    data() {
      return {
          pullup: true,
          hots: []

      }
    },
    created() {
        this._getSearchHot()
    },
    methods: {
      back() {
          this.$router.back()
      },
      addQuery(query) {
           this.$refs.searchBox.setQuery(query)
      },
      showConfirm(){
          this.$refs.confirm.show()
      },
      onQueryChange(query){
           this.query = query
      },
      _getSearchHot() {
         getSearchHot().then((res) => {
             this.hots = res.data.result.hots
         })
      },
      saveSearch () {
      this.saveSearchHistory(this.query)
    },
    searchMore () {
      this.$refs.suggest.searchMore()
    },
    refresh () {
      setTimeout(() => {
        this.$refs.scroll.refresh()
      }, 20)
    },
    handlePlaylist (playlist) {
      //const bottom = playlist.length > 0 ? '60px' : ''
      //this.$refs.searchWrapper.style.bottom = bottom
      this.refresh()
    }

    },
    components: {
        SearchBox,
        Scroll,
        Suggest,
        SearchList,
        Confirm
    },
    
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";

.search-enter, .search-leave-active {
  transition: all 0.5s;
}
.search-enter, .search-leave-to {
  transform: translate3d(50%, 0, 0);
  opacity: 0;
}
.search{
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    background: $color-background;
    .search-box-wrapper{
        display: flex;
        background: $color-theme;
        padding: 10px 40px 10px 43px;
        .fa{
            position: absolute;
            left: 5px;
            top: 3px;
            font-size: 30px;
            color: #ffffff;
            padding: 3px 10px;
        }

    }
    .search-scroll-wrapper{
        height: 100%;
        overflow: hidden;
        .search-hot{
            margin: 0 20px;
            .title{
                padding: 15px 5px 0 5px;
                height: 30px;
                line-height: 30px;
                font-size: $font-size-small-x;
                color: $color-text-g;
            }
            span{
                display: inline-block;
                margin: 4px 4px;
                border: 0.8px solid $color-text-ggg;
                border-radius: 5px;
                font-size: $font-size-medium;
                color: $color-text;
                padding: 5px 5px;


            }
        }
        .shortcut-wrapper{
            height: 100%;
            overflow: hidden;
            .search-history{
                margin: 0 20px;
                .title{
                    display: flex;
                    align-items: center;
                    height: 30px;
                    color: $color-text-g;
                    font-size: $font-size-small-x;
                    .text{
                        flex: 1;
                    }
                    .clear{
                        .icon-clear{
                            font-size: $font-size-medium;
                            color: $color-text;
                        }
                    }
                }
            }
        }
    }

}
</style>