export interface IPerson {
  name: string;
  age: number;
}

export class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old`;
  }
}

export function factorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

interface ICalculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

export const calculator: ICalculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

export type Heroes = 'Superman' | 'Gatotkaca' | 'Batman';

export const chooseHero = (hero: Heroes): string => {
  return `You have chosen ${hero}`;
};
