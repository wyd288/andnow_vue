<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-fooset-2">
        <div class="list-group">
          <!-- 根据地址获取路由连接（类似于a标签） -->
          <router-link to="/home" class="list-group-item">Home</router-link>
          <router-link to="/about" class="list-group-item">About</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 展示获取连接的路由组件 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <h2>Home</h2>
    <ul>
      <li class="list-title">
        <router-link to="/home/news">News</router-link>
        <router-link to="/home/message">Message</router-link>
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
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