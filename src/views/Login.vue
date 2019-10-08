<template>
    <div class="login-box">
        <div class="container">
            <p class="title">Andnow</p>
            <p class="error">{{errorMessage}}</p>
            <div class="input-content">
                <Input prefix="ios-contact" v-model="account" placeholder="用户名" clearable @on-blur="verifyAccount"/>
            </div>
            <div class="input-content">
                <Input type="password" v-model="pwd" prefix="md-lock" placeholder="密码" clearable @on-blur="verifyPwd"/>
            </div>
            <Button :loading="isShowLoading" class="submit" type="warning" @click="submit">登陆</Button>
            <p class="account"><span @click="register">注册账号</span> | <span @click="forgetPwd">忘记密码</span></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            account: 'admin',
            pwd: 'admin',
            errorMessage: '',
            isShowLoading: false,
            bg: {}
        }
    },
    created() {
        
    },
    watch: {
        $route: {
            handler: function(route) {
                this.redirect = route.query && route.query.redirect
            },
            immediate: true
        }
    },
    methods: {
        verifyAccount(e) {
            if (this.account !== 'admin') {
                this.errorMessage = '账号为admin'
            } else {
                this.errorMessage = ''
            }
        },
        verifyPwd(e) {
            if (this.pwd !== 'admin') {
                this.errorMessage = '密码为admin'
            } else {
                this.errorMessage = ''
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
                    path: "/about"
                });
                // localStorage.setItem('userImg', 'https://avatars3.githubusercontent.com/u/22117876?s=460&v=4')
                // localStorage.setItem('userName', '小明')
                // // 登陆成功 假设这里是后台返回的 token
                // localStorage.setItem('token', 'i_am_token')
                // this.$router.push({path: this.redirect || '/'})
            } else {
                if (this.account !== 'admin') {
                    this.errorMessage = '账号为admin'
                } 

                if (this.pwd !== 'admin') {
                    this.errorMessage = '密码为admin'
                } 
            }
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
    background: rgb(48, 49, 49)
}
.login-box .container {
    background: rgba(255, 255, 255, .5);
    width: 400px;
    text-align: center;
    border-radius: 10px;
    padding: 30px;
}
.login-box .ivu-input {
    background-color: transparent;
    color: #fff;
    outline: #fff;
    border-color: #fff;
}
.login-box ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: rgba(255, 255, 255, .8);
}
.login-box :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgba(255, 255, 255, .8);
}
.login-box ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgba(255, 255, 255, .8);
}
.login-box :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, .8);
}
.login-box .title {
    font-size: 20px;
    margin-bottom: 20px;
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
}
.login-box .account span {
    cursor: pointer;
}
.login-box .ivu-icon {
    color: #eee;
}
.login-box .ivu-icon-ios-close-circle {
    color: #777;
}
</style>


