
<template>
  <div class="layout">
    <Sider class="sider">
      <Row class="logo-row" type="flex" align="middle" justify="center">
        <Col span="6">
        </Col>
        <Col span="12">
        Andnow
        </Col>
        <Col span="6">
        </Col>
      </Row>
      <!-- 左侧菜单栏 -->
      <Menu active-name="基础数据" theme="dark" width="auto" :open-names="openMenuNames" accordion @on-select="selectMenu">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            基础数据
          </template>
          <MenuItem name="基础数据" to="/home/basedata">基础数据</MenuItem>
          <MenuItem name="组织管理" to="/home/org">组织管理</MenuItem>
          <MenuItem name="1-3">Option 3</MenuItem>
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
          <BreadcrumbItem :to="item.path" v-for="(item,index) in breadCrumbs" :key="index">
            {{item.name}}
          </BreadcrumbItem>

        </Breadcrumb>
      </Header>
      <Content style="margin:10px;height:100vh-74px;">
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openMenuNames: ['1'],
      breadCrumbs: [
        {
          name: '首页',
          path: '/home'
        }, {
          name: '基础数据',
          path: '/home/basedata'
        }, {
          name: '二级菜单',
          path: ''
        }
      ],

    }
  },
  methods: {
    selectMenu(name, params) {

    },


  },
  computed: {

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
  color: #fff;
  font-size: 24px;
  text-align: center;
}
</style>