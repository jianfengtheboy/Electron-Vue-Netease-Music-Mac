<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-08 17:13:56
 * @LastEditTime: 2021-07-08 17:15:14
-->
<template>
  <my-icon :type="`icon-${type}`" />
</template>

<script>
import { Icon } from 'ant-design-vue'

const iconURL = "https://at.alicdn.com/t/font_1188071_1m1k6mct6ob.js"

let MyIcon = Icon.createFromIconfontCN({
  scriptUrl: iconURL
})

export default {
  components: {
    MyIcon
  },
  props: {
    type: {
      type: String,
      required: true
    }
  }
}
</script>
