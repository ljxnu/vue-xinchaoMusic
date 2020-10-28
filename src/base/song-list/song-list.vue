<template>
    <div class="song-list">
        <ul>
            <li class="item" v-for="(song, index) in songs" :key="song.id" @click="selectItem(song, index)">
                <p class="count">{{index + 1}}</p>
               <div class="content">
                   <h2 class="name">{{song.name}}</h2>
                   <p class="desc">{{getDesc(song)}}</p>
               </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        songs:{
            type:Array
        }
    },
    methods: {
        selectItem(item, index) {
            this.$emit('select', item, index)
        },
        getDesc(song) {
            if(song.ar) {
                return `${song.ar[0].name}`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";
.song-list {
  .item {
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 60px;
    border-bottom: 1px solid rgb(228, 228, 228);
    .count {
      flex: 0 0 50px;
      width: 50px;
      text-align: center;
      color: $color-text-g;
    }
    .content {
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .name {
        margin-top: 4px;
        width: 80%;
        @include no-wrap();
        color: $color-text;
      }
      .desc {
        @include no-wrap();
        // margin-top: 3px;
        width: 80%;
        font-size: 12px;
        color: $color-text-g;
      }
    }
  }
}
</style>