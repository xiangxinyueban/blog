<template>
    <div class="content">
    <el-card class="articleitem" v-for="article in articleList" :key="article.id">
    <template #header>
      <div class="card-header">
        <span>{{ article.title }}</span>
        <div>
        <el-button class="button" type="primary" text @click="editArticle(article.id)">编辑</el-button>
        <el-button class="button" text>删除</el-button>
        </div>
      </div>
    </template>
    <p>{{article.content}}</p>
    </el-card>
     <!-- <el-table ref="tableRef" :data="articleList" style="width: 100%">
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="title" label="title" width="180" />
    <el-table-column prop="content" label="content" />
  </el-table> -->
    </div>
</template>

<script>
import {GetArticleList, ArticleDetail} from "@/services/article"
import { ElMessage } from 'element-plus'
import { onMounted, reactive, ref } from "vue"
import { useRouter } from "vue-router"

export default {
    name: 'ArticleManagement',
    setup(){
      // let tableRef = ref(null);
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
          initArticles();
          // console.log("articleList", articleList);
        });
        const router = useRouter();
        const editArticle = async(id) => {
          router.push({
            name:"edit",
            params:{
              id: id
            }
          })
        }
        return {
          // tableRef,
          articleList,
          editArticle,
        }
    }
}
</script>

<style lang="less" scoped>
.content{
    display: flex;
    width:100%;
    flex-direction: column;
}

.articleitem{
   width:calc(100% - 10px);
    min-height:calc(50% - 10px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.articleitem{
  margin-bottom:10px;
}
</style>

