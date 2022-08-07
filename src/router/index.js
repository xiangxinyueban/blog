import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView';
import EditView from '@/views/EditView';
import Main from '@/views/Main';
import Login from '@/components/Login';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    //懒加载
    component: Login
  },
  {
    path: '/main',
     component: Main,
    // meta:{
    //   isLogin: true
    // },
    children: [
      {
        path: '', 
        redirect: '/main/home',
      },
      {
        path: 'home', 
        name: 'homeview',
        component: HomeView,//() => import('../views/HomeView') 
      },
      {
        path: 'articlemanagement',
        name: 'articlemanagement',
        component: ()=> import('@/views/ArticleManagement')
      },
      {
        path: 'usercenter',
        name: 'usercenter',
        component: ()=> import('@/views/UserCenter')
      },
      {
        path: 'edit',
        name:"edit",
        component: EditView//() => import('../views/EditView')
      },
      {
        path: 'news',
        name:"news",
        component: () => import('../views/News')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
