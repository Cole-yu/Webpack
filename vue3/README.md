# webpack 模板

### 简介
```
学习 Webpack 后搭建的小项目，供以后个人开发开箱即用。
这是一个自己基于 Webpack5 搭建的 vue3 脚手架，配置了相关模块，添加了常用功能，便于以后 vue3 新项目的搭建。
此脚手架集成了 `vue3`+`typescript` 可省去繁琐的配置过程，开箱即用, 支持 vue3模板，渲染函数，tsx 3种写法。

通过 "@vue/cli-plugin-babel/preset" 预置集实现
tsx => jsx // tsconfig.json中jsx: preserve

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
- `webpack`：5.89.0
- `webpack-cli`：5.1.4

### 功能版本
- `vue3`：3.3.8
- `vue-loader`：17.3.1
- `@vue/compiler-sfc`：3.3.8
- ...

### 说明
```
    .tsx 文件两套编译方案
    webpack.config.js
        {
            test: /\.tsx?$/,
            loader: "ts-loader" // tsc 编译
            // loader: "babel-loader" // babel 编译，预设（presets）改为 "react-app" npm install babel-preset-react-app -D
        },

    方案一： tsc 编译，使用 ts-loader
        tsconfig.json
            "compilerOptions": {
                "module": "CommonJS",
                "noImplicitAny": true, // 有隐含的any类型时报错
                "removeComments": true, // 移除注释
                "preserveConstEnums": true, // 保留const和enum声明
                "esModuleInterop": true, // 给cjs模块增加defalut(React.default)属性。使 import * as React from 'react'; 能改成这样写 import React from 'react';
                "moduleResolution": "Node", // 非相对导入 /node_modules
                "jsx": "react-jsx", // react-jsx 模式会以 _jsx("div", {}, []) 的调用形式，输出文件扩展名为.js
            }
        babel.config.json
            "presets": [
                "@babel/preset-react"
            ]

    方案二： babel 编译，使用 babel-loader
        npm i babel-preset-react-app -D
        babel.config.json
            "presets": [
                ["react-app", { "absoluteRuntime": false }] 
            ]
```
