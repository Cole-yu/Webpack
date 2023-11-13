<template>
  <div class="app-wrap">
    <HelloWorld msg="Vite" />
    <Foo />
  </div>  
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Foo from './ts/Foo'
</script>

<style scoped lang="less">
.app-wrap{
  
}
</style>
