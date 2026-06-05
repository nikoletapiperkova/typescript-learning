//private - nothing gets out of the class
//protected - only chld classes have access to the parents data
//public - everyone can access it

//the default access modifier by typescript is public in classes
//with this we can access the parents data

class Base {
  protected name: string;
  private age: number;
  private id: number;

  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  public getAge(): number {
    return this.age;
  }
}

class Der extends Base {
  private extra: Symbol;
  /* 1 */ func!: (str: string) => number; //possible declaratipn of a function
  //Property 'func' has no initializer and is not definitely assigned in the constructor
  //we can stop the compiler from complaining by adding the ! operator
  //it means that we are going to assign a function to this variable later
  //the compiler has to trust us
  //Definite Assignment Assertion - name!: string (Means we WILL ASSIGN later)
  //Non-Null Assertion Operator -obj.name! (this variable is NOT null, undefined)

  constructor(name: string, age: number, id: number, extra: Symbol) {
    super(name, age, id);
    this.extra = extra;
    //this.func = (str:string) => {return str};
  }

  // Just the method name and parentheses — no 'function' keyword!
  /*2*/ foo() {
    console.log(this.extra);
  }
}

//what is the difference between this approach (1) and (2)
//1 - in the prototype for the class we only have the name of the property and its type
//each instance of the class creates a different version of this function
//but func is a PROPERTY

//2 - on the other hand foo() is a method
//it is saved on the prototype and is only located on one space in the memory

let der: Der = new Der("niki", 24, 331, Symbol(23));
der.func = (str: string) => {
  return str.length;
};
console.log(der.getAge());
//console.log(der.age);

//we can override it
//der.func = (str:string) => {return der.extra};
//we can't access the private variables that we want
//without a getter ofc

//IMPORTANT
//depending on the way we declare the functions we can determine
//if we can use this or not

class Robot {
  name = "Robo-1";
  action!: () => void;
}

const myRobot = new Robot();

myRobot.action = function () {
  //we have access here
  console.log("Robot " + this.name + " activate");
};

console.log(1);
myRobot.action();
//not okay
//myRobot.action = () => { console.log(this.name)};

//When you use FUNCTION KEYWORD, this is DYNAMIC.
//It doesn't care where the function was written; it only cares who called it at runtime
//Behavior: If you invoke the function through an object
// (e.g., obj.method()), this will successfully point to that object

//arrow functions
//Arrow functions do not have their own this.
// Instead, they inherit this from the surrounding
// environment where the function was physically typed out (lexical scope)
//Behavior: If you redefine an object's property from the global scope using an arrow function,
// this will point to the global context (or undefined in strict mode), not the object itself.

class User {
  public name: string;
  readonly email: string;
  lastName?: string;
  // Adding a protected member
  protected phone: number;

  constructor(name: string, email: string, phone: number, lastName?: string) {
    this.name = name;
    this.email = email;
    this.lastName = lastName!;
    this.phone = phone;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

/*  lastName?: string, in standard TypeScript means two things:

1.last name not even present{ name: "Ivan" }).
2.last name could be present but undefined { name: "ivan", lastName: undefined }
HOWEVER with exactOptionalPropertyTypes: true, TypeScript becomes stricter:

"if lastName exists in the object its type has to be string. 
 we cant have undefined!" */

class Admin extends User {
  isAdmin: boolean = true;
  usersReporting: number;

  //variables with default values or optional ones need to be at the end
  constructor(
    name: string,
    email: string,
    phone: number,
    usersReporting: number,
    isAdmin: boolean = false,
    lastName?: string,
  ) {
    super(name, email, phone, lastName);
    this.usersReporting = usersReporting;
    this.isAdmin = isAdmin;
  }

  protected printNumber(): number {
    console.log(this.phone);
    return 0;
  }
  public printNumberPublic() {
    this.printNumber();
    //without the brackets this.printNumber returns undefined
    //because printNumber() doesnt have a return value
    // JavaScript скрито добавя: return undefined;
    return 0;
  }
}

let admin: Admin = new Admin(
  "niki",
  "niki@gmail.com",
  882,
  30,
  undefined,
  undefined,
);
console.log(2);
console.log(admin.isAdmin); //false
console.log(admin.lastName); //undefined
//console.log(admin.phone); //protected but will compile
//it will print it on the console
//in js there are no access midifiers

//a special config that prevents this from happening
//"noEmitOnError": true,

//admin.printNumber();
console.log(`----3-----`);
console.log(admin.printNumberPublic());

abstract class Base1 {
  public abstract between(): void;
  public giveBirth() {
    console.log("anesthesia");
    this.between();
    console.log("izpisvane ot bolnica");
  }
}

class Child extends Base1 {
  between() {
    console.log("creating children type 1");
  }
}

class Child2 extends Base1 {
  between() {
    console.log("creating children type 2");
  }
}

let child: Child = new Child();
child.giveBirth();
