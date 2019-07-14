<template>
  <div>
    <label v-text="title" v-show="show"></label>
    <input type="text" :placeholder="hint" v-model.trim="textValue" />
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    required: Boolean,
    show: Boolean,
    //文本框的值
    textValue: String
  },
  data() {
    return {
      //提示信息
      hint: ""
    };
  },
  mounted() {
    if (this.required == true) {
      this.hint = "* 请输入" + this.title;
    } else {
      this.hint = "请输入" + this.title;
    }
  },
  methods: {},
  watch: {
    //监听内容变化
    textValue: function(newValue) {
      //将变化的值传递给监听方法(:textValue.sync)
      this.$emit("update:textValue", newValue);
    }
  }
};
</script>
<style>
</style>