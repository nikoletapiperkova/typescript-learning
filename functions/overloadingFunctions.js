"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const func = (name, number) => { return name; };
function optionalExample(name, status) {
    console.log(`Wow hello ${name} I can see that your status is ${status}`);
}
const reserve = (start, endOrName, nameOrDestination, destination) => {
    if (endOrName instanceof Date) {
        return {
            start: start,
            end: endOrName,
            name: nameOrDestination,
            destination: destination
        };
    }
    else {
        return {
            start: start,
            name: endOrName,
            destination: nameOrDestination
        };
    }
    throw new Error("Respect the pattern");
};
/**
 * Practice Excercise for functions
 */
//* 1. Declare a function named greet that takes a string parameter name and returns a greeting message.
function greet(name) {
    return `Hello, ${name}`;
}
function getProduct(id) {
    return { id: id, name: "" };
}
const add = (n1, n2) => { return n1 + n2; };
const subtract = (n1, n2) => { return n1 - n2; };
//* 4. Create a function named logMessage 
// that takes a string message and logs it to the console, returning void. 
// Also, create a function named throwError that takes a string message and throws an error, returning never.
function logMessage(message) {
    console.log(message);
}
function throwError(message) {
    throw new Error(message);
}
