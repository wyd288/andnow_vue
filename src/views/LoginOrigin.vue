<template>
  

  <div class="page-container">


    <div class="loginbox">
      <h1 style="color:black">Andnow SCM</h1>
      <div>
        <!-- <button @click="loginvalidate" @keyup.enter="loginvalidate">登&nbsp;&nbsp;&nbsp;&nbsp;陆</button> -->
        <Row>
          <Col span="24">
            <div class="error" v-text="error"></div>
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <input type="text" v-model="user.code" placeholder="请输入用户名" />
          </Col>
        </Row>
        <Row>
        <Col span="24">
        <input
          type="password"
          id="password"
          name="password"
          class="password"
          placeholder="请输入密码"
          v-model.trim="user.password"
        />
        </Col>
       
        </Row>
        <Row>
        <Col span="12" push="1">
          <Button type="warning" :loading="loading" @click="toLoading" :disabled="loading">
          <span v-if="!loading">登陆</span>
          <span v-else>登陆</span>
          </Button>
        
        </Col>
        <Col span="12" pull="1"><Button type="success">注册</Button></Col>
        </Row>

        <Row>
          <Col span="24">
            <div class="page-body" align="center"> 
              <a href="/forgetPassword.html" target="_blank">无法登陆？找回密码</a>
            </div>
          </Col>
        </Row>

      </div>
    </div>
    

    <div class="connect">
      <p>
        <a class="facebook" href></a>
        <a class="twitter" href></a>
      </p>
    </div>
    <div align="center">
      <a href="http://www.miitbeian.gov.cn/" style="color: red;" target="_blank">京ICP备18063199号-1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <p>
        
        <a
          href="https://github.com/wyd288/fan1111"
          target="_blank"
          title="泛知亦学"
          style="color: green;"
        >版权所属 &copy; 2018 - 2019  泛亦科技</a>
      </p>
    </div>
  </div>
</template>
<script>
import TextInput from '@/components/common/TextInput'

export default {
  components:{
    TextInput
  } , 
  data() {
    return {
      user: {
        code: "admin",
        password: "123456"
      }, 
      error: "",
      loading: false
    };
  },
  methods: {
    toLoading(){
        this.loading = true;
        this.loginvalidate();
      
    },
    loginvalidate(){
      this.error = "";
      if (!this.user.code) {
        this.error = "用户名不能为空！";
        this.loading = false;
        return;
      }
      if (!this.user.password) {
        this.error = "密码不能为空！";
        this.loading = false;
        return;
      }
      this.doLogin();
    },
    doLogin() {
      
      //发送异步get请求
      this.$axios
        .get("/login", {
          params: {
            code: this.user.code,
            password: this.user.password
          }
        })
        .then(response => {
          console.log(response);
          if (response.data == -1) {
            this.error = "用户名或密码错误，请重新输入";
            return;
          } else {
            this.$router.push({
              name: "Home",
              //路由传递参数
              params: {
                pkuser: response.data
              }
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
  /* background: url(../../static/background/bg.jpeg) no-repeat; */
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
  color: rgb(197, 197, 81);
}

h1 {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
  text-shadow: 0 1px 4px rgba(252, 249, 249, 0.925);
}

.loginbox {
  background: rgb(77, 88, 99);
  background: #4D5863;
  border: black 1px solid;
  position: relative;
  width: 400px;
  margin: 60px auto 0 auto;
  padding: 20px;
  text-align: center;
}

input {
  width: 270px;
  height: 42px;
  margin-top: 25px;
  padding: 0 15px;
  background: #0ace45; /* browsers that don't support rgba */
  background: rgb(246, 248, 246);
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
  color: rgb(8, 8, 8);
  text-shadow: 0 1px 2px rgba(14, 0, 0, 0.1);
}

input:-moz-placeholder {
  color: rgba(32, 32, 32, 0.2);
}
input:-ms-input-placeholder {
  color: rgba(32, 32, 32, 0.2);
}
input::-webkit-input-placeholder {
  color: rgba(32, 32, 32, 0.2);
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
  width: 100px;
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
}



.error {
  height: 20px;
  margin-top: 15px;
  color: rgba(216, 164, 21, 0.8);
   font-size: 16px;
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
}

.connect a:hover {
  background-position: center bottom;
}
</style>