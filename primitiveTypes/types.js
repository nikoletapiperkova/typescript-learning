"use strict";
let first = "niki";
const newName = 2;
let students = 20;
var arrayOfStudents = students.toString();
let resultOfTernary = students >= 3 ? "yes" : "no";
let user;
let userName;
userName = null;
//console.log(userName);
//Can be userd interchanegably :) thats why its confusing
if (!userName) {
    console.log("print this");
}
if (!user) {
    console.log("print second!");
}
let maxInt = Number.MAX_SAFE_INTEGER;
let maxIntPlusOne = maxInt + 100;
let maxIntPlusTwo = maxInt + 2;
console.log(maxInt);
console.log(maxIntPlusOne);
let bigInt1 = BigInt(maxIntPlusOne);
console.log(bigInt1);
let bigInt2 = 1234585875n;
let id = Symbol(1234);
let alphabeticSymbol = Symbol("id");
let userInfo = {
    [id]: "1234",
    user: "Mike",
    getId() {
        return this[id];
    },
};
console.log(userInfo.getId());
let message = "Hello, TypeScript!";
let age = 42;
let isStudent = true;
let fetched = null;
//let user:undefined = undefined;
let largeNumber = 9007199254740991n;
let unique = Symbol("1234");
console.log(unique);
