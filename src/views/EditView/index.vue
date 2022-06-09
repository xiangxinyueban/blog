<template>
    <div class="editorBox">
        <div id="toolbar-container"></div>
        <div id="editor"></div>
    </div>
    <!-- <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor> -->
    <div class="footerTool">
        <el-button @click="saveBlog">
            保存草稿
        </el-button>
        <el-button>
            发布博客
        </el-button>
    </div>
</template>
<script>
import {ref, reactive, onMounted} from 'vue';
import CKEditor from 'ckeditor5-custom-build/build/ckeditor';
import MyUploadAdapter from '@/services/ckeditorIMGUploader';
import { ElMessage } from 'element-plus'
import {create, SaveBlog, ArticleDetail} from '@/services/article';
import { useRoute } from 'vue-router';

// import CKEditor from '@ckeditor/ckeditor5-vue';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: "EditView",
    setup(){
        // let editorData = ref("<h1>TTitle</h1><p>Content</p>");
        let articleDetail = reactive({})
        let editorObj = reactive({});
        let route = useRoute();
        const initCKEditor = () => {
            CKEditor.create(document.querySelector("#editor"), {
                // initialData: '<h1>Header of this blog</h1><p>please input in the content</p>',
                autosave: {
                    waitingTime: 2,
                    save(editor) {
                        return new Promise(resolve => {
                            console.log("autoSave", editor.getData());
                            console.log("articleDetail:", articleDetail);
                            articleDetail.title = "TODO";
                            articleDetail.content = editor.getData();
                            create(articleDetail);
                            resolve();
                        })
                    }
                }
            })
            .then((editor) => {
                const toolbarContainer = document.querySelector("#toolbar-container");
                toolbarContainer.appendChild(editor.ui.view.toolbar.element);
                editorObj = editor;
                editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
                    return new MyUploadAdapter(loader);
                };
            })
            .catch((error) => {
                console.log(error);
            })
        };

        
        const createArticle = async (id) => {
            if (id) {
                ArticleDetail({id:id}).then((response) => {
                    articleDetail.content = response.data.content
                    articleDetail.title = response.data.title
                    articleDetail.id = id
                    editorObj.setData(articleDetail.content);
              console.log("文章详情:", response);
            }).catch((err) => {
              ElMessage.error(err);
            })
            } else {
                let data  = await create({})
                console.log("data", data);
                if (data.status == "success"){
                    articleDetail.id = data.data.id;
                    editorObj.setData('<h1>Header of this blog</h1><p>please input in the content</p>');
                }
            }
            
        };

        const saveBlog = async ()=>{
            let data = await SaveBlog(articleDetail);
            if (data.status == "success"){
                ElMessage({
                    message: '保存成功',
                    type: 'success',
                });
            }
        };

        onMounted(()=>{
            initCKEditor();
            let id = route.params.id;
            createArticle(id);
        });
        const getEditorData = () => {
            return editorObj.getData();
        };
        const setEditorData = (data) => {
            return editorObj.setData(data);
        };

        return {
            getEditorData,
            setEditorData,
            articleDetail,
            saveBlog,
        };
    },
}
</script>

<style lang="less">
.ck.ck-editor{
    width: 100%;
    min-width: 900px;
}

.ck.ck-content{
    height: 1000px;
}

.editorBox{
    box-shadow:0 0 0 1px #aaa;
}

.footerTool{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;
    // border-top: 1px solid black;
    box-shadow: 0 0 0 1px #4E6EF2;
    background-color: rgba(255,255,255, 0.8);
    position: fixed;
    bottom: 0px;
    width:100%;
}
</style>
