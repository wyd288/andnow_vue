<template>
  <Row type="flex" align="middle" class="register-container">
    <Col span="8">
    </Col>
    <Col span="8">
    <!-- 注册表单 -->
    <Form ref="user" :model="user" :rules="ruleValidate" :label-width="80" class="register-form">
      <FormItem label="用户编码" prop="code">
        <Input v-model="user.code" placeholder="请输入用户编码"></Input>
      </FormItem>
      <FormItem label="昵称" prop="name">
        <Input v-model="user.name" placeholder="请输入昵称"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input v-model="user.password" placeholder="请输入密码"></Input>
      </FormItem>
      <FormItem label="性别" prop="gender">
        <RadioGroup v-model="user.gender">
          <Radio label="male">男</Radio>
          <Radio label="female">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="电子邮箱" prop="mail">
        <Input v-model="user.mail" placeholder="请输入电子邮箱地址"></Input>
      </FormItem>
      <FormItem label="所在地" prop="city">
        <Select v-model="user.city" placeholder="请选择所在地">
          <Option value="beijing">北京</Option>
          <Option value="shanghai">上海</Option>
          <Option value="shenzhen">深圳</Option>
        </Select>
      </FormItem>
      <!-- <FormItem label="日期时间">
        <Row>
          <Col span="11">
          <FormItem prop="date">
            <DatePicker type="date" placeholder="选择日期" v-model="user.date"></DatePicker>
          </FormItem>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
          <FormItem prop="time">
            <TimePicker type="time" placeholder="选择时间" v-model="user.time"></TimePicker>
          </FormItem>
          </Col>
        </Row>
      </FormItem> -->

      <FormItem label="兴趣" prop="interest">
        <CheckboxGroup v-model="user.interest">
          <Checkbox label="Eat"></Checkbox>
          <Checkbox label="Sleep"></Checkbox>
          <Checkbox label="Run"></Checkbox>
          <Checkbox label="Movie"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="个人简介" prop="desc">
        <Input v-model="user.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="介绍一下你自己吧..."></Input>
      </FormItem>
      <FormItem>
        <p style="width:100%;text-align:center;">
          <Button type="success" @click="handleSubmit('user')" style="width:100px;margin-right:10px;">注 册</Button>
          <Button type="primary" @click="handleReset('user')" style="width:100px;">重 置</Button>
        </p>
      </FormItem>
    </Form>
    <p style="width:100%;text-align:center;">
      已有账号？
      <span class="back-to-login">
        <span @click="backToLogin">点击登陆</span>
      </span>
    </p>

    </Col>
    <Col span="8">
    </Col>
  </Row>

</template>
<script>
export default {
  data() {
    return {
      user: {
        code: '',
        name: '',
        password: '',
        gender: 'male',
        // date: '',
        // time: '',
        desc: '',
        mail: '',
        city: '',
        interest: [],
      },
      ruleValidate: {
        code: [
          { required: true, message: '用户编码不允许为空', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '昵称不允许为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不允许为空', trigger: 'blur' }
        ],
        // mail: [
        //   { required: false, message: '电子邮箱不能为空', trigger: 'blur' },
        //   { type: 'email', message: '请输入正确的电子邮箱地址', trigger: 'blur' }
        // ],
        // city: [
        //   { required: false, message: '请选择所在地', trigger: 'change' }
        // ],
        // gender: [
        //   { required: false, message: '请选择性别', trigger: 'change' }
        // ],
        // interest: [
        //   { required: false, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
        //   { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        // ],
        // date: [
        //   { required: false, type: 'date', message: '请选择日期', trigger: 'change' }
        // ],
        // time: [
        //   { required: false, type: 'string', message: '请选择时间', trigger: 'change' }
        // ],
        // desc: [
        //   { required: false, message: '请输入个人简介', trigger: 'blur' },
        //   { type: 'string', min: 10, message: '个人简介不能少于10个字', trigger: 'blur' }
        // ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$axios.post("/user/add", this.user).then(
            response => {
              this.$Message.success("注册成功");
              this.handleReset(name);
            },
            response => {
              this.$Message.error('注册失败');
            }
          );
        } else {
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    doRegister() {

    },
    backToLogin() {
      this.$router.push({
        name: 'login'
      });
    }
  }
}
</script>
<style>
.register-container {
  height: 100%;
  overflow-y: scroll;
}

.body-border {
  border: black 1px solid;
}
.back-to-login {
  color: blue;
}
.back-to-login :hover {
  color: rgb(0, 166, 255);
  cursor: pointer;
  text-decoration: underline;
}
</style>
