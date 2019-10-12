<template>
  <div class="login-box">
    <div class="container">
      <p class="title">Andnow</p>
      <p class="error">{{errorMsg}}</p>
      <div class="input-content">
        <Input prefix="ios-contact" v-model="user.code" placeholder="用户名" clearable @on-blur="verifyAccount" />
      </div>
      <div class="input-content">
        <Input type="password" v-model="user.password" prefix="md-lock" placeholder="密码" password @on-blur="verifyPwd" />
      </div>
      <Button :loading="isShowLoading" class="submit" type="warning" @click="loginValidate">登陆</Button>
      <p class="account">
        <span @click="register">注册账号</span> |
        <span @click="forgetPwd">忘记密码</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      user: {
        code: '',
        password: ''
      },
      errorMsg: '',
      isShowLoading: false
    }
  },
  created() { },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    verifyAccount(e) {
      if (this.account !== 'admin') {
        this.errorMsg = '账号为admin'
      } else {
        this.errorMsg = ''
      }
    },
    verifyPwd(e) {
      if (this.pwd !== 'admin') {
        this.errorMsg = '密码为admin'
      } else {
        this.errorMsg = ''
      }
    },
    register() {
      console.log('注册账号')
    },
    forgetPwd() {
      console.log('忘记密码')
    },
    submit() {
      if (this.account === 'admin' && this.pwd === 'admin') {
        this.isShowLoading = true
        // 登陆成功 设置用户信息
        this.$router.push({
          path: '/home'
        })
      } else {
        if (this.account !== 'admin') {
          this.errorMsg = '账号为admin'
        }

        if (this.pwd !== 'admin') {
          this.errorMsg = '密码为admin'
        }
      }
    },

    loginValidate() {
      this.error = ''
      if (!this.user.code) {
        this.error = '用户名不能为空！'
        this.loading = false
        return
      }
      if (!this.user.password) {
        this.error = '密码不能为空！'
        this.loading = false
        return
      }
      this.doLogin()
    },
    doLogin() {
      //发送异步get请求
      this.$axios
        .get('/login', {
          params: {
            code: this.user.code,
            password: this.user.password
          }
        })
        .then(response => {
          console.log(response)
          if (response.data == -1) {
            this.error = '用户名或密码错误，请重新输入'
            return
          } else {
            this.$router.push({
              name: 'Home',
              //路由传递参数
              params: {
                pkuser: response.data
              }
            })
          }
        })
        .catch(err => {
          //跳转到访问错误页面
          this.$router.push({
            path: '/about'
          })
        })
    }
  }
}
</script>

<style>
.login-box {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(253, 253, 253);
  background: rgb(170, 200, 139);
}
.login-box .container {
  background: rgb(255, 255, 255);
  width: 400px;
  text-align: center;
  border-radius: 10px;
  padding: 30px;
}
.login-box .ivu-input {
  background-color: transparent;
  color: rgb(7, 7, 7);
  border-color: rgb(163, 207, 98);
}
.login-box ::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: rgba(69, 69, 69, 0.6);
}
.login-box :-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: rgba(69, 69, 69, 0.6);
}
.login-box ::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: rgba(69, 69, 69, 0.6);
}
.login-box :-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: rgba(69, 69, 69, 0.6);
}
.login-box .title {
  font-size: 50px;
  margin-bottom: 15px;
  color: rgb(222, 163, 44);
}
.login-box .input-content {
  margin: auto;
  margin-bottom: 30px;
  width: 260px;
}
.login-box .error {
  color: red;
  text-align: center;
  margin: 10px auto;
  margin-top: 30px;
  font-size: 14px;
  height: 20px;
}
.login-box .submit {
  width: 260px;
  font-size: 16px;
  letter-spacing: 5px;
  align-content: center;
}
.login-box .account {
  margin-top: 30px;
  color: rgb(12, 12, 12);
}
.login-box .account span {
  cursor: pointer;
}
.login-box .ivu-icon {
  color: rgb(15, 15, 15);
}
.login-box .ivu-icon-ios-close-circle {
  color: #777;
}
</style>


