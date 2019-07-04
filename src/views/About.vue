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
          user:{
            pkUser:'',

            pkGroup:'',

            pkOrg:'',

            code:'',

            name:'',

            password:'',

            pwdlevel:'',

            pwdparam:'',

            identityverifycode:'',

            enabledate:'',

            disabledate:'',

            islocked:'',

            pkPsndoc:'',

            doctype:'',

            usertype:'',

            pkUsergroup:'',

            enablestate:'',

            note:'',

            creator:'',

            creationtime:'',

            modifier:'',

            modifiedtime:'',

            dr:'',

            ts:''
          }
        }
    },
    mounted() {
        this.$axios.get('/user/get').then(
          response=>{
            const result = response.data
            this.user = result
            console.log(this.user)
          },
          response=>{
            alert(response)
          }
        )
     },
}
</script>

<style>


</style>


