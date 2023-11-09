<template>
    <button class="btn" @click="clickHandle">clicked {{ count }} times</button>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue'

onMounted(() => {
    console.log('mount');
})

const count = ref(0)

const clickHandle = () => {
    count.value++
}
</script>

<style lang="less" scoped>
    .btn{
        width: 2.4rem;
        height: 0.64rem;
        line-height: 0.64rem;
        font-size: 0.32rem;
        color: #ff0000;
    }
</style>

