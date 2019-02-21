import Vue from 'vue';
import App from './app.vue';

import './assets/styles/global.styl';

const root=document.createElement("div");
document.body.appendChild(root);

new Vue({
    render:(h)=>h(App)      // render 不是reder 找了半天bug
}).$mount(root)  // vue挂载点
