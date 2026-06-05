function returnGeneral(gen:any){
    return gen;
}

function multiplyByTwo(arg:unknown){
    if(typeof arg === "number"){
         return arg * 2;
    }
    console.log("not a good type")
}

//type alias is a custom type that we declare for ourselves 

type CustomString = string;
type CustomDate = Date;
type CustomBigInt = bigint;

let myName:CustomString = "niki";
let myDate:CustomDate = new Date();
let myInt:CustomBigInt = BigInt(123n);

type TernaryCheck = CustomString extends string ? string : false;
type TernaryCheck2 = CustomDate extends Date ? false : undefined;


type CustomCheck1 = null extends any ? true :  false;
type CustomCheck2 = any extends unknown ? true :  false;
type CustomCheck3 = [];
type CustomCheck4 = {} extends Object ? true : false;
type CustomCheck5 = Function extends Object ? true : false;

let variableA = {
    name:"niki",
    assets:["one", "two"],
};

let strings:string[] = ["one", "two"];
console.log(strings);

let myFunc:Function = ()=> {console.log(7)};

function returnAny (a:any, b:any){
    return a + b;
}
console.log(returnAny(2,4));
console.log(returnAny("one", 2));

/*let neverExample = (message:string) => {
   throw new Error(message);
}*/

let input:any = "Hello";
console.log(input.length);


let number = 5;
/*
let varNever:never = ((): never => { throw new Error() })();*/


let a = <any>"niki";
let b = "niki" as any;

let usered = {
name: "Mark",
email: "mark@gmail.com",
lol:true,
}
type User = {
    name:string,
    email:string
}
function getUsers(){

    return usered as User;
}

//console.log(typeof(getUsers()));

type IsStringType = string extends string ? boolean : number;
let variable:IsStringType;

let city = "New York"; //string
let population = 840000; //number
const ages = 32; //const is just 32 -> cannot be changed
let oldAge = 79 as const; //79
let newAge = oldAge;//79
let data = new Map(); //Map
let score = [90, 86, 100]; //int[]
type Primitive = string | number | boolean;
type CustomName = "John" extends string ? string : "John";//John
type CustomAge = typeof newAge extends number ? 79 : number;//79
type CheckData =typeof data extends Object ? true : false; //true
type CheckScore = typeof score extends never ? {} : []; //[]


//age = 85;
score.push(10);
//score.push("News");
//let customAge: CustomAge = 50;

type Cat = {
    name:string;
    age:number;
    meaow:boolean;
}

type Dog = {
    name:string;
    bark:boolean;
    lol:number;
}

type Union = Cat | Dog;


function test(a:null){
    return a;
}