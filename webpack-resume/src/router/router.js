import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "../app.vue";
import Life from "../life.vue";
import Nav from "../nav.vue";

Vue.use(VueRouter);

// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { path: '/app', component: App },
  { path: '/life', component: Life },
  { path: '/nav', component: Nav }, 
  { path: '*', redirect:"/app" }    // 重定向路由
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router;