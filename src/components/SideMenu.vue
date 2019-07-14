<template>
    <nav class="navbar-default navbar-side" role="navigation">
      <div class="sidebar-collapse">
        <ul class="nav" id="main-menu">
          <li>
            <router-link to="/home/orgmanagement">
              <i class="fa fa-home fa-3x" ></i>组织管理
            </router-link>
          </li>
          <li>
            <router-link to="/home/basedata">
              <i class="fa fa-user fa-3x"></i>&nbsp;&nbsp;&nbsp;基础数据
            </router-link>
          </li>
          <li>
            <router-link to="/home/register">
              <i class="fa fa-smile-o fa-3x"></i>&nbsp;&nbsp;用户管理
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <i class="fa fa-edit fa-3x"></i>表单模板
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <i class="fa fa-book fa-3x"></i>&nbsp;页面元素
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <i class="fa fa-columns fa-3x"></i>&nbsp;&nbsp;标签演示
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <i class="fa fa-cog fa-3x"></i>&nbsp;&nbsp;各式图表
            </router-link>
          </li>

          <li>
            <router-link to="/about">
              <i class="fa fa-th-list fa-3x"></i>&nbsp;下拉列表
            </router-link>
          </li>
        </ul>    
      </div>
    </nav>
</template>
<script>
    export default {
    
    }
</script>

<style>

</style>


