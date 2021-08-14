/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-11 11:30:05
 * @LastEditTime: 2021-07-11 11:32:42
 */
export default {
  methods: {
    async play(tracks, index) {
      this.$store.dispatch('Play/selectPlay', { tracks, index })
    },
    download(song) {
      this.$store.dispatch('Download/download', song)
    }
  }
}
