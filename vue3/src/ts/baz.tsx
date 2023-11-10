import { ref, h, defineComponent } from 'vue';

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

// 函数式组件写法
function MyApp() {
  return (
    <div>      
      <h1>欢迎来到我的应用</h1>
      <MyButton title="我是一个按钮" />
      <DivWrap />
    </div>
  );
}

const vnode = <div>baz_HelloWorld</div>
export default defineComponent({
  name: "baz",
  // 在jsx中使用渲染函数写法
  // setup(props, ctx) {
  //   return () => h('div', "baz_helloword11111111")
  // },
  // render(){
  //   return h('div', "baz_HelloWorld22222222");
  // }

  // jsx 写法
  // setup(){
  //   return () => vnode
  // }
  render(){
    return vnode;
  }
});

// 对象形式，包含render方法
const obj = {
  render() {
    return h('div', 'render方法+渲染函数+对象 的写法形式')
    // return (
    //   <div>带render方法的对象形式写法</div>
    // )
  }
}

export {  
  MyButton,
  MyApp,
  obj,
}