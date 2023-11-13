function BazButton({title}:{title:string}){
    return (<button>{title}</button>)
}

export default function Foo() {
    return (
    <div class='foo-wrap'>
        <BazButton title='Foooo 组件'/>
    </div>)
}