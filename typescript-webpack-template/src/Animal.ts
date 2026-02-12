interface AnimalConstructor {
  new(name: string): AnimalInterface;
}

interface AnimalInterface {
  eat(food: string): void;
}

// ctor 通过类型注解的方式确保传入的构造函数符合正确的签名要求
function createAnimal(ctor: AnimalConstructor, name: string): AnimalInterface {
  return new ctor(name);
}

class Cat implements AnimalInterface {
  constructor(name: string) {

  }
  eat(food: string): void {
    console.log(`cat's food: ${food}`);
  }
}

class Snake implements AnimalInterface {
  constructor(name: string, type: boolean) {

  }
  eat(food: string): void {
    console.log(`snake's food: ${food}`);
  }
}

// let snake = createAnimal(Snake, "小蛇"); // 报错 Snake 的构造函数签名不符合 AnimalConstructor 的签名要求

let digital = createAnimal(Cat, "小猫咪");
digital.eat("小鱼干");
// ------------------------------------------------------------------------------------------------------------------------

interface Animal {
  // new (name: string); // 构造器签名 -> 在class implements interface 时不会检查; ctor: AnimalConstructor 类型注解的方式会检查构造函数签名
  // 类分为 静态部分的类型和实例的类型；类实现一个接口时，只对其实例部分进行类型检查；
  // constructor 存在于类的静态部分，所以不在检查的范围内。通过构造器签名定义接口实现接口的类会报错
  eat(food: string): void;
}

interface GenericIdentityFn<T> {
  (arg: T): T;
}

class Car {
  name?: string;
  drive(): void {
    console.log("car is driving");
  }
}

type Name = string; // 类型别名
type NameResolve = () => string;
type NameOrResolve = Name | NameResolve;

// interface 和 type 需要使用 export type 才能重新导出类型
export type {
  Animal,
  GenericIdentityFn,
  NameOrResolve,
}

// class 类型 不需要使用 export type 重新导出类型
export {
  Car,
}

export default Animal;