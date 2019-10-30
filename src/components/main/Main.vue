
<template>
  <div class="layout">
    <Sider class="sider">
      <!-- 左侧上方logo -->
      <Row class="logo-row" type="flex" align="middle" justify="center">
        <Col span="2">
        <!-- <Avatar src="../../static/images/泛知亦学.png" shape="square" size="45" /> -->
        </Col>
        <Col span="20" style="color:#ffffff">
        Andnow Admin
        </Col>
        <Col span="2">
        </Col>
      </Row>
      <!-- 左侧菜单栏 -->
      <Menu :active-name="activeMenuName" theme="dark" width="auto" ref="menus" :open-names="openMenuNames" accordion @on-select="selectMenu">
        <Submenu name="dashboard">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            首页面板
          </template>
          <MenuItem name="basedata" to="/dashboard/basedata">基础数据</MenuItem>
          <MenuItem name="org" to="/dashboard/org">组织管理</MenuItem>
          <MenuItem name="register">注册页面</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            用户管理
          </template>
          <MenuItem name="2-1">Option 1</MenuItem>
          <MenuItem name="2-2">Option 2</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>
            供应链管理
          </template>
          <MenuItem name="3-1">Option 1</MenuItem>
          <MenuItem name="3-2">Option 2</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
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
export default {
  data() {
    return {
      openMenuNames: ['dashboard'],
      breadCrumbs: [],
      activeMenuName: '',
      user: '',

    }
  },
  components: {
    Headerbar
  },
  methods: {
    selectMenu(name, params) {

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
      const openName = this.breadCrumbs[0].name
      if (typeof openName != 'undefined') {
        this.openMenuNames.push(openName)
        this.$nextTick(() => {
          this.$refs.menus.updateOpened();
        })
      }
      //监听路由信息变化后更新选中菜单
      this.activeMenuName = this.$route.meta.activeName
      if (typeof this.activeMenuName == 'undefined') {
        this.openMenuNames = []
        this.$nextTick(() => {
          this.$refs.menus.updateOpened();
        })
      }
    }

  },
  mounted() {
    // 刷新时,更新面包屑信息变化
    this.breadCrumbs = this.$route.matched
    // 刷新时,更新选中菜单
    this.activeMenuName = this.$route.meta.activeName
    this.pkUser = this.$route.params.pkUser
    if (typeof this.activeMenuName == 'undefined') {
      this.openMenuNames = []
      this.$nextTick(() => {
        this.$refs.menus.updateOpened()
      })
    }
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
.sider {
  position: fixed;
  height: 100%;
  left: 0;
  overflow: auto;
}
.logo-row {
  height: 64px;
  font-size: 24px;
  text-align: center;
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