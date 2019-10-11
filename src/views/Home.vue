<template>
    <div>
      
    </div>
</template>

<script>


export default {
    data () {
        return {

        }
    },
    created() {
       
    },
    mounted() {
        

    },
    watch: {
        $route(to) {
            const name = to.name
            this.currentPage = name
            if (name == 'error') {
                this.crumbs = '404'
                return
            }

            if (!this.keepAliveData.includes(name)) {
                // 如果标签超过8个 则将第一个标签删除
                if (this.tagsArry.length == 8) {
                    this.tagsArry.shift()
                }
                this.tagsArry.push({name, text: this.nameToTitle[name]})
            }

            setTimeout(() => {
                this.crumbs = this.paths[name]
            }, 0)
        }
    },
    computed: {

    },
    methods: {
 
    }
}
</script>

<style scoped>