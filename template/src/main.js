import Vue from 'vue';
import App from './App.vue';
import { Carousel, CarouselItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Carousel);
Vue.use(CarouselItem);
import '@/style/style.css';

// console.log('BASE_URL', BASE_URL);

const add = (x, y) => {
  return x + y;
};
console.log(add(2, 5));


// const promise = new Promise(resolve => {
//   setTimeout(() => {
//     console.log('定时器执行完了~');
//     resolve();
//   }, 1000);
// });
 
// console.log(promise);


new Vue({
  render: h => h(App)
}).$mount('#app');