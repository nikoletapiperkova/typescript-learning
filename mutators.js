//getters and setters
//in the class mutators are defined as functions but outside of it -
//they are treated as variables
class User {
    //A 'get' accessor cannot have parameters.
    get age() {
        return this._age;
    }
    //A 'set' accessor must have exactly one parameter.
    //setter takes only one parameter that we are going to use
    //if get already has a return type we dont need to specify the variable type here
    //age:number or age
    set age(age) {
        if (0 < age || age > 200) {
            throw new Error("age not in range");
        }
        this._age = age;
    }
}
let user1 = new User();
console.log(user1.age);
//user1.age = 201;
//throws error
//endless recursion example
class BadExample {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this.name;
    }
}
let example = new BadExample("ivan");
//console.log(example.name);
class Rectangle {
    constructor(height, length) {
        this.height = height;
        this.length = length;
    }
    get area() {
        return this.height * this.length;
    }
}
let rect = new Rectangle(2, 5);
console.log(rect.area);
//rect.area  = 30; Cannot assign to 'area' because it is a read-only property.
/* Summary: Getters & Setters Responsibility
get (Getter): Responsible for Reading. It acts as a "Read-Only" lens to fetch or calculate a value dynamically.

set (Setter): Responsible for Writing. It acts as a "Gatekeeper" to validate, filter, or process incoming data before storing it.

The Best Practice Rule (Write-Only vs. Methods)
While TypeScript allows you to create write-only properties (having a set without a get), it is highly discouraged in clean code architecture.
Why it's avoided: Properties that can only receive data but cannot be read confuse other developers because properties are naturally expected to hold and show state.
The Solution: If a property should only accept data and trigger an internal action without being read back, use a standard method (function) instead of a setter*/
///------NEW INFO -------///
/* In typescript we can override getters and setters in child classes
just as we would override normall methods
*/
/*The tupe of the setter and the getter need to be compatible */
class LoggedUser extends User {
    //
    get age() {
        return super.age;
    }
    /*
    public set age(age: number) {
      super.age = age;
    } */
    get login() {
        return this._login;
    }
}
let loggedUser = new LoggedUser();
console.log(loggedUser.login); //undefined - gets compiled
//loggedUser.login = 2; //readonly property without the login
//loggedUser.age = 2;
class Base {
    get name() {
        return this._name;
    }
    set name(name) {
        if (name.length === 0) {
            throw new Error("Name cannot be zero");
        }
        this._name = name;
    }
    constructor(age, fn) {
        this.age = age;
        this.fn = fn;
    }
}
class Der extends Base {
    constructor(age, fn, der) {
        super(age, fn);
        this.age = age;
        this.fn = fn;
        this.der = der;
    }
    /*
    public get name() {
      return super.name;
    }
     */
    /*
    public set name(name: string) {
      super.name = name;
    }  */
    getDer() {
        console.log(this.der);
    }
}
let derived = new Der(2, 4, 6);
derived.getDer();
console.log(derived.name);
//we have not yet set name - it is undefined
//we can call the name getter
//derived.name = ""; //throws error
derived.name = "o";
console.log(derived.name);
export {};
//but if we decide to override only one of them in the child class
//here's what happens
//(uncomment the code)
//# sourceMappingURL=mutators.js.map