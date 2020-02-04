<template>
  <div>

    <Row class="head-row" type="flex" align="middle" justify="center">
      <!-- 用户列表 -->
      <Table max-height="400" :columns="psncolumns" :data="psndata" border show-summary></Table>
    </Row>

    <Row class="head-row" type="flex" align="middle" justify="center">
      <Col span="12">
      <Form ref="psnForm" :model="psnForm" :rules="psnRule" :label-width="90">
        <FormItem label="用户名" prop="userName">
          <Input v-model="psnForm.userName"></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input v-model="psnForm.password"></Input>
        </FormItem>
        <FormItem label="确认密码" prop="confirmPassword">
          <Input v-model="psnForm.confirmPassword"></Input>
        </FormItem>
        <FormItem label="真实姓名" prop="psnName">
          <Input v-model="psnForm.psnName"></Input>
        </FormItem>
        <FormItem label="性别" prop="sex">
          <RadioGroup v-model="psnForm.sex">
            <Radio label="wz">未知</Radio>
            <Radio label="nan">男</Radio>
            <Radio label="nv">女</Radio>
            <Radio label="bx">不详</Radio>
          </RadioGroup>

        </FormItem>
        <FormItem label="身份证号" prop="idcard">
          <Input v-model="psnForm.idcard"></Input>
        </FormItem>
        <FormItem label="地址" prop="address">
          <Input v-model="psnForm.address"></Input>
        </FormItem>
        <!-- <FormItem label="E-mail" prop="mail">
          <Select v-model="psnForm.city" placeholder="请选择性别">
            <Option value="1">未知</Option>
            <Option value="2">男</Option>
            <Option value="3">女</Option>
            <Option value="4">不详</Option>
          </Select>
        </FormItem> -->

        <FormItem label="出生日期">
          <Row>
            <Col span="24">
            <FormItem prop="birthday">
              <DatePicker type="date" v-model="psnForm.birthday"></DatePicker>
            </FormItem>
            </Col>

          </Row>
        </FormItem>

        <!-- <FormItem label="Hobby" prop="interest">
          <CheckboxGroup v-model="formValidate.interest">
            <Checkbox label="Eat"></Checkbox>
            <Checkbox label="Sleep"></Checkbox>
            <Checkbox label="Run"></Checkbox>
            <Checkbox label="Movie"></Checkbox>
          </CheckboxGroup>
        </FormItem> -->
        <FormItem label="备注" prop="note">
          <Input v-model="psnForm.note" type="textarea" :autosize="{minRows: 2,maxRows: 7}"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('psnForm')">Submit</Button>
          <Button @click="handleReset('psnForm')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
      </Col>
      <Col span="12">

      </Col>
    </Row>

  </div>

