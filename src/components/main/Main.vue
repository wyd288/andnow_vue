
<template>
  <div class="layout">
    <!-- 左侧菜单 -->
    <SiderMenu></SiderMenu>
    <Layout :style="{marginLeft: '200px'}">
      <!-- 右侧内容头 -->
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <Headerbar :breadCrumbs="breadCrumbs" :user="user"></Headerbar>

      </Header>
      <!-- 右侧内容体 -->
      <Content class="index-content">
        <router-view>
        </router-view>
      </Content>
    </Layout>
  </div>
</template>
<script>
import Headerbar from './components/HeaderBar';
import SiderMenu from './components/SiderMenu';
export default {
  data() {
    return {
      breadCrumbs: [],
      user: {},

    }
  },
  components: {
    Headerbar,
    SiderMenu,
  },
  methods: {
    selectMenu(name, params) {
      this.$router.push({
        name: name
      })
    },
    dropdownClick(name) {

    }


  },
  computed: {

  },
  watch: {
    $route() {
      //监听路由信息变化后更新面包屑信息
      this.breadCrumbs = this.$route.matched;

    }

  },
  mounted() {
    // 刷新时,更新面包屑信息变化
    this.breadCrumbs = this.$route.matched

  },

}
</script>


<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

/* 内容区域样式 */
.index-content {
  margin: 10px;
  /* 设置内容区高度：窗口高度减去头部菜单高度 */
  height: calc(100vh - 74px);
  /* 竖直滚动条，必须设置高度 */
  overflow-y: scroll;
}

.border-outline {
  border: 1px solid #121213;
}
/* 头部菜单鼠标滑过样式 */
.head-hover :hover {
  background: rgba(167, 157, 157, 0.1);
  cursor: pointer;
}
.non-hover :hover {
  background: none;
}
</style>