"use strict";
// string
var myName = 'Kal';
// myName = 123;
// number
var myAge = 22;
// myAge = 'Kal';
// boolean
var lovesProgramming = true;
// lovesProgramming = 1;
// this will create a type "any"
var myRealAge;
myRealAge = '29';
myRealAge = 29;
// assign types
var myTypedAge;
// myTypedAge = '29';
myTypedAge = 29;
// array
var hobbies = ['cooking', 'sports'];
// hobbies = 123;
// hobbies[0] = 123;
// console.log(hobbies[0], typeof hobbies);
// tuples
var address = ['Superstreet', 99];
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
// console.log(myColor);
// any (try to avoid this)
var car;
car = 'BMW';
// console.log(car);
car = { brand: 'BMW', series: 3 };
// console.log(car);
// functions
function returnMyName() {
    return myName;
}
function logMyAge() {
    console.log(myName);
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(3, 2));
// function types
var myMultiply;
// myMultiply = logMyAge;
// myMultiply();
myMultiply = multiply;
// console.log(myMultiply(3, 5));
// objects
var userData = {
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
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    },
};
var complex2 = {
    data: [3, 4, 5],
    output: function (all) {
        return this.data;
    },
};
// union types
var myRealRealAge;
myRealRealAge = 29;
myRealRealAge = '29';
// check types
var finalValue = 29;
if (typeof finalValue === 'number') {
    // console.log(`Final value is a number: ${finalValue}`);
}
// never
function neverReturns() {
    throw Error('An error!');
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    },
};
var myself = {
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
var testval = 45;
function logTestVal() {
    // console.log(testval);
    var testval = 55;
    console.log(testval);
}
// default paramters
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log('Done', start);
};
// countdown();
// spread operator in TS
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
// ES6 in TS exercises
// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) {
    return value * 2;
};
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === void 0) { name = 'Max'; }
    console.log('Hello, ' + name);
};
greet();
greet('Anna');
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var scientist = {
    firstName: 'Will',
    experience: 12,
};
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
