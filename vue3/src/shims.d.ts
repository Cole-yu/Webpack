declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module "@/js/foo"{ // 非相对模块导入
    export function add<T>(...arg:T[]):T;
    export function getName():Promise<string>;
}

declare module "@/ts/bar"; // 相对模块导入