import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/routes';
import '@/styles/public.less';
import ElemnetUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElemnetUI);

// console.log('process.env', process.env);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');