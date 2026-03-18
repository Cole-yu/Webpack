// 用户类
class User {
  readonly userId!: string;
  private static instance: App.User;

  // 私有属性 option
  // readonly #option!: App.UserConfig;
  // 等价于
  private readonly option!: App.UserConfig;

  constructor(option: App.UserConfig) {
    if (User.instance) {
      return User.instance;
    }

    // this.#option = option;
    this.option = option;

    this.userId = option.userId;
    User.instance = this;
  }

  static getInstance(option?: App.UserConfig): App.User {
    if (!this.instance && option) {
      return this.instance = new User(option);
    }

    // 必须保证返回已创建的实例
    if (!this.instance) {
      throw new Error("首次调用 getInstance 必须传入 UserConfig");
    }

    return this.instance;
  }

  getUserId(): string {
    return this.userId;
  }

  /**
   * 获取完整配置
   */
  getOption(): Readonly<App.UserConfig> {
    // return this.#option;
    return this.option;
  }
}

export {
  User
}

export default User;