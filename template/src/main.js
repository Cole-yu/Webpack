import Vue from 'vue';
import App from './App';
import { Carousel, CarouselItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Carousel);
Vue.use(CarouselItem);
import '@/style/style.css';
import { add } from '@/js/foo';

Vue.config.productionTip = false;

console.log(add(2, 5));
// console.log('BASE_URL', BASE_URL);

new Vue({
  render: h => h(App)
}).$mount('#app');