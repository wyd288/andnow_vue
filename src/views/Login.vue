<template>

  <div class="container">
    <Form class="login-form" ref="user" :model="user" :rules="ruleInline">
      <div class="title">
        Andnow
      </div>
      <Divider />
      <FormItem prop="code">
        <Input prefix="ios-contact" type="text" v-model="user.code" placeholder="用户名">
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input prefix="ios-lock" type="password" v-model="user.password" placeholder="密码" password>
        </Input>
      </FormItem>
      <FormItem>
        <Button class="submit" type="warning" @click="handleSubmit('user')">登陆</Button>
      </FormItem>
    </Form>

  </div>

</template>
<script>
export default {
  data() {
    return {
      user: {
        code: 'admin',
        password: '123456'
      },
      ruleInline: {
        code: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      },

    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
          this.doLogin();
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    doLogin() {
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>

<style>
.container {
  height: 100%;
  background: rgb(170, 200, 139);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  background: rgb(253, 252, 252);
  width: 350px;
  text-align: center;
  border-radius: 10px;
  padding: 30px;
}
.login-form .ivu-input {
  background-color: transparent;
  color: rgb(7, 7, 7);
  border-color: rgb(163, 207, 98);
}
.login-form .ivu-form-item {
  margin: auto;
  margin-bottom: 30px;
  width: 280px;
}

.login-form .submit {
  width: 280px;
  font-size: 16px;
  letter-spacing: 5px;
  align-content: center;
}

.title {
  font-size: 40px;
  color: rgb(8, 8, 8);
  text-align: center;
}

.login-box .ivu-icon-ios-close-circle {
  color: #777;
}
</style>

