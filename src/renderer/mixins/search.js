/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-11 11:31:11
 * @LastEditTime: 2021-07-11 11:31:55
 */
export default {
  data() {
    return {
      spinning: true
    }
  },
  props: {
    result: {
      type: Object,
      default() {
        return null
      }
    }
  },
  watch: {
    result(newVal) {
      if (newVal) {
        this.normalData()
      }
    }
  },
  mounted() {
    this.normalData()
  }
}
