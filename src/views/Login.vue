<template>
  <div class="page-container">
    <h1>Andnow SCM</h1>
    <div class="loginbox">
      <div class="error" v-text="error"></div>
      <input type="text" id="code" name="code" class="code" placeholder="请输入用户名" v-model="code" />
      <input
        type="password"
        id="password"
        name="password"
        class="password"
        placeholder="请输入密码"
        v-model="password"
      />
      <button @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;陆</button>
    </div>
    <div class="page-body" align="center">
      没有账号？
      <a href="/regist" target="_blank">立即注册</a>&nbsp;&nbsp;&nbsp;&nbsp;
      无法登陆？
      <a href="/forgetPassword.html" target="_blank">找回密码</a>
    </div>

    <div class="connect">
      <p>
        <a class="facebook" href></a>
        <a class="twitter" href></a>
      </p>
    </div>
    <div align="center">
      <a href="http://www.miitbeian.gov.cn/" style="color: white;" target="_blank">京ICP备18063199号-1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <p>
        版权所属 &copy; 2018 - 2019
        <a
          href="https://github.com/wyd288/fan1111"
          target="_blank"
          title="泛知亦学"
          style="color: white;"
        >泛亦科技</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login() {
      this.error = "";
      if (!this.code) {
        this.error = "用户名不能为空！";
        return;
      }
      if (!this.password) {
        this.error = "密码不能为空！";
        return;
      }
      //发送异步get请求
      this.$axios
        .get("/user/login", {
          params: {
            code: this.code,
            password: this.password
          }
        })
        .then(response => {
          console.log(response);
          if (response.data == "failure") {
            this.error = "用户名或密码错误，请重新输入";
            return;
          } else {
            this.$router.push({
              path: "/home"
            });
          }
        })
        .catch(err => {
          //跳转到访问错误页面
          this.$router.push({
            path: "/about"
          });
        });
    }
  }
};
</script>

<style>
.page-container {
  margin: auto;
  background: url(../../static/background/bg.jpg) no-repeat;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
}

.page-body {
  margin: 40px auto 0 auto;
}
.page-body > a {
  color: yellow;
}

h1 {
  margin-top: 60px;
  font-size: 30px;
  font-weight: 700;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.loginbox {
  position: relative;
  width: 305px;
  margin: 60px auto 0 auto;
  text-align: center;
}

input {
  width: 270px;
  height: 42px;
  margin-top: 25px;
  padding: 0 15px;
  background: #2d2d2d; /* browsers that don't support rgba */
  background: rgba(45, 45, 45, 0.15);
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #3d3d3d; /* browsers that don't support rgba */
  border: 1px solid rgba(255, 255, 255, 0.15);
  -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset;
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -o-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -ms-transition: all 0.2s;
}

input:-moz-placeholder {
  color: rgba(255, 255, 255, 0.5);
}
input:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.5);
}
input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.5);
}

input:focus {
  outline: none;
  -moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
}

button {
  cursor: pointer;
  width: 300px;
  height: 44px;
  margin-top: 25px;
  padding: 0;
  background: #ef4300;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  border: 1px solid #ff730e;
  -moz-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.25) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.25) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.25) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  -o-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -ms-transition: all 0.2s;
}

button:hover {
  -moz-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
}

button:active {
  -moz-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 15px 30px 0 rgba(255, 255, 255, 0.15) inset,
    0 2px 7px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.1) inset,
    0 1px 4px 0 rgba(0, 0, 0, 0.1);

  border: 0px solid #ef4300;
}

.error {
  height: 20px;
  margin-top: 15px;
  color: rgba(255, 0, 0, 0.8);
}

.connect {
  width: 305px;
  margin: 35px auto 0 auto;
  font-size: 18px;
  font-weight: 700;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.connect a {
  display: inline-block;
  width: 32px;
  height: 35px;
  margin-top: 15px;
  -o-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -ms-transition: all 0.2s;
}

.connect a:hover {
  background-position: center bottom;
}
</style>