<template>
    <div class="left">
         <el-card class="article-container">
            <template #header>
            <div class="card-header">
                <span>今日热搜</span>
                <!-- <el-button class="button" type="text">更多>>></el-button> -->
            </div>
            </template>
            <div><search-component></search-component></div>
        </el-card>

        <el-card class="article-container">
            <template #header>
            <div class="card-header">
                <span>精选文章</span>
                <el-button class="button" type="text">更多>>></el-button>
            </div>
            </template>
            <div v-for="o in 1" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>

        <el-card class="article-container">
            <template #header>
            <div class="card-header">
                <span>博客文章</span>
                <el-button class="button" type="text">更多>>></el-button>
            </div>
            </template>
            <div>

                <article-abbreviation v-for="o in 4" :key="o"></article-abbreviation>

            </div>
        </el-card>

    </div>
    <div class="right">
        <el-card class="article-container">
            <template #header>
            <div class="card-header">
                <span>计划表</span>
                <el-button class="button" type="text">编辑新计划</el-button>
            </div>
            </template>
            <div v-for="o in 1" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>

        <el-card class="article-container">
            <template #header>
            <div class="card-header">
                <span>公众号</span>
                <el-button class="button" type="text">广告位申请</el-button>
            </div>
            </template>
            <div v-for="o in 1" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>
    </div>
</template>

<script>
import ArticleAbbreviation from "../components/ArticleAbbreviation.vue"
import SearchComponent from "../components/SearchComponent.vue"
export default {
    name: "HomeView",
    components:{
      ArticleAbbreviation,
      SearchComponent
    },
    data() {
        return {

        }

    },
}
</script>

<style lang="less" scoped>
.left{
    width:70%;
    // border:1px solid blue;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /deep/ .el-card__header{
       padding: 6px 14px;
    }
}
.right{
    width:30%;
    // border:1px solid green;
    display: flex;
    justify-content: center;
    flex-direction: column;
    /deep/ .el-card__header{
       padding: 6px 14px;
    }
}

.el-card{
    margin-bottom: 4px;
}

.article-container{
    width:calc(100% - 10px);
    min-height:calc(50% - 10px);
    .card-header{
        display: flex;
        justify-content: space-between;
        span{
            font-size: 20px;
        }
    }
    /deep/ .el-card__body{
        padding: 4px 6px 6px 6px;
    }

    // width:400px;
}

</style>