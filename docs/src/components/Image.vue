<script setup lang='ts'>
import {computed, type PropType,type CSSProperties} from 'vue'
const props =  defineProps({
  srcType: {
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

// const srcList = {
//   'surprise' : '/assets/image/surprise.webp', html惊讶
//   'renderHtml' : '/assets/image/renderHtml.jpg', 渲染流程
// }
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
  <img v-if="srcType === 'surprise'" class="img--com" src="/assets/image/surprise.webp" :alt="alt" :style="styleProp">
  <img v-if="srcType === 'renderHtml'" class="img--com" src="/assets/image/renderHtml.jpg" :alt="alt" :style="styleProp">
  <img v-if="srcType === 'totalStyle'" class="img--com" src="/assets/image/total-style.jpg" :alt="alt" :style="styleProp">
  <img v-if="srcType === 'profileOverflow'" class="img--com" src="/assets/image/profile-overflow.jpg" :alt="alt" :style="styleProp">
</template>

<style>
  .img--com {
    max-width: 100% !important;
  }
</style>
