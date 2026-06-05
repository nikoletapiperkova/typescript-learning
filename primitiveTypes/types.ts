let first:string = "niki";
const newName:number = 2;

let students = 20;
var arrayOfStudents:string = students.toString();
let resultOfTernary:string= students >= 3 ? "yes" : "no";




let user :undefined;

let userName: null;
userName = null;

//console.log(userName);


//Can be userd interchanegably :) thats why its confusing
if(!userName){
    console.log("print this");
}

if(!user){
    console.log("print second!");
}

let maxInt = Number.MAX_SAFE_INTEGER;
let maxIntPlusOne = maxInt + 100;
let maxIntPlusTwo = maxInt + 2;
console.log(maxInt);
console.log(maxIntPlusOne);

let bigInt1= BigInt(maxIntPlusOne);
console.log(bigInt1);

let bigInt2:bigint = 1234585875n;

let id:symbol = Symbol(1234);
let alphabeticSymbol:symbol = Symbol("id");

let userInfo = {
    [id]:"1234",
    user:"Mike",
    getId(){
        return this[id];
    },
};

console.log(userInfo.getId());
let message:string = "Hello, TypeScript!";
let age:number = 42;
let isStudent:boolean = true;
let fetched:null = null;
//let user:undefined = undefined;
let largeNumber:bigint = 9007199254740991n;
let unique:symbol = Symbol("1234");



console.log(unique);