import { axiosPost } from "@/request/http";
// import {useStore} from "vuex"
export default class MyUploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }
    async upload(){
        const data = new FormData();
        data.append('files', await this.loader.file);
        let token = localStorage.getItem("token");
        return new Promise((resolve, reject) => {
            axiosPost({
                url: "/api/img/upload",
                data,
                headers: {
                    "token": token //此处为你定义的token值(Bearer token)的认证方式
                },
                withCredentials: true, //是否允许带token
                success(res) {
                    console.log(res);
                    var resData = {};
                    resData.default = res.url;
                    // resData一定要是一个对象，而且外面一定要带一个default设置为图片上传之后的url，这是creditor的规定格式。
                    resolve(resData);
                },
                error(err){
                    reject(err)
                }
            })
        })
            
    }
}