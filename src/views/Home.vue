<template>
  <div id="wrapper">
    <nav class="navbar navbar-default navbar-cls-top" role="navigation" style="margin-bottom: 0">
      <div class="pagetitle">泛知亦学</div>
      <div class="publicTime">
        <span>
          欢迎，
          <span style="color: yellow;" ></span>&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <a href="/exit.html" class="btn btn-danger square-btn-adjust">退出</a>
      </div>
    </nav>
    <SideMenu/>

    <!-- /. NAV SIDE  -->
    <div id="page-wrapper">
      <router-view />
    </div>
    <!-- /. PAGE WRAPPER  -->
  </div>
</template>
<script>

import SideMenu from '../components/SideMenu'

export default {
    components: {
      SideMenu
    },
    data() {
      return {
        username:''
      }
    },
    
};
</script>



<style>
.list-title {
  list-style: none;
  text-align: left;
}

li {
  text-align: left;
}
</style>