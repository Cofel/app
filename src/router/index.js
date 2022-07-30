// 路由配置
import Vue from "vue";
import VueRouter from "vue-router";

// 使用插件
Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push | replace
// call || apply区别
// 相同点：都可以调用函数一次，都可以篡改函数的上下文一次。
// 不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组。
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {}, () => {});
    }
}
// replace
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => {}, () => {});
    }
}

//配置路由
export default new VueRouter({
    // 配置每一个路由
    routes: [{
            // 在访问默认网址的时候，自动跳转到首页"home"
            path: "*",
            redirect: "/home"
        },
        {
            path: "/home",
            component: Home,
            meta: {
                footShow: true
            }
        },
        {
            // 在占位/:keyword后面加上?，代表params参数可传可不传，底层为正则表达式
            path: "/search/:keyword?",
            component: Search,
            meta: {
                footShow: true
            },
            name: "search",
            // props: true,
            // props:{a:1,b:2},
            props: ($route) => ({
                keyword: $route.params.keyword,
                k: $route.query.k
            })
        },
        {
            path: "/login",
            component: Login,
            meta: {
                footShow: false
            }
        },
        {
            path: "/register",
            component: Register,
            meta: {
                footShow: false
            }
        },
    ]
})