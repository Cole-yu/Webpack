import { Product, User } from "./index";

// 桥接上下文
class BridgeContext {
  strategy: App.BridgeStrategy;
  user: App.User | null;
  product: App.Product | null;

  constructor(strategy: App.BridgeStrategy) {
    this.strategy = strategy;
    this.user = null;
    this.product = null;
  }

  async init() {
    let userId = await this.strategy.getUserId();
    this.user = new User({ userId });

    let config = window.baseConfig[window.configKey] as App.ProductConfig;
    this.product = new Product({
      productId: config.productId,
      indicator: config.indicator,
      indicatorName: config.indicatorName,
      moduleId: config.moduleId,
      exkey: config.exkey,
      prodUrl: config.prodUrl,
    });
  }

  getUser() {
    return this.user;
  }

  getProduct() {
    return this.product;
  }

  async getAuth() {
    let { auth } = await this.strategy.getUserAndProductRights(this.user as App.User, this.product as App.Product);
    return auth;
  }

  jumpKlineChart(params: App.Stock) {
    this.strategy.jumpKlineChart(params);
  }

  getBridgeStrategy() {
    return this.strategy;
  }

  setBridgeStrategy(strategy) {
    this.strategy = strategy;
  }
}

export {
  BridgeContext,
}

export default BridgeContext;