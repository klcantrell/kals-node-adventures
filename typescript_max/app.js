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
    console.log("Final value is a number: " + finalValue);
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
console.log(myself);
// no implicity any
var returnAny = function () {
    var x;
    return x;
};
returnAny();
//# sourceMappingURL=app.js.map