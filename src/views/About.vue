<<template>
    <div>
        <div v-if="!user">loading</div>
        <p>文本框
            <input type="text" v-model="user.code" id="code" name="code" placeholder="请输入用户名" size="30" maxlength="20" />
        </p>
        <input type="text" v-model="user.name" />
        <p>密码框
            <input type="password" v-model="user.password" id="password" name="password" placeholder="请输入密码" size="20" />
        </p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        pkUser: "",

        pkGroup: "",

        pkOrg: "",

        code: "",

        name: "",

        password: "",

        pwdlevel: "",

        pwdparam: "",

        identityverifycode: "",

        enabledate: "",

        disabledate: "",

        islocked: "",

        pkPsndoc: "",

        doctype: "",

        usertype: "",

        pkUsergroup: "",

        enablestate: "",

        note: "",

        creator: "",

        creationtime: "",

        modifier: "",

        modifiedtime: "",

        dr: "",

        ts: ""
      }
    };
  },
  mounted() {
    //发送异步get请求
    this.$axios.get("/user/login",{
      params:{
        code:'admin',
        password:'123456'
      }
    }).then(
      response => {
        this.user = response.data;
      },
      response => {
        alert("请求失败")
      }
    );
  }
};
</script>

<style>
</style>


