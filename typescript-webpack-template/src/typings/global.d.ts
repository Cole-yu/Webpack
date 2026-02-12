// 核心原则：declare global 是「模块中扩展全局」的语法，无模块标识（import/export）时使用必然报错。
declare global {
  type BaseConfig = Record<string, App.ProductConfig | string>;

  export interface Window {
    configKey: string;
    baseConfig: BaseConfig;
    auth: boolean;
    indicator_trade_version: string;
    queryParams: Partial<Record<string, string>>;
  }
}

export {}; // 无 export {}，也无 declare global → 完全符合 .d.ts 全局声明规则