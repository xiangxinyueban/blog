import axios from 'axios';
import qs from 'qs'

function axiosPost(options) {
    axios({
        url: options.url,
        method: 'post',
        headers: options.headers,
        withCredentials: options.withCredentials,
        // data: options.data,
        data: qs.stringify({
            ...options.data,
            // key: ''//这里的key是存在vuex里面的用户token,如果用户未登录，key就是''
        })
    }).then((res) => {
        options.success(res.data);
    }).catch((err) => {
        options.error(err);
    })
}


function axiosGet(options) {
    axios(options.url)
    .then((res) => {
        options.success(res.data);
    }).catch((err) => {
        options.error(err);
    })
}

export {
    axiosGet,
    axiosPost
}