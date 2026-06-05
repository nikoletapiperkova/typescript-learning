//we don't have enums in javascript

enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
//auto generate 0, 1, 2 ,3 

type Custom = 1 | 2 | 3;

//console.log(Direction.Down);
//console.log(Direction[1]);
enum Direction2 {
    Up ,
    Down,
    //Left = "one",
    Left,
    Right,

}
//ординати
//цифрите

//start from 1, 2,3, 4
//but if we add this Left = "one" it stops working
//when we declare enums we use this 
enum Roles {
    admin = "admin",
    author = "author",
    editor = "editor",
}

type Person = {
    name: string;
    email:string;
    password:string;
    role:Roles;
}

const person: Person = {
  name: "John",
  email: "john@email.com",
  password: "password",
  role: Roles.admin,
};


//console.log(Direction2.Down);

const enum Lectures {
    FIRST = "philosophy",
    SECOND = "history",
    THIRD = "science",
    
}

const enum TRY {
    ONE,
    TWO,
    THREE,
}
//computed enum
enum Access {
    READ = 1,
    WRITE = 2,
    READWRITE = READ + WRITE, //will generate a 3
    DELETE = 4,
    ALL = DELETE | READWRITE, //acts as plus
}

console.log(Access.READWRITE);
console.log(Access.ALL);


//excercices 

let arrayOfNumbers:number[];
let arrayOfStrings:string[];

type Person2 = [string, number];
let person2:Person2 = ["georgi", 12];

let colors:readonly string[] = ["red", "blue", "gray"];
let point:readonly [number, number] = [1, 4.5];

//point.push(2);

enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
    PENDING = "pending"
}

const StatusConst = {
    ACTIVE:"active",
    INACTIVE:"inactive",
    PENDING:"pending",

} as const;
//behaves as enum 