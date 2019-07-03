<template>
    <div>
        <h2>Home</h2>
        <ul>
            <li class="list-title">
                <router-link to="/home/news">News</router-link>
                <router-link to="/home/message">Message</router-link>
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
          
    </div>
</template>
<script>
    export default {
    
    }
</script>
<style>
.list-title {
list-style: none;
text-align: left

}

li {
    text-align: left
}
</style>