<template>
  <Sider class="sider" :width=250>
    <!-- 左侧上方logo -->
    <Row class="logo-row" type="flex" align="middle" justify="center">
      <Col span="2">

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
        <MenuItem name="basedata">基础数据</MenuItem>
        <MenuItem name="org">组织管理</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-keypad"></Icon>
          用户管理
        </template>
        <MenuItem name="2-1">Option 1</MenuItem>
        <MenuItem name="2-2">Option 2</MenuItem>
      </Submenu>
      <Submenu name="metadatamanage">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          元数据管理
        </template>
        <MenuItem name="metadatadesign">元数据设计</MenuItem>
        <MenuItem name="metadataview">元数据查看</MenuItem>
      </Submenu>
    </Menu>

  </Sider>
</template>

<script>
export default {
  data() {
    return {
      openMenuNames: [],
      breadCrumbs: [],
      activeMenuName: '',


    };
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
  watch: {
    $route() {

      const openName = this.$route.matched[0].name
      if (openName) {
        this.openMenuNames = []
        this.openMenuNames.push(openName)
        this.$nextTick(() => {
          this.$refs.menus.updateOpened();
        })
      }
      //监听路由信息变化后更新选中菜单
      this.activeMenuName = this.$route.name
      if (typeof this.activeMenuName == 'undefined') {
        this.openMenuNames = []
        this.$nextTick(() => {
          this.$refs.menus.updateOpened();
        })
      }
    }

  },
  mounted() {
    const openName = this.$route.matched[0].name
    if (openName) {
      this.openMenuNames = []
      this.openMenuNames.push(openName)
      this.$nextTick(() => {
        this.$refs.menus.updateOpened();
      })
    }
    // 刷新时,更新选中菜单
    this.activeMenuName = this.$route.name
    if (typeof this.activeMenuName == 'undefined') {
      this.openMenuNames = []
      this.$nextTick(() => {
        this.$refs.menus.updateOpened()
      })
    }
  },
}
</script>

<style>
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