//named function
//Function Hoisting
//we can call this function before it's declared
getNameAndAge("niki", 12);
function getNameAndAge(name:string, age:number):string{
    return `Hi my name is ${name} and I am ${age} years old`;
}

//we can't call them before they are declared 
//function expressions
//func("dani", 15); 

//function expression
const func = function(name:string, age:number):string {
    return `Hi my name is ${name} and I am ${age} years old`;
}
//in the scope

console.log(func("niki", 24));

//Arrow/(Lambda)
const func2 = (name:string, age:number):(number | string) => {
    return 123;
}

console.log(func2("one", 12));

//arrow functions don't have a this operator
//by declaring func2 as const we forbid overridnuing 

///Default And Optional Parameters 

//optional country parameter
function getNameAgeAndCountry(name:string, age:number, phonenumber?:number, country:string = "Bulgaria"):string{
    if(country){
        return `Hi my name is ${name} and I am ${age} years old, I am from ${country} my number is ${phonenumber}`;
    }
    return `Hi my name is ${name} and I am ${age} years old`;
}
//we cant miss an argument
console.log(getNameAgeAndCountry("dani", 12, undefined, "China"));

//function returning custom types

enum Role {
    Admin = "admin",
    Consumer = "consumer",
    Developer = "dev",
}

type Person = {
    name:string,
    age:number,
    role:Role,
    greet: (name:string) => string;
    //function call signatures
}

let person1: Person = {
    name:"ivan",
    age: 25,
    role:Role.Admin,

    greet: (name) => {
        return "bulgarian";
    }
}

let sd=person1.greet;   
sd("hhhh");
console.log(person1.greet) //the reference

let person2: Person = {
    name:"??",
    age: 25,
    role:Role.Admin,

    greet: (name) => {
        return "chineese";
    }
}

function checkAdmin(person: Person) : Person {
    if(person.role === Role.Admin){
       return person;
    }
    person.role = Role.Admin;
    return person;
}

function funcWithinFunc(f1:(s:string) => string, arg1: string):string{
    return f1(arg1);
}

const f1:(s:string) => string = (s:string) => {
    return (s + s);
}

console.log(funcWithinFunc(f1, "duple"));

//first section excercices
type GreetFunction =(name?: string) => string;
//a parameter initializer is only allowed in declared function
//we cannot set a defaukt = "Guest" in the type declaration  

const greet:GreetFunction = (name:string = "Guest") => {
    return `Hello, ${name}!`;
};

console.log(greet());
console.log(greet("John"));


type AreaFunction = (width: number, height?:number) => number;
//parameter cannot have question mark and initializer 
//it is redundant -> a default value is used if height parameter 
//is skipped


//IMPORTANT
//when we have a parameter height?:number -> the type of height is:undefined|number
//thats why if we try to do something with it without setting a default or infer a type
//it flags as error (it could be undefined)
 
//we cant also explicitly declare height as a number type since it is already 
// declared as a undefined | number type
//this is called type narrowing

//OPTIONAL parameters only at the end

const calculateArea:AreaFunction = (width, height = 10) => {return width * height};

console.log(calculateArea(5,20));
console.log(calculateArea(5,undefined)); //gives us 50 



type StatusFunction = (isActive?:boolean) => string;

const checkStatus = function(isActive = true) {
    return isActive ? "Active" : "Inactive";
}


console.log(checkStatus());
console.log(checkStatus(false));



///MAPPING
const students:string[] = ["ivan", "petar", "misho"];

//typescript infers type string to student 
const result = students.map(function (student) {return student.length});
//we can also use arrow functions
students.map((student) => {return student.length});

console.log(students);
console.log(result);

//we don't have access to the references of thes objects


//VOID AND NEVER 
//it ifers it as a void type
function writingInADatabase(info:boolean) :void{
console.log(`We are logging this ${info} in the DB`  );
}

function throwsError():void {
  throw new Error("error in writing type");
}
//this function returns type never but it could also return void 
type test1 = void extends never ? true : false; //false
type test2 = never extends void ? true : false; //true

type LogMessage = (s:string) => void;

const log:LogMessage = (message:string) => {
    console.log(message);
}

log("Hello TypeScript");


type ThrowError = (s:string) => never;

const throwError:ThrowError = (error:string):never => {
    throw new Error(error);
    
}
    
throwError("Test error");

function processData(data:string):void{
    console.log(`We processed data ${data}`);
}

processData("sample data");

function errorHandlingScenario(message:string):never{
    throwError(message);
}

errorHandlingScenario("An unexpected error occured!");

