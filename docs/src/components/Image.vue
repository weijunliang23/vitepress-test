<script setup lang='ts'>
import {computed, type PropType,type CSSProperties} from 'vue'
const props =  defineProps({
  src: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 100
  },
  style: {
    type: Object as PropType<CSSProperties>,
    default: null
  },
  alt : {
    type: String,
    default: ''
  }
})

const styleProp = computed(()=>{
  if(props.style === null){
      return {
        width: props.width + 'px',
        height: props.height + 'px'
      }
  }
  return props.style
})
</script>

<template>
  <img src="/assets/image/profile.jpg" :alt="alt" :style="styleProp">
</template>

<style scoped lang='scss'>

</style>
