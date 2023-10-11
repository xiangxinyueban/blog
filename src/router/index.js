import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '../view/HomeView.vue'
import ArticleView from '../view/ArticleView.vue'
import AboutView from '../view/AboutView.vue'
// import LoginView from '../components/Login'


const routes = [
    {
        path: "/", // URL path
        redirect: "/about", // Redirect to /home
    },
    {
        path: "/home", // URL path
        name: "HomeView", // Name of the route
        component: HomeView, // Component to load when this route is accessed
    },
    {
        path: "/article", // URL path
        name: "ArticleView", // Name of the route
        component: ArticleView, // Component to load when this route is accessed
    },
    {
        path: "/about", // URL path
        name: "AboutView", // Name of the route
        component: AboutView, // Component to load when this route is accessed
    },
    {

    }
    // {
    //     path: "/login", // URL path
    //     name: "LoginView", // Name of the route
    //     component: LoginView, // Component to load when this route is accessed
    // }
];

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
    linkActiveClass: 'active',
  })

export default router
