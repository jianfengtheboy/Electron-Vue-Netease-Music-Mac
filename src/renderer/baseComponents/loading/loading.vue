<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-07 16:51:40
 * @LastEditTime: 2021-07-07 17:19:15
-->
<template>
  <div class="loading-wrapper">
    <slot>
      <playing />
    </slot>
    <div v-if="$slots && $slots.text">
      <slot name="text"></slot>
    </div>
    <div v-else>{{text}}</div>
  </div>
</template>

<script>
import playing from '../playing/playing.vue'

export default {
  name: 'loading',
  components: {
    playing
  },
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='less' scoped>
.loading-wrapper {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
