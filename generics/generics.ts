//what is a call signature
//In JavaScript, functions are objects.
//  A Call Signature is a way to describe a function as a type, 
// specifically focusing on its parameters and return type.

//While a standard function type looks like 
// (a: number) => void, a Call Signature is written inside an object type 
// using a colon : instead of an arrow =>


//GENERICS
//Think of Generics as variables for types

//If you use any, you lose all information:

function identity(arg: any): any {
  return arg; 
}
const result = identity("Hello"); 

//better version with generics 
function identity2<T>(arg:T):T{
    return arg;
}

console.log(identity2<number>(2));

//if we we want to strictly type a function with generics and then declare it 

const myTry : <U>(arg:U) => U = (param) => {return param;}

const anotherTry = function <V>(arg:V ):V { //cannot be used as a type signature
     return arg;
}

type Object =  {
  name:string,
  func: <K, V>(param1:K, param2:V) => V;
  //we can add multiply type variables
}

type GetFirstElement = <T>(arr: T[]) => T | undefined;
const exampleFunc:GetFirstElement = (param) => {
    return param[0];
}
const getFirstElement: GetFirstElement = (arr) => {
  return arr[0];
};
//now we simply declare two arrays
const arrayOfNums = [1,2, 3];
const arrayOfStrings = ["one", "two", "three"];

console.log(exampleFunc(arrayOfNums)); //we dont have to explicitly say the generic type
console.log(exampleFunc(arrayOfStrings)); //we can do it


//Another way to use generics before the  = sign
type FirstElement<T> = (arr:T[]) => T | undefined;
//now when we declare a function and assign it this type
//we have to explicitly say what the function takes as arguments

const getSecondElement:FirstElement<string> = (arr) => {
    return arr[1];
}

//constraints on the generic
type HasLength = {
length:number;
}

type Person = {
  length:number;
  name:string;
}
//constraint
function returnLength<T extends HasLength>(param1:T) : void {
    console.log(param1.length);
}

returnLength(arrayOfStrings);
returnLength(arrayOfNums);
returnLength("one");
//returnLength(2); //doesnt work

const person:Person = {length:1333,name:"niki"};
returnLength(person);