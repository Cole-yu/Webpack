// declare module "*.vue"; // 采用声明的简写形式以便能够快速使用 app.vue 文件

// Vue2 写法
declare module "*.vue" {
  import Vue from 'vue';
  export default Vue;
}

// Vue3 写法
// declare module '*.vue' {
//   import type { DefineComponent } from 'vue';
//   // 声明.vue文件的类型（空对象、空数组、any分别对应props、emits、setup返回值）
//   const component: DefineComponent<{}, {}, any>;
//   export default component;
// }