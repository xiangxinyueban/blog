<template>
    <div class="navbar">
        <div class="center">
            <router-link to="/">首页</router-link>
            <router-link to="/about">文章列表</router-link>
        </div>
        <el-button type="primary">登录</el-button>
    </div>
</template>


<script setup>

</script>

<style scoped>
.navbar {
    position: fixed; /* 将导航栏固定在页面顶部 */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    top: 0; /* 距离页面顶部的距离为 0 */
    width: 100%; /* 导航栏宽度为整个页面宽度 */
    height: 50px;
    /* background-color: #333; 背景颜色 */
    /* color: #fff; 文字颜色 */
    z-index: 101;
    background-color: #eebe77;
    overflow: hidden;
}

.navbar > .center {
    width: 300px;
    display: flex;
    justify-content:space-around;
    align-items: center;
}
</style>