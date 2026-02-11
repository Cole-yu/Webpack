interface Animal {
  eat(food: string): void;
}

interface GenericIdentityFn<T> {
  (arg: T): T;
}

export type {
  Animal,
  GenericIdentityFn,
}

export default Animal;