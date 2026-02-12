import { Animal, GenericIdentityFn, NameOrResolve, Car } from "./Animal";
import { DataType, resoleQueryParams } from "./utils/publicUtils";
import { setupBridgeContext } from "./plugins/setupBridgeContext";

let queryParams: DataType = resoleQueryParams();
console.log("queryParams", queryParams);

window.configKey = "bddn";

setupBridgeContext();

function identity<T>(arg: T): T {
  return arg;
}
let myIdentity: GenericIdentityFn<number> = identity;
let myIdentityNumber: number = myIdentity(100);
console.log("myIdentityNumber的值:", myIdentityNumber);

// 类类型 类实现接口implements的模式，通过接口描述了类的公共部分，只对其实例部分进行类型检查
class Dog implements Animal {
  constructor(name: string) {

  }
  eat(food: string): void {
    console.log(`dog's food: ${food}`);
  }
}
let dog: Dog = new Dog("旺仔");
let food: string = "骨头";
dog.eat(food);

let car: Car = new Car();
car.drive();

let name: NameOrResolve = "小明";
let nameFn: NameOrResolve = () => "小明";