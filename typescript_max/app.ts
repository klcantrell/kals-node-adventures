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
console.log(hobbies[0], typeof hobbies);

// tuples
let address: [string, number] = ['Superstreet', 99];

// enums
enum Color {
  Gray, // 0
  Green, // 1
  Blue, // 2
}

let myColor: Color = Color.Green;
console.log(myColor);

// any (try to avoid this)
let car: any;
car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
