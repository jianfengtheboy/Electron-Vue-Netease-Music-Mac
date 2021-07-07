<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-07 17:22:56
 * @LastEditTime: 2021-07-07 17:25:36
-->
<template>
  <div class="infinite-error">
    请求数据失败
    <a href="javascript:;" @click="$attrs.trigger">重试</a>
  </div>
</template>

<script>
export default {
  name: 'infiniteError'
}
</script>

<style lang='less' scoped>
.infinite-error {
  margin: 15px 0;
  text-align: center;
}
</style>

