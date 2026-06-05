//we want to have generic values assigned to object attributes
type KeyValuePair<K, V> = {
    key:K;
    value:V;
}

const pair1:KeyValuePair<number, string> = {
    key:123,
    value:"one",
}

type HasId<T> = {
    id:T;
}

function getId<K extends HasId<number>> (arg1:K):number{
    return arg1.id;
}

type User = {
    name:string,
    id:number;
}

const user1:User = {
    name: "joro",
    id:123,
}

console.log(getId(user1));


////keyof operator
type Events = {
    id:number,
    date:Date,
    type: "indoor" | "outdoor";
}

type UnionOfEvents = keyof Events; //it exctacts the attribute names
//id | date | type

const events1:UnionOfEvents = "date";
//const events2:UnionOfEvents = "indoor"; //not okay

const events3:UnionOfEvents = "type";

type Numeric = {
    [key:number]: string,
}
//Index signature -> we extact the value of the number 

type CustomNumber = keyof Numeric;

const num:CustomNumber = 2;

type AttributeString = {
    [key:string]:string;
}
type NumberAndString  = keyof AttributeString; //number | string
//because of javascript when we have strings as parameters we can alseo have numbers
//numbers are converted to strings
const stringObject: AttributeString = {
    0:"hi",
    "cat":"one",
}

console.log(stringObject["0"]);

type Person = {
    name: string,
    id: string,
    tel: number,
}

//without the ? we have to have them all
type PartialPerson = {
    [K in keyof Person]?:Person[K] | null;
}

//we are putting the ? because it is possible that there are 
//zero of the persons attributes present

const partialPerson:PartialPerson = {
name:"gosho",
}


//if we want to assign a default value to a generic type 

type Default<T = string> = {
    data:T;
}

//why can we do that 
function takesDefaultParam<T>(param:Default<T>) {
    return param;
} 

//creating a filter function
//this is a polymorphic function, because it can take any types 
const myFilter = (array:any[], predicate:(item:any) => boolean) => {
const result:any[] = [];
for(let i = 0; i < array.length; i++){
    if(predicate(array[i])){
        result.push(array[i]);
    }
}
return result;
}

let numbersArray:number[] = [1,2,3];

function predicate(arg1:number){
  return (arg1 % 2 == 0);
}

console.log(myFilter(numbersArray, predicate));

//we can also use this syntax instead of the usual () => ()
type Filter = {
    (array:number[], predicate: (item:number) => boolean):number[];
    (array:string[], predicate: (item:string) => boolean):string[];
    (array:object[], predicate: (item:object) => boolean):object[];

}
//instead of function overloading we can use generics

const myFilter2 = <T>(array:T[], predicate:(item:T ) => boolean):T[] => {
const result:T[] = [];
for(let i = 0; i < array.length; i++){
    let item = array[i];
    if(item !== undefined && predicate(item)){
        result.push(item);
    }
}
return result;
}


const myMap = <T, V>(array:T[], mapFunction:(item:T) => V): V[]=> {
    let result:V[] = [];
    for(let i = 0; i < array.length; i++){
        let item = array[i];
        if(item !== undefined){
          result.push(mapFunction(item)); //why doesnt it work with array[i]??
        }
    }
    return result;
}


function addTwo(a:number){
    return a + 2 ;
}

console.log(myMap([1,2,3,4], addTwo)); //it correctly infers the type to the 
                                       //generics of the function