import Vue from 'vue';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Carousel, CarouselItem } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Carousel);
Vue.use(CarouselItem);
import '@/style/style.css';
import { add } from '@/js/foo';
import { age, getPerson } from '@/ts/bar';
import { MyApp } from '@/ts/baz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <MyApp  />
  </BrowserRouter>
);

console.log('age', age);
let std = getPerson({
  name: 'yyy',
  age: age
})
console.log('std', std);

Vue.config.productionTip = false;

console.log(add(2, 5));
// console.log('BASE_URL', BASE_URL);

new Vue({
  render: h => h(App)
}).$mount('#app');