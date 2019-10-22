
<template>
  <div class="layout">
    <Sider class="sider">
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
      <Menu :active-name="activeMenuName" theme="dark" width="auto" :open-names="openMenuNames" accordion @on-select="selectMenu">
        <Submenu name="dashboard">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            首页面板
          </template>
          <MenuItem name="basedata" to="/dashboard/basedata">基础数据</MenuItem>
          <MenuItem name="org" to="/dashboard/org">组织管理</MenuItem>
          <MenuItem name="register" to="/dashboard/register">注册页面</MenuItem>
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
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <Breadcrumb>
          <BreadcrumbItem v-for="(item,index) in breadCrumbs" :key="index">
            {{item.meta.title}}
          </BreadcrumbItem>

        </Breadcrumb>

      </Header>
      <Content style="margin:10px;height:100vh-74px;">
        <router-view>
          <router-view></router-view>
        </router-view>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openMenuNames: ['dashboard'],
      breadCrumbs: [],
      activeMenuName: '',

    }
  },
  methods: {
    selectMenu(name, params) {

    },
    getBreadCrumbsFromRoutes(value, index, array) {

    }


  },
  computed: {

  },
  watch: {

    $route() {
      //监听路由信息变化后更新面包屑信息
      this.breadCrumbs = this.$route.matched;
      //监听路由信息变化后更新选中菜单
      this.activeMenuName = this.$route.meta.activeName


    }
  },
  mounted() {
    // 刷新时,更新面包屑信息变化
    this.breadCrumbs = this.$route.matched
    // 刷新时,更新选中菜单
    this.activeMenuName = this.$route.meta.activeName

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
</style>