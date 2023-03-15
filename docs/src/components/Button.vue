<script setup lang='ts'>
import type {ref,PropType } from 'vue'
  const props = defineProps({
    des: {
      type: [String,Number],
      default: "按钮"
    }
 })
</script>

<template>
  <div>
       {{des}}
  </div>
</template>

<style lang='scss'>

</style>
