"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiplyBy(by, ...nums) {
    return nums.map((number) => number * by);
}
//we dont have a return statement - it's going to e undefined 
const arrayOfNums = [1, 2, 3];
console.log(multiplyBy(4, ...arrayOfNums));
console.log(arrayOfNums);
function multiplyBy2(by, ...numbers) {
    return numbers.map((eachNumber) => by * eachNumber);
}
//the return is implicitely called 
// Calling the function
console.log(multiplyBy(2, 3, 4, 5));
console.log(multiplyBy(2, 3, 4));
let args = [2, 5];
const args2 = [2, 5];
args2.push(4);
let args3 = [1, 3, 5];
args3 = [2, 4, 6]; //completely legal
// args3.push(2); //not okay
let args4 = [2, 4];
//args4 = [5, 6];
//we can do it with const, but we CAN'T do it with readonly
//with readonly we can reassign the reference 
//when we cast as const
//the type turns from number[] to readonly tuple [2, 5] with 2 and 5 as fixed constants
//now that its cast as const it becomes a tuple
//without it it doesnt work
const angle = Math.atan2(...args4);
const numObj = {
    a: 2,
    b: 3,
    c: 4,
};
function destructure({ a, b, c }) {
    return a + b + c;
}
console.log(destructure(numObj));
