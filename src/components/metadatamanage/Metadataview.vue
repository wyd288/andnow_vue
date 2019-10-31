<template>
  <div>
    <Table border :columns="columns7" :data="data6" @on-row-click="currRowClick"></Table>
    <Input :value="text" @onblur="currRowClick" />
  </div>

</template>
<script>
export default {
  data() {
    return {
      text: 'ceshi',
      columns7: [
        {
          title: 'Name',
          key: 'name',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'ios-person'
                }
              }),
              h('strong', params.row.name)
            ]);
          }
        },
        {
          title: 'Age',
          key: 'age',
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
                  self.data6[params.index] = params.row;
                }
              }
            });
          }
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, 'Delete')
            ]);
          }
        }
      ],
      data6: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park'
        }
      ]
    }
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      })
    },
    remove(index) {
      this.data6.splice(index, 1);
    },
    currRowClick(rowdata, index) {

      console.log(this.data6)
    }
  }
}
</script>
