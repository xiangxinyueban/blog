import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from '@/store'
import ElementUI from 'element-plus'
import MyUI from '@/libs/MyUI'
import 'element-plus/theme-chalk/index.css'
import '@/assets/icofont/icofont.css'

// 
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';


// CKEditor
// import CKEditor from '@ckeditor/ckeditor5-vue';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

router.beforeEach((to,from,next) => {
    let token = localStorage.getItem("token");
    // localStorage.clear();
    if (token) {
        store.state.isLogin = true;
        // if (!to.meta.isLogin) {
        //     next({
        //         path:'/main'
        //     })
        // } else {
            
        store.state.userConfig = JSON.parse(localStorage.getItem("userConfig"));
            next();    
        // }
        
        //如果已经登录，还想进入登录注册界面，则定向到主界面。
        
    } else {
        if (to.meta.isLogin) { //用户想进入需要登录的页面，则定向回登录界面。
            next({
                path: '/login'
            })
        } else { //用户进入无需登录的界面，则直接跳转。
            next()
        }
    }
})

createApp(App).use(router).use(store).use(ElementUI).use(MyUI).use(VMdEditor).mount('#app')
