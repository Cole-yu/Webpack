import {
  BridgeContext,
  GuoYuanBridgeStrategy,
} from "./index";

// 初始化桥接策略、用户信息、产品信息
async function setupBridgeContext() {
  let guoYuanBridgeStrategy = new GuoYuanBridgeStrategy();
  let bridgeContext = new BridgeContext(guoYuanBridgeStrategy);
  await bridgeContext.init();

  let user: App.User | null = bridgeContext.getUser();
  let userId: string | null = bridgeContext.getUser()?.userId || null;

  let product: App.Product | null = bridgeContext.getProduct();
  let productId: string | null = bridgeContext.getProduct()?.productId || null;
  let indicator: string | null = bridgeContext.getProduct()?.indicator || null;

  let auth: boolean = await bridgeContext.getAuth();

  console.log("2222", {
    user,
    userId,

    product,
    productId,
    indicator,

    auth,
  });
}

export {
  setupBridgeContext,
}

export default setupBridgeContext;