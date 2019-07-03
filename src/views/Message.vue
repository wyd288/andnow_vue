<template>
    <div>
        <ul>
            <li v-for="(message) in messages" :key="message.id">
                {{ message.title }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                messages:[

                ]
            }
        },
        mounted(){
            //模拟ajax请求，从后台请求数据
            setTimeout(() => {
                const messages = [
                    {
                        id:1,
                        title:'message001'
                        
                    },
                                        {
                        id:2,
                        title:'message002'
                        
                    },
                                        {
                        id:3,
                        title:'message003'
                        
                    }
                ]
                this.messages = messages
            }, 1000);
            
        }
    }
</script>
<style>

</style>