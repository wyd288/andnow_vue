<template>
  <div>
     
    <div class="table-responsive">
      <table class="table table-bordered">
          <thead>
              <td>1,1</td>
              <td>1,2</td>
          </thead>
          
          <tbody>
              <td>2,1</td>
              <td>1,2</td>
          </tbody>
          
      </table>
    </div>
    <div class="loginbox">
      <div class="error" v-text="error"></div>
      <TextInput title="用户名" :required="true" :show="true" :textValue.sync="user.code"  />
      <TextInput title="姓名" :required="true" :show="true" :textValue.sync="user.name"  />
      <label>密码</label>
      <input type="password" id="password" name="password" v-model="user.password" />

      <button @click="doRegister">注册</button>
    </div>
  </div>
</template>
<script>
import TextInput from '@/components/common/TextInput'

export default {
  components:{
    TextInput
  },
  data() {
    return {
      user: {
        code: "",
        password: "",
        name: ""
      },
      error: ""
    };
  },
  methods: {
    checkData() {
      if (this.user.code == "") {
        this.errormessage = "用户名不能为空";
        return;
      }
      if (this.user.password == "") {
        this.errormessage = "密码不能为空";
        return;
      }
      if (this.user.name == "") {
        this.errormessage = "姓名不能为空";
        return;
      }
    },
    doRegister() {
      this.$axios
        .post("/user", this.user)
        .then(response => {
          if (response.date > 0) {
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style>
</style>