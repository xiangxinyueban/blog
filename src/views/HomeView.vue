<template>
<div class="home-content">
    <div id="header">
    <div class="dynamic_shuffl" v-for="(item, i) in bgPictures" :key="i">
      <img src="@/assets/bg1.png">
      <!-- <img :src="item"> -->
        Todo: 这里的item需要替换成图片的地址才能实现轮播
    </div>
    </div>
    <div class="left">
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
            
                <el-card class="articleitem" v-for="article in articleList" :key="article.id">
                <!-- <template #header>
                <div class="article-card-header">
                    <span>{{ article.title }}</span>
                    <div>
                    <el-button class="button" type="primary" text >编辑</el-button>
                    <el-button class="button" text>删除</el-button>
                    </div>
                </div>
                </template> -->
                <!-- <p>{{article.content}}</p> -->
                <v-md-preview :text="article.content"></v-md-preview>
                </el-card>
                <!-- <article-abbreviation v-for="article in articleList" :key="article.id"></article-abbreviation> -->

            
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
    </div>
</template>

<script>
import ArticleAbbreviation from "@/components/ArticleAbbreviation.vue";
import {GetArticleList, ArticleDetail} from "@/services/article"
import { ElMessage } from "element-plus";
import { onMounted, ref } from "vue";

// import SearchComponent from "../components/SearchComponent.vue"
export default {
    name: "HomeView",
    components:{
      ArticleAbbreviation,
    //   SearchComponent
    },
    setup(){
        function dynamicPlay() {
            let menuImg = document.querySelectorAll('.dynamic_shuffl')
            console.log("menuImg:", menuImg)
            let index = 0
            setInterval(()=>{
                index++
                index =  index % menuImg.length
                // console.log(index)
                for (let i of menuImg) {
                i.style.opacity = 0
                }
                menuImg[index].style.opacity = 1
            }, 3000)

        };
        let articleList = ref([]);
      const initArticles = async() => {
        let data = await GetArticleList();
        if (data.status != "success"){
            ElMessage({
                    message: '获取文章列表失败',
                    type: 'error',
                });
        } else{
           ElMessage({
                    message: '获取文章列表成功',
                    type: 'success',
                });
          // console.log("列表：", data.data);
          articleList.value.push(...data.data);
          console.log("文章详情:", data.data);
          // tableRef.value.doLayout();
          // console.log("articleList", articleList);
        }
        };
        onMounted(()=>{
            dynamicPlay();
            initArticles();
            console.log("窗口高度:",document.documentElement.clientHeight);
        })
        return {
            bgPictures:["@/assets/bg1.png","@/assets/bg2.png","@/assets/bg3.jpg","@/assets/bg4.jpg","@/assets/bg5.jpg"],
            articleList
        }
    }
}
</script>

<style lang="less" scoped>
  #header{
    margin:0;
    width:100%;
    height: 300px;
    position: relative;
    >div{
        margin:0;
      width: 100%;
      height: 300px;
      position: absolute;
      left:0;
      top:-5px;
      overflow: hidden;
      img {
        width:100%
      }
    }
  }

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

.articleitem{
   width:100%;
//    min-height:calc(50% - 10px);

}

.home-content{
    width:100%;
}

// .article-card-header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }

// .articleitem{
//   margin-bottom:10px;
// }

</style>