<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-02 13:21:42
 * @LastEditTime: 2021-07-02 16:35:23
-->
<template>
  <a-config-provider :locale="locale">
    <a-layout class="basic-layout">
      <a-layout-header class="basic-layout-header">

      </a-layout-header>

      <a-layout>
        <a-layout-sider class="basic-layout-sider" :width="siderWidth">
          <div ref="handle" class="split-handle"></div>

        </a-layout-sider>
        <a-layout-content class="basic-layout-content">

        </a-layout-content>
      </a-layout>

      <a-layout-footer class="basic-layout-footer">
        
      </a-layout-footer>

    </a-layout>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'

const SIDER_WIDTH_DEFAULT = 200

export default {
  data () {
    return {
      locale: zhCN,
      refresh: false,
      keepAliveExcludeList: ['video', 'mv', 'events'],
      siderWidth: SIDER_WIDTH_DEFAULT
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../styles/color.scss';

.basic-layout {
  height: 100vh;

  .basic-layout-header,
  .basic-layout-footer {
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 0;
    z-index: 22;
  }

  .basic-layout-header {
    background: $primary-color;
    color: #eee;
    -webkit-app-region: drag;
  }

  .basic-layout-footer {
    border-top: 1px solid #ddd;
  }

  .ant-layout-has-sider {
    height: calc(100vh - 100px);
  }

  .basic-layout-sider {
    position: relative;
    background: none;
    box-shadow: none;
    overflow-x: hidden;
    overflow-y: hidden;
    .split-handle {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 5px;
      border-right: 1px solid #ddd;
      cursor: col-resize;
    }
  }
  .basic-layout-content {
    background: #f5f5f7;
  }
}
</style>
