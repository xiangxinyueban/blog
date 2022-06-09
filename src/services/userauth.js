import { axiosPost, axiosGet } from '@/request/http'

function login(userconfig) {
    console.log(userconfig);
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/user/login",
            data: {...userconfig},
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success(data) {
                resolve(data);
            },
            error(err){
                reject(err)
            }
        })
    })
}

function register(userconfig) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "/api/user/register",
            data: {...userconfig},
            success(data) {
                resolve(data);
            },
            error(err){
                reject(err)
            }
        })
    })
}

function logout(){
    return new Promise((resolve, reject) => {
        axiosGet({
            url: "/api/user/logout",
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
    login,
    register,
    logout
}