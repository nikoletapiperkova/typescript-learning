"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pair1 = {
    key: 123,
    value: "one",
};
function getId(arg1) {
    return arg1.id;
}
const user1 = {
    name: "joro",
    id: 123,
};
console.log(getId(user1));
//id | date | type
const events1 = "date";
//const events2:UnionOfEvents = "indoor"; //not okay
const events3 = "type";
const num = 2;
//because of javascript when we have strings as parameters we can alseo have numbers
//numbers are converted to strings
const stringObject = {
    0: "hi",
    "cat": "one",
};
console.log(stringObject[0]);
//we are putting the ? because it is possible that there are 
//zero of the persons attributes present
const partialPerson = {
    name: "gosho",
};
//why can we do that 
function takesDefaultParam(param) {
    return param;
}
//creating a filter function
//this is a polymorphic function, because it can take any types 
const myFilter = (array, predicate) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
};
let numbersArray = [1, 2, 3];
function predicate(arg1) {
    return (arg1 % 2 == 0);
}
console.log(myFilter(numbersArray, predicate));
//instead of function overloading we can use generics
const myFilter2 = (array, predicate) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (item !== undefined && predicate(item)) {
            result.push(item);
        }
    }
    return result;
};
const myMap = (array, mapFunction) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (item !== undefined) {
            result.push(mapFunction(item)); //why doesnt it work with array[i]??
        }
    }
    return result;
};
function addTwo(a) {
    return a + 2;
}
console.log(myMap([1, 2, 3, 4], addTwo)); //it correctly infers the type to the 
//generics of the function
