type someFunction = (s:string, n?:number) => string;

const func:someFunction = (name, number?:number) => {return name;}

function optionalExample(name: string, status?:string):void{
console.log(`Wow hello ${name} I can see that your status is ${status}`);
}

//example for function overloading
type Reservation = {
    start:Date;
    end?:Date;
    name:string;
    destination:string;
}

type Reserve = {(start:Date, end:Date, name:string, destination:string):Reservation ;
    (start:Date, name:string, destination:string): Reservation;
}


const reserve:Reserve = (start:Date, endOrName:Date|string, nameOrDestination:string, destination?:string) => 
{
if(endOrName instanceof Date ){
    return { 
    start:start,
    end:endOrName,
    name:nameOrDestination,
    destination:destination} as Reservation;
}
else { 
    return { 
    start:start,
    name:endOrName,
    destination:nameOrDestination} as Reservation;
}
throw new Error("Respect the pattern");
}

/**
 * Practice Excercise for functions
 */

//* 1. Declare a function named greet that takes a string parameter name and returns a greeting message.
function greet(name:string){
    return `Hello, ${name}`;
}

//* 2. Define an type Product with properties id (number) and name (string). 
// Create a function named getProduct that takes an id parameter and returns a Product.
type Product = {
    id:number;
    name:string;
}

function getProduct(id:number):Product{
    return {id:id, name:""} ;
}

//* 3. Declare a function signature named Calculator 
// as a type that takes two numbers and returns a number. 
// Implement two functions add and subtract that match this signature.

type Calculator = (n1:number, n2:number) => number;
const add:Calculator = (n1, n2) => {return n1 + n2};
const subtract:Calculator = (n1, n2) => {return n1 - n2};


//* 4. Create a function named logMessage 
// that takes a string message and logs it to the console, returning void. 
// Also, create a function named throwError that takes a string message and throws an error, returning never.

function logMessage(message:string): void{
  console.log(message);
}

function throwError(message:string):never{
    throw new Error(message);
}