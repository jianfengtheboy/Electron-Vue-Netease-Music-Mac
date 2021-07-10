<!--
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-07-08 17:24:40
 * @LastEditTime: 2021-07-08 18:01:02
-->
<template>
  <div class="top-bar">
    <div class="top-bar-logo">
      <img src="../../assets/images/logo.svg" alt="网易云音乐">
    </div>
    <div class="top-bar-main">
      <div class="top-bar-control">
        <!-- <controls /> -->
      </div>
      <div class="top-bar-search">
        <!-- <search-box /> -->
      </div>
      <div class="top-bar-menu">
        <div class="top-bar-menu-user">
          <div class="item">
            <!-- <user-info /> -->
          </div>
          <div class="item">
            <!-- <theme-setting /> -->
          </div>
          <div class="item" @click="$router.push({ path: '/setting' })">
            <a-icon type="setting" class="icon" />
          </div>
          <div class="item" @click="logout" v-if="userId">退出</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'basicHeader',
  components: {

  },
  computed: {
    ...mapGetters('User', ['userId'])
  },
  methods: {
    logout() {
      
    }
  }
}
</script>

<style lang='less' scoped>
.top-bar {
  display: flex;
  height: 100%;
  overflow: hidden;

  .top-bar-logo {
    display: flex;
    align-items: center;
    width: 200px;
    flex: 0 0 200px;
    justify-content: flex-end;
    padding-right: 10px;

    img {
      width: 100px;
    }
  }

  .top-bar-main {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .top-bar-search {
      width: 240px;
      flex: 0 0 240px;
      -webkit-app-region: no-drag;
    }

    .top-bar-control {
      margin-right: 5px;
      -webkit-app-region: no-drag;
      /deep/ .ant-btn {
        height: 24px;
        line-height: 22px;
      }
    }

    .top-bar-menu {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      height: 100%;

      .top-bar-menu-user {
        display: flex;
        -webkit-app-region: no-drag;

        .item {
          display: inline-flex;
          align-items: center;
          padding: 0 10px;
          cursor: pointer;
          transition: all 0.3s;

          &:hover {
            color: rgba(255, 255, 255, 1);
          }

          .ant-badge-count {
            height: 16px;
            line-height: 16px;
            min-width: 16px;
            padding: 0 5px;
            background: #fff;
            color: @primary-color;
            box-shadow: none;
            border-radius: 8px;
          }
          .avatar {
            margin-right: 8px;
            border-radius: 50%;
          }

          .icon {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
