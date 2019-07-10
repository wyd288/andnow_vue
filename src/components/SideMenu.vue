<template>
    <nav class="navbar-default navbar-side" role="navigation">
      <div class="sidebar-collapse">
        <ul class="nav" id="main-menu">
          <li>
            <router-link to="/home/orgmanagement">
              <i class="fa fa-home fa-3x" aria-hidden="true"></i>组织管理
            </router-link>
          </li>
          <li>
            <router-link to="/home/basedata">
              <i class="fa fa-user fa-3x"></i>&nbsp;&nbsp;&nbsp;基础数据
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <i class="fa fa-smile-o fa-3x"></i>&nbsp;&nbsp;学生管理
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
            <ul id="second-level-one" class="nav nav-second-level panel-collapse collapse">
              <li>
                <a href="#third-level-one" aria-expanded="false" data-toggle="collapse">二级链接</a>
                <ul id="third-level-one" class="nav nav-third-level panel-collapse collapse">
                  <li>
                    <a href="#">三级链接</a>
                  </li>
                  <li>
                    <a href="#">三级链接</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://github.com/wyd288/fan1111">github</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">二级链接</a>
              </li>
              <li>
                <a href="#">二级链接</a>
              </li>
            </ul>
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


