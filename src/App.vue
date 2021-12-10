<template>
  <div id="app">
    <div >{{info}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: '配置vue项目'
    }
  }
}
</script>

<style scoped>
#app {
  color: red;
  text-align: center;
}
</style>