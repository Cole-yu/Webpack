# vite 模板

### 简介
```
学习 vite 后搭建的小项目，供以后个人开发开箱即用。
这是一个自己基于 vite 搭建的 vue3 脚手架，配置了相关模块，添加了常用功能，便于以后 vue3 新项目的搭建。
此脚手架集成了 `vue3`+`typescript` 可省去繁琐的配置过程，开箱即用, 支持 vue3模板，渲染函数，tsx 3种写法。
ts/tsx 文件使用 tsc编译

通过 "@vitejs/plugin-vue" 解析 SFC 文件(.vue)

通过 "@vitejs/plugin-vue-jsx" 解析 tsx 文件
tsconfig.json中 jsx: preserve
```

### 使用
安装依赖：
```
npm install
```

开发环境：
```
npm run dev
```

生产环境：
```
npm run build
```

### Webpack 版本
- `vite`：4.4.5

### 功能版本
- `vue3`：3.3.4
- `@vitejs/plugin-vue`：4.2.3
- `@vitejs/plugin-vue-jsx`：3.0.2
- ...

### 说明
```
    vite.config.ts

    tsconfig.json
        "compilerOptions": {
            "target": "ES2015",
            "module": "ES2015",
            "resolveJsonModule": true,
            "noImplicitAny": false, // 有隐含的any类型时报错
            "removeComments": true, // 移除注释
            "preserveConstEnums": true, // 保留const和enum声明
            "esModuleInterop": true,
            "moduleResolution": "node", // 非相对导入 /node_modules
            "jsx": "preserve", // react-jsx 模式会以 _jsx("div", {}, []) 的调用形式，输出文件扩展名为.js
        }       
```
