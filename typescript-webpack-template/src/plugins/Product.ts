// 单个指标产品类
class Product {
  productId: string;
  indicator: string;
  indicatorName: string;
  moduleId: string;
  exkey: string;
  prodUrl: string;

  constructor(config: App.ProductConfig) {
    let { productId, indicator, indicatorName, moduleId, exkey, prodUrl } = config;
    this.productId = productId;
    this.indicator = indicator;
    this.indicatorName = indicatorName;
    this.moduleId = moduleId;
    this.exkey = exkey;
    this.prodUrl = prodUrl;
  }

  getIndicator() {
    return this.indicator;
  }
}

// 指标清单类
class ProductMenu {
  ProductMenuList: App.Product[];
  productMenuMap: Map<string, App.Product>;

  constructor() {
    this.ProductMenuList = [];
    this.productMenuMap = new Map();
  }

  add(product) {
    this.ProductMenuList.push(product);
    this.productMenuMap.set(product.indicator, product);
  }
}

export {
  Product,
  ProductMenu,
}

export default Product;