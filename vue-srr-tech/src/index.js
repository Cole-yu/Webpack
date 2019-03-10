import Vue from 'vue';
import App from './app.vue';
import axios from 'axios';

import './assets/styles/global.styl';

// babel只会转化语法，不会转化新的API
// import "babel-polyfill";   // 引入 polyfill 文件，用于转化ES2015的新API；现在的浏览器似乎已经完成了对ES6的新API开发，所以不加也没有报错，除非在很老的浏览器中(IE8)

const root=document.createElement("div");
document.body.appendChild(root);

// ES6的新API测试
const lastName="yu";
var arr=[1,2,3];
var input=[...arr];
input.map(item=>item+1);
console.log(input);
console.log(Object.assign({},{name:"yfx"}));
var sym=Symbol();
var promise=new Promise(function(resolve, reject){    
    setTimeout(function(){
        console.log('执行完成');
        resolve('随便什么数据');
    }, 2000);
});
class Person{}
console.log(arr[Symbol.iterator]());


axios.post('http://localhost:3000', {
	firstName: 'Fred',
	lastName: 'Flintstone'
})
.then(function (response) {	
	console.log(response);
	
	// response = {
	// 	config:{ },
  	// 	data:[],
  	// 	headers:{},
  	// 	request:{},
  	// 	status:200,
  	// 	statusText:"ok"
  	// }
	  	
	console.log(response.data[0].name);
})
.catch(function (error) {
	console.log(error);
});

new Vue({
    render:(h)=>h(App)      // render 不是reder 找了半天bug
}).$mount(root)             // vue挂载点
