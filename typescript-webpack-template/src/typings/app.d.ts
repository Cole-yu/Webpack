declare namespace App {
  type UserConfig = {
    userId: string | null;
  }

  // type User = {
  //   userId: string;
  //   getUserId(): string;
  //   setUserId(userId: string): void;
  // }

  type User = import("../plugins/User").UserInterface | null;

  type Product = {
    productId: string;
    indicator: string;
    indicatorName: string;
    moduleId: string;
    exkey: string;
    prodUrl: string;
    getIndicator(): string;
  }

  type ProductConfig = {
    productId: string;
    indicator: string;
    indicatorName: string;
    moduleId: string;
    exkey: string;
    prodUrl: string;
  }

  type Stock = Record<"code" | "name", string>;

  type Auth = {
    auth: boolean,
    expiry: number,
  };

  interface BridgeStrategy {
    getUserId(): Promise<string>;
    getUserAndProductRights(user: User, product: Product): Promise<Auth>;
    jumpKlineChart(params: Stock): Promise<string>;
  }

  interface GuoYuanBridgeStrategy extends BridgeStrategy {

  }

  interface XinDaBridgeStrategy extends BridgeStrategy {
    share(s: string): void;
  }

  interface BridgeContext {
    new(bridgeStrategy: App.BridgeStrategy);
    strategy: BridgeStrategy;
    user: User;
    product: Product;
    init(): void;
    getUser(): User;
    getProduct(): Product;
    getAuth(): boolean;
    getBridgeStrategy(): BridgeStrategy;
    setBridgeStrategy(s: BridgeStrategy): void;
  }
}