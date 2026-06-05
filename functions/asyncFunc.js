"use strict";
//asynchronic functions don't block
//promise is a placeholder object for a result that is not yet available
//its a generic type
Object.defineProperty(exports, "__esModule", { value: true });
//The promise type has internal state that is capsulated 
//we are unable to reach these states
//pending - neither fail, neither success
//fulfilled - operation has ended successfully 
//rejected - the operation failed, Promise holds the reason
//when we use the key word async there is implicit wrapping
//Implicit Wrapping
//that means that even if the function returns a number 
//it Wraps to a Promise<number>
//https://www.youtube.com/watch?v=A5PiecCRnE0
//more in depth on this
const testPromise = new Promise((resolve, reject) => {
    const result = 6 + 5;
    if (result == 11) {
        reject("Good job");
    }
    else {
        resolve("nonono");
    }
});
console.log(testPromise);
testPromise.then((message) => { console.log(message); }).catch((message) => { console.log(message); });
console.log("hi");
testFunc(5);
function testFunc(a) {
    console.log(a);
}
//da proraboti
const apiURL = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true](https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true)';
fetch(apiURL).then(response => {
    //if(!response.ok){
    //  console.log("Could not connect");
    //throw new Error("not okay");
    //}
    return response.json;
}).catch((message) => { console.log("Not okay my friend"); });
//examples in Udemy
async function fetchFromDatabase(id) { }
;
const anotherAsyncFunction = async () => { };
const functionExpression = async function () { };
async function returnString(id) {
    await fetchFromDatabase(65);
    return Promise.resolve("string");
}
/*
async function returnObject (id: number) : Promise<User> {
    try{
       return Promise.reject({name:"ivan", age:21});
    }
}
    //return Promise.resolve({name:"ivan", age:21});
//example catch()

console.log(returnObject(2)); */ 
