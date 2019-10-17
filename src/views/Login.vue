<template>
  <div class="container">
    <Row class="head-row" type="flex" align="middle" justify="center">
      <Col span="12">
      </Col>
      <Col span="12">
      </Col>
    </Row>
    <Row class="body-row" type="flex" align="middle" justify="center">
      <Col span="13">
      </Col>

      <Col span="8">
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
        <Row type="flex" align="middle" justify="center" style=" margin-bottom: 20px;margin-top: 20px;">
          <Col span="8">
          <Checkbox v-model="isAutoLogin">自动登录</Checkbox>
          </Col>
          <Col span="8">
          <Checkbox v-model="isRememberPwd">记住密码</Checkbox>
          </Col>
          <Col span="2">
          </Col>
          <Col span="6" style="color:blue;">忘记密码</Col>
        </Row>
        <FormItem>
          <Button class="submit" type="warning" @click="handleSubmit('user')">登陆</Button>
        </FormItem>
        <Row type="flex" align="middle" justify="center">
          <Col span="6">
          </Col>
          <Col span="12">
          </Col>
          <Col span="6" style="color:blue;">注册账号</Col>
        </Row>
      </Form>
      </Col>
      <Col span="3">
      </Col>
    </Row>
    <Row class="foot-row" type="flex" align="middle" justify="center">
      <Col span="8">
      </Col>
      <Col span="8">
      <span style="color:white;">Copyright &copy; 2019 &nbsp;&nbsp;京ICP备18063199号-1</span>
      </Col>
      <Col span="8">
      </Col>
    </Row>
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
          { required: true, message: '请输入密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      },
      isAutoLogin: false,
      isRememberPwd: false,


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
  text-align: center;
  background-image: url('../../static/backgroundimages/bg05.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
}

.head-row {
  height: 8%;
  text-align: center;
}
.body-row {
  height: 84%;
}
.foot-row {
  height: 8%;
}

.login-form {
  background: rgb(253, 252, 252);
  width: 350px;
  text-align: center;
  border-radius: 10px;
  padding: 30px;
  margin: auto;
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

