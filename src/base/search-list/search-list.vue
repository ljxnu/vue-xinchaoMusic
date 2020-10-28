<template>
  <div class="search-list" >
    <transition-group name="list" tag="ul">
       <li class="search-item" v-for="item in searches" :key="item" @click="selectItem(item)">
           <span class="text">{{item}}</span>
            <span class="icon" @click="deleteOne(item)">
                <i class="icon-delete"></i>
            </span>
       </li>
    </transition-group>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    searches: {
      type: Array
    }
  },
  methods: {
    selectItem (item) {
      this.$emit('select', item)
    },
    deleteOne (item) {
      this.$emit('delete', item)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~common/scss/variable";
@import "~common/scss/mixin";
.search-list{
    .search-item{
        display: flex;
        align-items: center;
        height: 35px;
        font-size: 14px;
        .text{
            flex: 1;
            color: $color-text;
        }
        .icon{
            font-size: $font-size-small;
            color: $color-text;
        }
    }

}
</style>
