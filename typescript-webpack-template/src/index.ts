import { Animal, GenericIdentityFn } from "./Animal";
import { setupBridgeContext } from "./plugins/setupBridgeContext";

window.configKey = "bddn";

setupBridgeContext();

function identity<T>(arg: T): T {
  return arg;
}
let myIdentity: GenericIdentityFn<number> = identity;
let myIdentityNumber: number = myIdentity(100);
console.log("myIdentityNumber的值:", myIdentityNumber);

class Dog implements Animal {
  eat(food: string): void {
    console.log(`food: ${food}`);
  }
}
let dog = new Dog();
let food: string = "骨头";
dog.eat(food);