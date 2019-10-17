<template>
  <div>
    <ul>
      <li v-for="(val,key,i) in user" :key="key">
        <span>序号：{{i}}</span>
        <span>键名：{{key}}</span>
        <span>键值：{{val}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {

        code: "",

        name: "",

      }
    }
  },
  mounted() {
    //模拟ajax请求，从后台请求数据
    // this.$axios.get("/user/login", {
    //   params: {
    //     code: 'admin',
    //     password: '123456'
    //   }
    // }).then(
    //   response => {
    //     this.user = response.data;
    //   }
    // ).catch(
    //   error => {
    //     alert("请求失败")
    //   }

    // );

  }
}
</script>
<style>
</style>