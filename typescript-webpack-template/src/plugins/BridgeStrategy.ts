// 单个APP的桥接策略抽象类
interface BridgeStrategy {
  getUserId(): Promise<string>;
  getUserAndProductRights(user: App.User, product: App.Product): Promise<App.Auth>;
  jumpKlineChart(params: App.Stock): Promise<string>;
}

export type {
  BridgeStrategy,
}

export default BridgeStrategy;