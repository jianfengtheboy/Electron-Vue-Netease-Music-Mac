<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-08 17:12:07
 * @LastEditTime: 2021-07-08 17:34:12
-->
<template>
  <div class="offline-wrapper">
    <z-icon type="lixian" class="icon" />
    <div class="text">请检查网络连接</div>
  </div>
</template>

<script>
import zicon from '@/baseComponents/zicon'

export default {
  components: {
    zicon
  }
}
</script>

<style lang='less' scoped>
.offline-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .icon {
    font-size: 200px;
    color: #999;
  }
  .text {
    margin-top: 10px;
  }
}
</style>
