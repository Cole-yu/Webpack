// 用户类
class User {
  public userId: string | null = null;
  static instance: App.User | null = null;

  // 私有属性 option
  // #option: App.UserConfig = {
  //   userId: null,
  // };
  // 等价于
  private option: App.UserConfig = {
    userId: null,
  };

  constructor(option: App.UserConfig) {
    if (User.instance) {
      return User.instance;
    }

    // this.#option = option;
    this.option = option;

    let { userId } = option;
    this.userId = userId;

    User.instance = this;
  }

  static getInstance(option?: App.UserConfig): App.User {
    if (!User.instance && option) {
      return User.instance = new User(option);
    }
    return User.instance;
  }

  getUserId() {
    return this.userId;
  }

  setUserId(userId) {
    // this.#option.userId = this.userId = userId;
    this.option.userId = this.userId = userId;
  }
}

export type {
  User as UserInterface
}

export {
  User
}

export default User;