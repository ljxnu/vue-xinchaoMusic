<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span>排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span>歌手</span>
    </router-link>
  </div>
</template>

<script>
export default {};   
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";
.tab {
  display: flex;
  justify-content: space-around;
  text-align: center;
  background: $color-theme;
  height: 44px;
  line-height: 44px;
  font-size: $font-size-medium;
  .tab-item {
    text-align: center;
    color: $color-text-l;
    span {
      padding-bottom: 3px;
    }
    &.router-link-active {
      span {
        font-weight: bold;
        color: $color-text-l;
        border-bottom: 2px solid $color-text-l;
      }
    }
  }
}
</style>
