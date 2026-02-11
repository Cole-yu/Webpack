import Vue from 'vue';
import { BridgeStrategy } from "./BridgeStrategy";

// 开发环境模拟第三方app中指令返回的伪造数据
let devConfig = {
  auth: true,
  expiry: 100,
  userId: '2351fc7c33ec9f07b8ebfbe201c61439', // userId
}

// 国元证券APP桥接策略实现类
class GuoYuanBridgeStrategy implements BridgeStrategy {
  getUserId(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (devConfig.auth) {
        let userId: string = devConfig.userId;
        return resolve(userId);
      }
    })
  }

  getUserAndProductRights(user: App.User, product: App.Product): Promise<App.Auth> {
    return new Promise((resolve, reject) => {
      if (devConfig.auth) {
        let result = {
          auth: devConfig.auth,
          expiry: devConfig.expiry,
        }
        return resolve(result);
      }
    });
  }

  jumpKlineChart(params: App.Stock): Promise<string> {
    console.log("jumpKlineChart 参数", params)
    return new Promise((resolve, reject) => {
      if (devConfig.auth) {
        return resolve("OK");
      }
    });
  }
}

export {
  GuoYuanBridgeStrategy,
}

export default GuoYuanBridgeStrategy;