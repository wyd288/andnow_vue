<template>
  <div>
    临时页面
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: ""

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