import Vue from 'vue'
import App from './App'
import api from './api'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'

import './public/css/font.css' //字体图标'

import axios from './api' //axios http请求配置
Vue.prototype.$http = axios;

// import './scss/element-variables.scss';  //定制主题

import util from './public/js/util' //公共方法
Vue.prototype.util = util;
import './public/css/common.css' //公共css

import validate, { config } from './public/js/vee-validate'; //表单验证插件配置
Vue.use(validate, config);

Vue.use(ElementUI)
Vue.prototype.$http = api
Vue.config.productionTip = true


new Vue({
    el: '#app',
    router,
    store,
    axios,
    render: h => h(App)
})

import components from './components/' //加载公共组件
Object.keys(components).forEach((key) => {
    var name = key.replace(/(\w)/, (e) => e.toUpperCase())  //组件首字母大写 el-Xxxxx
    Vue.component(`el${name}`, components[key])
})