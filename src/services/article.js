import { axiosPost, axiosGet } from "@/request/http";
// import {useStore} from "vuex"

function create(articleDetail) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/blog/create",
            data: articleDetail,
            success(data) {
                resolve(data);
            },
            error(err){
                reject(err)
            }
        })
    })
}

function GetArticleList() {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: "/api/blog/my_list",
            success(data) {
                resolve(data);
            },
            error(err){
                reject(err)
            }
        })
    })
}

function SaveBlog(articleDetail) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/blog/save",
            data: {id:articleDetail.id},
            success(data) {
                resolve(data);
            },
            error(err){
                reject(err)
            }
        })
    })
}

function ArticleDetail(articleDetail) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/blog/detail",
            data: {id:articleDetail.id},
            // headers:{
            //     'Content-Type': 'application/form-data'
            // },
            success(data) {
                resolve(data);
            },
            error(err){
                reject(err)
            }
        })
    })
}

export {
    create,
    SaveBlog,
    GetArticleList,
    ArticleDetail,
}


// function(){
//         const data = new FormData();
//         data.append('files', await this.loader.file);
//         let token = localStorage.getItem("token");
//         return new Promise((resolve, reject) => {
//             axiosPost({
//                 url: "/api/img/upload",
//                 data,
//                 headers: {
//                     "token": token //此处为你定义的token值(Bearer token)的认证方式
//                 },
//                 withCredentials: true, //是否允许带token
//                 success(res) {
//                     console.log(res);
//                     var resData = {};
//                     resData.default = res.url;
//                     // resData一定要是一个对象，而且外面一定要带一个default设置为图片上传之后的url，这是creditor的规定格式。
//                     resolve(resData);
//                 },
//                 error(err){
//                     reject(err)
//                 }
//             })
//         })
            
//     }
// }