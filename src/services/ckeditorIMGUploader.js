import axios from "axios";
// import {useStore} from "vuex"
export default class MyUploadAdapter {
    constructor(loader) {
        this.loader = loader;
    }
    async upload(){
        const data = new FormData();
        data.append('file', await this.loader.file);
        let token = localStorage.getItem("token");
        return new Promise((resolve, reject) => {
            axios({
                url: "/api/upload/upload_image",
                method: 'post',
                data,
                headers: {
                    "Content-Type": "multipart/form-data",
                    "token": token //此处为你定义的token值(Bearer token)的认证方式
                },
                withCredentials: true, //是否允许带token
            }).then((res)=> {
                console.log("response:", res.data.data);
                var resData = {};
                resData.default = res.data.data.image_url_min;
                // resData一定要是一个对象，而且外面一定要带一个default设置为图片上传之后的url，这是creditor的规定格式。
                resolve(resData);
            }).catch(error => {
                reject(error)
            })
        })
            
    }
}