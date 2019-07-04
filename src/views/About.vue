<<template>
    <div>
        <div v-if="!code">loading</div>
        <p>文本框
            <input type="text" v-model="code" id="code" name="code" placeholder="请输入用户名" size="30" maxlength="20" />
        </p>
        
        <p>密码框
            <input type="password" v-model="password" id="password" name="password" placeholder="请输入密码" size="20" />
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
          code:'',
          password:'',
        }
    },
    mounted() {
        this.$axios.get('/user/get').then(
          response=>{
            const result = response.data
            this.code = result.code
            this.password = result.password
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


