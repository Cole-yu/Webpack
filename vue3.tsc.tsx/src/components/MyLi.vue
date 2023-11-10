<template>
  <!-- 启用了类型检查和自动补全 -->
  {{ count.toFixed(2) }}
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
    data() {
        return {
            count: 1
        }
    }
})
</script>
