"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//named function
//Function Hoisting
//we can call this function before it's declared
getNameAndAge("niki", 12);
function getNameAndAge(name, age) {
    return `Hi my name is ${name} and I am ${age} years old`;
}
//we can't call them before they are declared 
//function expressions
//func("dani", 15); 
//function expression
const func = function (name, age) {
    return `Hi my name is ${name} and I am ${age} years old`;
};
//in the scope
console.log(func("niki", 24));
//Arrow/(Lambda)
const func2 = (name, age) => {
    return 123;
};
console.log(func2("one", 12));
//arrow functions don't have a this operator
//by declaring func2 as const we forbid overridnuing 
///Default And Optional Parameters 
//optional country parameter
function getNameAgeAndCountry(name, age, phonenumber, country = "Bulgaria") {
    if (country) {
        return `Hi my name is ${name} and I am ${age} years old, I am from ${country} my number is ${phonenumber}`;
    }
    return `Hi my name is ${name} and I am ${age} years old`;
}
//we cant miss an argument
console.log(getNameAgeAndCountry("dani", 12, undefined, "China"));
//function returning custom types
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["Consumer"] = "consumer";
    Role["Developer"] = "dev";
})(Role || (Role = {}));
let person1 = {
    name: "ivan",
    age: 25,
    role: Role.Admin,
    greet: (name) => {
        return "bulgarian";
    }
};
let sd = person1.greet;
sd("hhhh");
console.log(person1.greet); //the reference
let person2 = {
    name: "??",
    age: 25,
    role: Role.Admin,
    greet: (name) => {
        return "chineese";
    }
};
function checkAdmin(person) {
    if (person.role === Role.Admin) {
        return person;
    }
    person.role = Role.Admin;
    return person;
}
function funcWithinFunc(f1, arg1) {
    return f1(arg1);
}
const f1 = (s) => {
    return (s + s);
};
console.log(funcWithinFunc(f1, "duple"));
//a parameter initializer is only allowed in declared function
//we cannot set a defaukt = "Guest" in the type declaration  
const greet = (name = "Guest") => {
    return `Hello, ${name}!`;
};
console.log(greet());
console.log(greet("John"));
//parameter cannot have question mark and initializer 
//it is redundant -> a default value is used if height parameter 
//is skipped
//IMPORTANT
//when we have a parameter height?:number -> the type of height is:undefined|number
//thats why if we try to do something with it without setting a default or infer a type
//it flags as error (it could be undefined)
//we cant also explicitly declare height as a number type since it is already 
// declared as a undefined | number type
//this is called type narrowing
//OPTIONAL parameters only at the end
const calculateArea = (width, height = 10) => { return width * height; };
console.log(calculateArea(5, 20));
console.log(calculateArea(5, undefined)); //gives us 50 
const checkStatus = function (isActive = true) {
    return isActive ? "Active" : "Inactive";
};
console.log(checkStatus());
console.log(checkStatus(false));
///MAPPING
const students = ["ivan", "petar", "misho"];
//typescript infers type string to student 
const result = students.map(function (student) { return student.length; });
//we can also use arrow functions
students.map((student) => { return student.length; });
console.log(students);
console.log(result);
//we don't have access to the references of thes objects
//VOID AND NEVER 
//it ifers it as a void type
function writingInADatabase(info) {
    console.log(`We are logging this ${info} in the DB`);
}
function throwsError() {
    throw new Error("error in writing type");
}
const log = (message) => {
    console.log(message);
};
log("Hello TypeScript");
const throwError = (error) => {
    throw new Error(error);
};
throwError("Test error");
function processData(data) {
    console.log(`We processed data ${data}`);
}
processData("sample data");
function errorHandlingScenario(message) {
    throwError(message);
}
errorHandlingScenario("An unexpected error occured!");
