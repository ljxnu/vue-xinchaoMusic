<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
      <router-view></router-view>
    <player></player>
  </div>
</template>

<script>
import MHeader from "components/m-header/m-header";
import Tab from "components/tab/tab";
import Player from 'components/player/player'

export default {
  name: "App",
  components: {
    MHeader,
    Tab,
    Player
  }
};
</script>

<style lang="scss">
@import "common/scss/index.scss";
#app {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
