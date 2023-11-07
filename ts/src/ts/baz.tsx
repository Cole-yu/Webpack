// import React from 'react'; // 需要在 tsconfig.json 中设置 compilerOptions.esModuleInterop = true 【文章:】https://blog.csdn.net/zdhsoft/article/details/123785137
// import * as React from 'react';
// import * as ReactDOM from 'react-dom/client';

const divContent = <div>
  {
    ['foo', 'bar', 'baz'].map((item,index,arr) => {
      return <span key={index}>{item}{ index < (arr.length - 1) ? (<i>,</i>) : null }</span>
    })
  }
</div>

/**
 * 组件的名称必须以大写字母开头
 * 函数式组件写法（推荐）
 * @returns 
 */
function DivWrap() {
  return divContent; // 如果标签和 return 关键字不在同一行，则必须把它包裹在一对括号中 ()
}

interface Props {
  foo: string;
}

/**
 * 类组件写法（废弃）
 */
// class MyComponent extends React.Component<Props, {}> {
//   render() {
//     return <span>{this.props.foo}</span>
//   }
// }

function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}

function MyApp() {
  return (
    <div>      
      <h1>欢迎来到我的应用</h1>
      <MyButton title="我是一个按钮" />
      <DivWrap />
    </div>
  );
}

export {
  // MyComponent,
  MyApp,
}