import './assets/style.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/iconfont/iconfont.css'
import store from './store'
import PanelHead from './components/panelHead.vue'

// 引入ElementPlus组件库的图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 路由守卫逻辑
router.beforeEach((to, from)=>{

  const token = localStorage.getItem('pz_token')
  // 非登录页面token不存在
  if(!token&&to.path!=='/login'){
    return '/login'
  } else if(token&&to.path==='/login'){  //已登录，在登录页,需要跳转到根目录
    return '/'
  } else{
      return true
  }

})



const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
} //注册图标组件，方便直接使用图标组件

// 全局注册该组件
app.component('ManelHead',PanelHead)
app.use(router) //挂载路由
app.use(store)  //挂载store
app.use(ElementPlus)  //挂载ElementPlus，方便直接使用组件库组件
app.mount('#app')
