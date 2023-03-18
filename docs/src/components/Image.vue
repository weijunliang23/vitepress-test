<script setup lang='ts'>
import {computed, type PropType,type CSSProperties} from 'vue'
const props =  defineProps({
  src: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: "100px"
  },
  height: {
    type: String,
    default: "100px"
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
        width: props.width,
        height: props.height
      }
  }
  return props.style
})
</script>

<template>
  <img class="img--com" :src="src" :alt="alt" :style="styleProp">
</template>

<style>
  .img--com {
    max-width: 100% !important;
  }
</style>
