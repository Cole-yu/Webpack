import { createApp } from 'vue';
import App from './App.vue';
import '@/style/style.css';
import { add } from '@/js/foo';
import { age, getPerson } from '@/ts/bar';
// import { MyApp } from '@/ts/baz';

console.log('add', add(21, 5, 10));

console.log('age', age);
let std = getPerson({
  name: 'yyy',
  age: age
})
console.log('std', std);

// console.log('BASE_URL', BASE_URL);

const app = createApp(App).mount('#app');

// app.config.errorHandler = (err) => {
//   console.log('err', err)
// }