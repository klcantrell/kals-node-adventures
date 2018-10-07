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
var double = function(value) {
  return value * 2;
};
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
var greet = function(name) {
  if (name === undefined) {
    name = 'Max';
  }
  console.log('Hello, ' + name);
};
greet();
greet('Anna');

// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
var scientist = { firstName: 'Will', experience: 12 };
var firstName = scientist.firstName;
var experience = scientist.experience;
console.log(firstName, experience);
