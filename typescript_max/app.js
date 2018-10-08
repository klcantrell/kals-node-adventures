"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === void 0) { name = 'Max'; }
    console.log('Hello, ' + name);
};
// greet();
// greet('Anna');
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
// console.log(Math.min(...numbers));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
// console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
// console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var scientist = {
    firstName: 'Will',
    experience: 12,
};
var firstName = scientist.firstName, experience = scientist.experience;
// console.log(firstName, experience);
// classes in TS
var Person = /** @class */ (function () {
    function Person(name, username, age) {
        this.username = username;
        this.type = 'Person';
        this.name = name;
        this.age = age;
    }
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    Person.prototype.setAndPrintType = function (type) {
        this.setType(type);
        console.log(this.type);
    };
    return Person;
}());
var CoolPerson = /** @class */ (function (_super) {
    __extends(CoolPerson, _super);
    function CoolPerson(name, username, age) {
        return _super.call(this, name, username, age) || this;
    }
    CoolPerson.prototype.printAge = function () {
        console.log(this.age);
    };
    return CoolPerson;
}(Person));
var person = new Person('Kal', 'klcantrell', 29);
var coolPerson = new CoolPerson('Kalalau', 'klcantrell13', 29);
// person.setAndPrintType('AWESOME');
// person.printType();
// person.printType();
// coolPerson.printAge();
// coolPerson.printType();
// console.log(coolPerson);
// Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this.plantSpecies = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this.plantSpecies;
        },
        set: function (value) {
            if (value.length > 3) {
                this.plantSpecies = value;
            }
            else {
                this.plantSpecies = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.species = 'AB';
// console.log(plant.species);
// static properties and methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
// console.log(2 * Helpers.PI);
// console.log(Helpers.calcCircumference(3));
// abstract classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 10000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var project = new ITProject();
// console.log(project);
project.changeName('AWESOME IT PROJECT');
// console.log(project);
// singletons in TS
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('I AM THE ONLY ONE');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('I AM THE ONLY ONE');
var right = OnlyOne.getInstance();
// console.log(right.name);
// Classes in TS exercises
// Exercise 1 - How was your TypeScript Class?
var MyCar = /** @class */ (function () {
    function MyCar(name) {
        this.acceleration = 0;
        this.name = name;
    }
    MyCar.prototype.honk = function () {
        console.log('Toooooooooot!');
    };
    MyCar.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return MyCar;
}());
var myCar = new MyCar('BMW');
// myCar.honk();
// console.log(myCar.acceleration);
myCar.accelerate(10);
// console.log(myCar.acceleration);
// Exercise 2 - Two objects, based on each other ...
var BaseObject = /** @class */ (function () {
    function BaseObject(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        return _super.call(this, width, length) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle(5, 2);
// console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var MyPerson = /** @class */ (function () {
    function MyPerson() {
        this._firstName = '';
    }
    Object.defineProperty(MyPerson.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (val) {
            if (val.length > 3) {
                this._firstName = val;
            }
            else {
                this._firstName = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return MyPerson;
}());
var myPerson = new MyPerson();
// console.log(myPerson.firstName);
myPerson.firstName = 'Ma';
// console.log(myPerson.firstName);
myPerson.firstName = 'Maximilian';
// console.log(myPerson.firstName);
// classes as types
var myFunc = /** @class */ (function () {
    function myFunc() {
    }
    myFunc.prototype.saySup = function () {
        console.log('sup');
    };
    return myFunc;
}());
var myOtherFunc;
