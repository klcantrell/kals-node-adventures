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
  console.log(`Final value is a number: ${finalValue}`);
}

// never
function neverReturns(): never {
  throw Error('An error!');
}
