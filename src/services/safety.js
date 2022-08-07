import { axiosPost, axiosGet } from "@/request/http";

function GetCaptcha() {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: "/api/safety/captcha",            
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
    GetCaptcha
}