//strictly typing arrays
let a:number[]= [1,2,3];
//a.push("one");
let b:Array<string> = ["one", "two", "three"]; //with generics more on this lecture
let c:(number | boolean | string)[] = [true, "one", 123];

let d = [];
d.push(1);
d.push("one");
d.push(a);



//tuples
type  Student = [string, number, ...string[]];  //first two are obligatoryy
//after ...(rest) we can add as many string elements as we like
//we CANT add a nee set of ...

type Student2 = [string, number, ...any[]];
type test = [...number[], string];//rest operator 

let student1: Student= ["niki", 331, "computer science", "design", "photography"];
let student2: Student2= ["jana", 248, "computer science", "baking", false, {name: "one", game: true}];

let person:[string, string, boolean] = ["pesho", "su", false]; //tuple

type User = [string, string, number, string?]; //optional parameter in tuples
let user:User = ["krisi", "pr", 23];


type BooleanTuple = [...boolean[], string, number];
type BooleanTuple1 = [number, ...string[], boolean];

let tuple1:BooleanTuple1 = [12, false];
let tuple2:BooleanTuple1 = [12, "lol", "mql", false];


//READONLY arrays cannot be modified and we cannot add new things to the array once we have declared them

let numberArray:readonly number[] = [1,2,3];
//numberArray.push(2); //we cant do that

type ReadOnlyTuple = readonly [string, string, number];
let tuple:ReadOnlyTuple = ["one", "two", 12];
//tuple[0] = "two"; we cant


type a = Readonly<(string | number)[]>;
type b = Readonly<string|number>;
//readonly tuple
type c = Readonly<[number, string, number]>;


let example:a = ["one", 2, 3];
//example.push("two");
example = ["two", 2, 4];
//we can reassign the refernce