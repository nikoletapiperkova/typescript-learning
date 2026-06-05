//interfaces are a contract
//for the classes and objects

interface Person {
  name: string;
  email: string;
  age: number;
  phone?: number;
  greet?: () => void; //property of the interface with function type
  greet2(name: string): number; //this is the way to declare a method
  //another way to declare functions
}
//interfaces cannot contain real logic
//they are simply a contract for the way something must behave

//they can be used as type aliases
//it means the same thing

const person: Person = {
  name: "John",
  email: "john@gmail.com",
  age: 23,
  greet2(name: string) {
    return name.length;
  },
};

//we can combine interfaces
interface User {
  name: string;
}

interface User {
  age: number;
}

//let user = new User();
//we cant do that

const u: User = { name: "Niki", age: 24 };

//type aliases are very similar to interfaces
//but we cant combine them the same way
//we can describe not only objects, but primitives as well
type Status = "success" | "error" | "pending";
type ID = string | number; //primitives

//in classes we can instantiate objects (not including abstract classes)
//but the biggest difference is that we can add behavior and
//implement methods and attributes

/*                          interface         type alias
   what it describes?       only objects     all data types 
  can we instantiate it?     no                 no
  can we merge types?         yes               no
  can we implement them        yes             yes!  
   */

type Vehicle = {
  brand: string;
  startEngine(): void;
};

class Car implements Vehicle {
  constructor(public brand: string) {}
  startEngine(): void {
    console.log("Vroom vroom");
  }
}

//IMPORTANT WE CANNOT IMPLEMENT
// types that describe primitives
//or exact objects

//NO!
//class UserSession implements Status

//NO as primitive
//interface Number = number;
type Nums = number;
/* If you define two interfaces with the same name in your project—
even across different files—TypeScript automatically merges them into a single, comprehensive interface.

Use interface when defining the public structure of components and objects, 
or when specifying class behavior via implements. 
This makes the code much more readable for OOP-focused developers 
and actually helps TypeScript compile slightly faster.

Use type when you need flexibility—such as for unions (|), intersections (&), functions, primitives, or when writing complex type logic. 
Type aliases are predefined; think of a type as a variable for types. 
Once declared, it cannot be modified or merged. 
If you try to define two types with the same name, TypeScript will throw a Duplicate identifier error.*/

//END OF COMPARISON
//------------------------------------------
interface Buyer {
  name: string;
  email: string;
  log(): void;
}

class Customer implements Buyer {
  constructor(
    public name: string,
    public email: string,
  ) {}
  log() {
    console.log("Hi from customer");
  }
}

class Contractor implements Buyer {
  constructor(
    public name: string,
    public email: string,
  ) {}
  log() {
    console.log("Hi from contractor");
  }
}

class Autheticate {
  public static login(buyer: Buyer): void {
    buyer.log();
  }
}

const customer = new Customer("niki", "niki.gmail.com");
const contractor = new Contractor("viki", "viki.gmail.com");
Autheticate.login(customer);
Autheticate.login(contractor);

///INTERFACES EXTENDING OTHER INTERFACES
type Gender = "M" | "F";
interface Student {
  name: string;
  email: string;
  phone: number;
  gender: Gender;
}

interface StudentWithAddress extends Student {
  address: string;
}

const student: Student = {
  name: "john",
  email: "john@gmail.com",
  phone: 1234,
  gender: "M",
};

const studentWithAddress: StudentWithAddress = {
  name: "john",
  email: "john@gmail.com",
  phone: 1234,
  gender: "M",
  address: "Varna",
};

console.log(student);
console.log(studentWithAddress);
//we can inherit multiple interfaces as well
enum Permission {
  read = "read",
  write = "write",
  execute = "execute",
}

interface StudentWithPermissions {
  permissions: Permission[];
}

interface StudentPermissionsAddress
  extends StudentWithAddress, StudentWithPermissions {
  IPAddr: string;
}

const complicatedStudent: StudentPermissionsAddress = {
  name: "petar",
  email: "john@gmail.com",
  phone: 1234,
  gender: "M",
  address: "Varna",
  permissions: [Permission.read, Permission.write],
  IPAddr: "383646",
};
console.log(complicatedStudent);

//we can do the same thing with types differetly
type A = {
  time: number;
};
type B = {
  name: string;
  age: number;
};
type C = A & B;
const c: C = {
  time: 123,
  name: "pesho",
  age: 345,
};
