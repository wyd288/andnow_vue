<template>
  <div>
    <Form ref="formDynamic" :model="formDynamic" :label-width="80" style="width: 300px">
      <FormItem>
        <Row>
          <Col span="12">
          <Button type="dashed" long @click="handleAdd" icon="md-add">Add item</Button>
          </Col>
        </Row>
      </FormItem>
      <FormItem v-for="(item, index) in formDynamic.items" v-if="item.status" :key="index" :label="'Item ' + item.index" :prop="'items.' + index + '.value'" :rules="{required: true, message: 'Item ' + item.index +' can not be empty', trigger: 'blur'}">
        <Row>
          <Col span="18">
          <Input type="text" v-model="item.value" placeholder="Enter something..."></Input>
          </Col>
          <Col span="4" offset="1">
          <Button @click="handleRemove(index)">Delete</Button>
          </Col>
        </Row>
      </FormItem>

      <FormItem>
        <Button type="primary" @click="handleSubmit('formDynamic')">Submit</Button>
        <Button @click="handleReset('formDynamic')" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
    <Table border :columns="columns1" :data="data1"></Table>
  </div>

</template>
<script>
export default {
  data() {
    return {
      index: 1,
      formDynamic: {
        items: [
          {
            value: '',
            index: 1,
            status: 1
          }
        ]
      },
      columns1: [
        {
          type: 'index',
          title: '序号',
          key: 'no',
          width: '70',
          align: 'center'
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
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01',

        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
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