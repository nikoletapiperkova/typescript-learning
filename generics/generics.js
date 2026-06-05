"use strict";
//what is a call signature
//In JavaScript, functions are objects.
//  A Call Signature is a way to describe a function as a type, 
// specifically focusing on its parameters and return type.
Object.defineProperty(exports, "__esModule", { value: true });
//While a standard function type looks like 
// (a: number) => void, a Call Signature is written inside an object type 
// using a colon : instead of an arrow =>
//GENERICS
//Think of Generics as variables for types
//If you use any, you lose all information:
function identity(arg) {
    return arg;
}
const result = identity("Hello");
//better version with generics 
function identity2(arg) {
    return arg;
}
console.log(identity2(2));
//if we we want to strictly type a function with generics and then declare it 
const myTry = (param) => { return param; };
const anotherTry = function (arg) {
    return arg;
};
const exampleFunc = (param) => {
    return param[0];
};
const getFirstElement = (arr) => {
    return arr[0];
};
//now we simply declare two arrays
const arrayOfNums = [1, 2, 3];
const arrayOfStrings = ["one", "two", "three"];
console.log(exampleFunc(arrayOfNums)); //we dont have to explicitly say the generic type
console.log(exampleFunc(arrayOfStrings)); //we can do it
//now when we declare a function and assign it this type
//we have to explicitly say what the function takes as arguments
const getSecondElement = (arr) => {
    return arr[1];
};
//constraint
function returnLength(param1) {
    console.log(param1.length);
}
returnLength(arrayOfStrings);
returnLength(arrayOfNums);
returnLength("one");
//returnLength(2); //doesnt work
const person = { length: 1333, name: "niki" };
returnLength(person);
