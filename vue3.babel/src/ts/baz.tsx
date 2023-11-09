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
  MyApp,
}