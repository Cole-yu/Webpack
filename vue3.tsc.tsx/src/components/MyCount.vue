<template>
    <!-- 启用了类型检查和自动补全 -->
    {{ (x as number).toFixed(2) }}
</template>

<script setup lang='ts'>
let x: string | number = 1
</script>
