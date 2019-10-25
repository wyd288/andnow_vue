<template>
  <Row type="flex" align="middle">
    <Col span="8">
    <!-- 面包屑 -->
    <Breadcrumb>
      <BreadcrumbItem v-for="(item,index) in breadCrumbs" :key="index">
        {{item.meta.title}}
      </BreadcrumbItem>
    </Breadcrumb>

    </Col>
    <Col span="8">
    <Input v-model="searchContent" placeholder="搜索..." style="width: 300px" @on-keypress.enter="searchMenu" />

    </Col>

    <Col span="8" style="text-align:right;">
    <Dropdown trigger="click" class="head-hover" transfer>
      <Icon type="ios-notifications-outline" size="22" style="margin-left:10px;margin-right:10px" />

      <DropdownMenu slot="list" style="text-align:left">
        <DropdownItem name="notifications">
          <Badge dot>
            <Icon type="ios-notifications-outline" />
            系统通知
          </Badge>
        </DropdownItem>
        <DropdownItem name="notifications">
          <Badge dot>
            <Icon type="ios-notifications-outline" />
            个人通知
          </Badge>
        </DropdownItem>

      </DropdownMenu>
    </Dropdown>
    <Dropdown @on-click="dropdownClick" transfer class="head-hover">
      <Avatar src="../../static/portrait/1.jpg" style="margin-left:10px;margin-bottom:10px" />

      <Icon type="ios-arrow-down" style="margin-right:10px" />

      <DropdownMenu slot="list" style="text-align:left">
        <DropdownItem name="personal-center">
          <Icon type="ios-contact-outline" />
          个人中心
        </DropdownItem>
        <DropdownItem name="notifications">
          <Badge dot :count=3>
            <Icon type="ios-notifications-outline" />
            消息通知
          </Badge>
        </DropdownItem>
        <DropdownItem name="settings">
          <Icon type="ios-settings-outline" />
          设置
        </DropdownItem>
        <DropdownItem divided name="login">
          <Icon type="ios-log-out"></Icon>
          退出登录
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>

    </Col>
  </Row>
</template>
<script>


export default {
  props: {
    breadCrumbs: Array,
  },
  data() {
    return {
      searchContent: '',
      hasNewMsg: true,
    }
  },
  methods: {
    searchMenu() {
      console.log(this.searchContent)
    },
    dropdownClick(name) {
      this.$router.push({
        name: name
      })
    }

  }
};
</script>
<style>
.border-outline {
  border: 1px solid #121213;
}
/* 头部菜单鼠标滑过样式 */
.head-hover :hover {
  background: rgb(245, 245, 245);
  cursor: pointer;
}
</style>