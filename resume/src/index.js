import Vue from 'vue';
import App from "./app.vue";
import "babel-polyfill";
import "./assets/styles/bootstrap/bootstrap.min.css";
import './assets/styles/global.css';
import "./assets/styles/font-awesome-4.7.0/css/font-awesome.min.css";

const root = document.createElement("div");
document.body.appendChild( root );

new Vue({
    render:(h) => h(App)  // 将 h 作为 createElement 的别名是 Vue 生态系统中的一个通用惯例,createElement(标签,特性,子节点)
}).$mount( root )
