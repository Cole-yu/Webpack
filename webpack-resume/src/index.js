import Vue from 'vue';
import Main from "./main.vue";
import "./assets/styles/bootstrap/bootstrap.min.css";
import './assets/styles/global.css';

console.log('NODE_ENV: ', process.env.NODE_ENV);

const root=document.createElement("div");
document.body.appendChild(root);

new Vue({
    render:(h) => h(Main)  // 将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例,createElement(标签,特性,子节点)
}).$mount(root)
