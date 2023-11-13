<script setup lang="ts">
import { ref } from 'vue'
import config from '@/config/constant.json';

defineProps<{ msg: string }>()

const count = ref(config.age)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>Edit</p>
  </div>
</template>

<style scoped>

</style>
