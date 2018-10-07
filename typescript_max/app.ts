// string
let myName = 'Kal';
// myName = 123;

// number
let myAge = 22;
// myAge = 'Kal';

// boolean
let lovesProgramming = true;
// lovesProgramming = 1;

// this will create a type "any"
let myRealAge;
myRealAge = '29';
myRealAge = 29;

// assign types
let myTypedAge: number;
// myTypedAge = '29';
myTypedAge = 29;

// array
let hobbies: string[] = ['cooking', 'sports'];
// hobbies = 123;
// hobbies[0] = 123;
// console.log(hobbies[0], typeof hobbies);

// tuples
let address: [string, number] = ['Superstreet', 99];

// enums
enum Color {
  Gray, // 0
  Green, // 1
  Blue, // 2
}

let myColor: Color = Color.Green;
// console.log(myColor);

// any (try to avoid this)
let car: any;
car = 'BMW';
// console.log(car);
car = { brand: 'BMW', series: 3 };
// console.log(car);

// functions
function returnMyName(): string {
  return myName;
}

function logMyAge(): void {
  console.log(myName);
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
// console.log(multiply(3, 2));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = logMyAge;
// myMultiply();
myMultiply = multiply;
// console.log(myMultiply(3, 5));

// objects
let userData: { name: string; age: number } = {
  name: 'Kal',
  age: 29,
};

// userData = {
//   hi: 'Max',
//   there: 25,
// };

userData = {
  name: 'Max',
  age: 25,
};

let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output(all: boolean): number[] {
    return this.data;
  },
};

// complex = {};

// type alias
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [3, 4, 5],
  output(all: boolean): number[] {
    return this.data;
  },
};

// union types
let myRealRealAge: number | string;
myRealRealAge = 29;
myRealRealAge = '29';

// check types
let finalValue = 29;
if (typeof finalValue === 'number') {
  // console.log(`Final value is a number: ${finalValue}`);
}

// never
function neverReturns(): never {
  throw Error('An error!');
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;

// exercise
type BankAccount = { money: number; deposit: (value: number) => void };

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  },
};

let myself: { name: string; bankAccount: BankAccount; hobbies: string[] } = {
  name: 'Max',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking'],
};

myself.bankAccount.deposit(3000);

// console.log(myself);

// no implicity any
// const returnAny = x => {
//   return x;
// };

// strict null checking + no unused parameters

// function controlMe(isTrue: boolean, somethingElse: boolean) {
//   let result: number;
//   if (isTrue) {
//     result = 12;
//   }
//   return result;
// }

// const and let block scoping
let testval = 45;

function logTestVal() {
  // console.log(testval);
  let testval = 55;
  console.log(testval);
}

// default paramters
const countdown = (start: number = 10): void => {
  while (start > 0) {
    console.log(start);
    start--;
  }
  console.log('Done', start);
};

// countdown();

// spread operator in TS
function makeArray(...args: number[]) {
  return args;
}

// ES6 in TS exercises

// Exercise 1 - Maybe use an Arrow Function?
const double = (value: number): number => {
  return value * 2;
};
// console.log(double(10));

// Exercise 2 - If only we could provide some default values...
const greet = (name: string = 'Max'): void => {
  console.log('Hello, ' + name);
};
// greet();
// greet('Anna');

// Exercise 3 - Isn't there a shorter way to get all these Values?
const numbers: number[] = [-3, 33, 38, 5];
// console.log(Math.min(...numbers));

// Exercise 4 - I have to think about Exercise 3 ...
const newArray: number[] = [55, 20];
newArray.push(...numbers);
// console.log(newArray);

// Exercise 5 - That's a well-constructed array.
const testResults: number[] = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
// console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
const scientist: { firstName: string; experience: number } = {
  firstName: 'Will',
  experience: 12,
};
const { firstName, experience } = scientist;
// console.log(firstName, experience);

// classes in TS
class Person {
  name: string;
  private type: string = 'Person';
  protected age: number;

  constructor(name: string, public username: string, age: number) {
    this.name = name;
    this.age = age;
  }
  private setType(type: string): void {
    this.type = type;
  }
  setAndPrintType(type: string): void {
    this.setType(type);
    console.log(this.type);
  }
}

class CoolPerson extends Person {
  constructor(name: string, username: string, age: number) {
    super(name, username, age);
  }

  printAge(): void {
    console.log(this.age);
  }
}

const person = new Person('Kal', 'klcantrell', 29);
const coolPerson = new CoolPerson('Kalalau', 'klcantrell13', 29);
// person.setAndPrintType('AWESOME');
// person.printType();
// person.printType();
// coolPerson.printAge();
// coolPerson.printType();
// console.log(coolPerson);

// Getters and Setters
class Plant {
  private plantSpecies: string = 'Default';

  get species() {
    return this.plantSpecies;
  }

  set species(value: string) {
    if (value.length > 3) {
      this.plantSpecies = value;
    } else {
      this.plantSpecies = 'Default';
    }
  }
}

let plant = new Plant();
plant.species = 'AB';
// console.log(plant.species);

// static properties and methods

class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

// console.log(2 * Helpers.PI);
// console.log(Helpers.calcCircumference(3));

// abstract classes

abstract class Project {
  projectName: string = 'Default';
  budget: number = 10000;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

const project = new ITProject();
// console.log(project);
project.changeName('AWESOME IT PROJECT');
// console.log(project);

// singletons in TS

class OnlyOne {
  private static instance: OnlyOne;
  private constructor(public readonly name: string) {
    this.name = name;
  }
  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('I AM THE ONLY ONE');
    }
    return OnlyOne.instance;
  }
}

// let wrong = new OnlyOne('I AM THE ONLY ONE');
let right = OnlyOne.getInstance();
// console.log(right.name);

// Classes in TS exercises

// Exercise 1 - How was your TypeScript Class?
function Car(name) {
  this.name = name;
  this.acceleration = 0;

  this.honk = function() {
    console.log('Toooooooooot!');
  };

  this.accelerate = function(speed) {
    this.acceleration = this.acceleration + speed;
  };
}
var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
var baseObject = {
  width: 0,
  length: 0,
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
  return this.width * this.length;
};
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var person = {
  _firstName: '',
};
Object.defineProperty(person, 'firstName', {
  get: function() {
    return this._firstName;
  },
  set: function(value) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = '';
    }
  },
  enumerable: true,
  configurable: true,
});
console.log(person.firstName);
person.firstName = 'Ma';
console.log(person.firstName);
person.firstName = 'Maximilian';
console.log(person.firstName);
