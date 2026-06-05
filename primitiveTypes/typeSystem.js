"use strict";
function returnGeneral(gen) {
    return gen;
}
function multiplyByTwo(arg) {
    if (typeof arg === "number") {
        return arg * 2;
    }
    console.log("not a good type");
}
let myName = "niki";
let myDate = new Date();
let myInt = BigInt(123n);
let variableA = {
    name: "niki",
    assets: ["one", "two"],
};
let strings = ["one", "two"];
console.log(strings);
let myFunc = () => { console.log(7); };
function returnAny(a, b) {
    return a + b;
}
console.log(returnAny(2, 4));
console.log(returnAny("one", 2));
/*let neverExample = (message:string) => {
   throw new Error(message);
}*/
let input = "Hello";
console.log(input.length);
let number = 5;
/*
let varNever:never = ((): never => { throw new Error() })();*/
let a = "niki";
let b = "niki";
let usered = {
    name: "Mark",
    email: "mark@gmail.com",
    lol: true,
};
function getUsers() {
    return usered;
}
console.log(typeof (getUsers()));
let variable;
let city = "New York"; //string
let population = 840000; //number
const ages = 32; //const is just 32 -> cannot be changed
let oldAge = 79; //79
let newAge = oldAge; //79
let data = new Map(); //Map
let score = [90, 86, 100]; //int[]
//age = 85;
score.push(10);
//score.push("News");
//let customAge: CustomAge = 50;
function test(a) {
    return a;
}