</template>
<script>
export default {
  data() {
    return {
      index: 1,

      psncolumns: [
        {
          type: 'index',
          title: '序号',
          key: 'no',
          width: '70',
          align: 'center',

        },
        {
          title: '用户名',
          key: 'user_name',
          width: '100',
          align: 'center'
        },
        {
          title: '姓名',
          key: 'psn_name',
          width: '120',
          align: 'center'
        },
        {
          title: '性别',
          key: 'sex',
          width: '100',
          align: 'center'
        },
        {
          title: '年龄',
          key: 'age',
          width: '100',
          align: 'center'
        },
        {
          title: '出生日期',
          key: 'birthday',
          width: '150',
          align: 'center'
        },
        {
          title: '身份证号',
          key: 'idcard',
          width: '200',
          align: 'center'
        },
        {
          title: '地址',
          key: 'address',
          width: 300,
          align: 'center'
        },
        {
          title: '备注',
          key: 'note',
          width: 300,
          align: 'center'
        },

      ],

      psndata: [

      ],

      //  表单域数据
      psnForm: {
        userName: '',
        password: '',
        confirmPassword: '',
        psnName: '',
        sex: '',
        age: '',
        idcard: '',
        birthday: '',
        address: '',
        note: ''
      },
      // 表单验证规则
      psnRule: {
        userName: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        psnName: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        age: [
          { required: true, message: 'Please select the city', trigger: 'change' }
        ],
        sex: [
          { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        idcard: [
          { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
          { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ],
        birthday: [
          { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
        ],
        address: [
          { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
        ],
        note: [
          { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
          { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
        ]
      },


      columns: [
        {
          type: 'index',
          title: '序号',
          key: 'no',
          width: '70',
          align: 'center',
          fixed: 'left'
        },
        {
          title: '属性',
          key: 'attribute',
          align: 'center',
          render: (h, params) => {
            // 为了在render函数内能够访问到当前实例，否则会报找不到属性的错误
            var self = this;
            return h('Input', {
              props: {
                value: params.row.age
              },
              on: {
                // 添加失去焦点事件
                'on-blur'(event) {
                  // 改变的值赋值给当前行
                  params.row.age = event.target.value.trim();
                  // 将当前行的值赋值给组件属性
                  // self.data6[params.index] = params.row;
                }
              }
            });
          }
        },

        {
          title: '属性',
          key: 'attribute',
          align: 'center',
          render: (h, params) => {
            // 为了在render函数内能够访问到当前实例，否则会报找不到属性的错误
            var self = this;
            return h('Input', {
              props: {
                value: params.row.age
              },
              on: {
                // 添加失去焦点事件
                'on-blur'(event) {
                  // 改变的值赋值给当前行
                  params.row.age = event.target.value.trim();
                  // 将当前行的值赋值给组件属性
                  // self.data6[params.index] = params.row;
                }
              }
            });
          }
        },

        {
          title: '显示名称',
          key: 'name',
          align: 'center',
          render: (h, params) => {
            // 为了在render函数内能够访问到当前实例，否则会报找不到属性的错误
            var self = this;
            return h('Input', {
              props: {
                value: params.row.age
              },

              on: {
                // 添加失去焦点事件
                'on-blur'(event) {
                  // 改变的值赋值给当前行
                  params.row.age = event.target.value.trim();
                  // 将当前行的值赋值给组件属性
                  // self.data6[params.index] = params.row;
                }
              }
            });
          }
        },

        {
          title: '显示年龄',
          key: 'age',
          align: 'center',

        },

        {
          title: '属性类型',
          key: 'attribute-type',
          align: 'center',
          render: (h, params) => {
            // 为了在render函数内能够访问到当前实例，否则会报找不到属性的错误
            var self = this;
            return h('Select', {
              props: {
                value: "1",
              },
              on: {
                'on-change': (event) => { }
              },
            },
              [
                h('Option', {
                  props: {
                    value: '1'
                  }
                }, 'option1'),
                h('Option', {
                  props: {
                    value: '2'
                  }
                }, 'option2')
              ]);

          }
        },
        {
          title: '字段',
          key: 'field',
          align: 'center',
          render: (h, params) => {
            // 为了在render函数内能够访问到当前实例，否则会报找不到属性的错误
            var self = this;
            return h('Input', {
              props: {
                value: params.row.age
              },
              on: {
                // 添加失去焦点事件
                'on-blur'(event) {
                  // 改变的值赋值给当前行
                  params.row.age = event.target.value.trim();
                  // 将当前行的值赋值给组件属性
                  // self.data6[params.index] = params.row;
                }
              }
            });
          }
        },
        {
          title: '字段类型',
          key: 'field-type',
          align: 'center',
          render: (h, params) => {
            // 为了在render函数内能够访问到当前实例，否则会报找不到属性的错误
            var self = this;
            return h('Select', {
              props: {
                value: "1",
              },
              on: {
                'on-change': (event) => { }
              },
            },
              [
                h('Option', {
                  props: {
                    value: '1'
                  }
                }, 'option1'),
                h('Option', {
                  props: {
                    value: '2'
                  }
                }, 'option2')
              ]);

          }
        },
        {
          title: '可空',
          key: 'isnull',
          align: 'center',
          renderHeader: (h, params) => {
            // 为了在render函数内能够访问到当前实例，否则会报找不到属性的错误
            var self = this;
            return h('Checkbox', {
              props: {
                value: "1",
              },
              on: {
                'on-change': (event) => { }
              },
            },
              '可空');

          },
          render: (h, params) => {
            // 为了在render函数内能够访问到当前实例，否则会报找不到属性的错误
            var self = this;
            return h('Checkbox', {
              props: {
                value: "1",
              },
              on: {
                'on-change': (event) => { }
              },
            },
            );

          }
        },
      ],

    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    handleAdd() {
      this.index++;
      this.formDynamic.items.push({
        value: '',
        index: this.index,
        status: 1
      });
    },
    handleRemove(index) {
      this.formDynamic.items[index].status = 0;
    }
  }
}
</script>
<style>
</style>