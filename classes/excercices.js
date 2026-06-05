//exercices for access mofifiers, shorthand constructors and overriding
//----the hungry robot-----
class Robot {
    constructor(name, batteryLevel) {
        this.name = name;
        this.batteryLevel = batteryLevel;
    }
    work() {
        this.batteryLevel -= 10;
        console.log(`This battery level is ${this.batteryLevel}%`);
    }
}
class CookingRobot extends Robot {
    constructor(name, batteryLevel, specialty) {
        super(name, batteryLevel);
        this.specialty = specialty;
        if (specialty.length === 0) {
            throw new Error("no specialty");
        }
    }
    cook() {
        if (this.batteryLevel >= 20) {
            this.work();
            console.log("I am cooking");
        }
        else {
            console.log("There is not enough battery");
        }
    }
}
let cookingRobot = new CookingRobot("alphie", 76, "chef");
console.log(cookingRobot);
cookingRobot.cook();
/* -------- SHORTHAND SYNTAX ----------- */
/*it does three things at the same time
1.we declare the class attribute
2.we take them as parameters in the constructor
3.automatically assigns this.x = x during compilation

The access modifiers before the declaration are absolutely necessary
Without them the variables disappear

*/
class Test {
    constructor(id, name) {
        this.name = name;
    }
}
let test = new Test(12, "toshko");
console.log(test.name);
//console.log(test.id); //Property 'id' does not exist on type 'Test'
//Optional parameters?
class User {
    constructor(name, bio, role = "guest") {
        this.name = name;
        this.bio = bio;
        this.role = role;
        //we can also add validation if we want
        if (bio === "computer science") {
            bio = undefined;
        }
    }
}
//added later
//change tsconfig to see this example
/*
class UserTest {
 public bio?: string;
  constructor(
    public name: string,
    bio?: string,
    public role: string = "guest",
  ) {
    this.bio = bio;
     //with strict typing we have to turn it off
    //we can also add validation if we want
    if (bio === "computer science") {
      bio = undefined;
    }
  }
}

const testUser = new UserTest("name", undefined, undefined); */
const u1 = new User("ivan");
const u2 = new User("pesho", undefined);
const u3 = new User("pesho", undefined, "admin");
const u4 = new User("niki", "computer science", undefined);
console.log(u1);
console.log(u2);
console.log(u3);
class Spaceship {
    constructor(name, id, maxSpeed = 1000) {
        this.name = name;
        this.id = id;
        this.maxSpeed = maxSpeed;
    }
    launch() {
        console.log(`The ship with name ${this.name} and ${this.id} has speed ${this.maxSpeed}`);
    }
}
/* OVERRIDING METHODS */
/*
   What stays the same -> the name, parameters type, parameters count
   What can we change -> access modifiers (we can ONLY EXPAND the access)
   from protected in the parent to public in the child - ok

   -> return type has to be COMPATIBLE with parent type
   NOTHING private in the parent can be overriden in the child
*/
class Parent {
    greet() {
        return "Hello from the parent";
    }
}
class Child extends Parent {
    greet() {
        return "Hello from the child";
    }
}
//we can add keyword override if we want for good readability
const parent = new Parent();
const child = new Child();
//console.log(parent.greet());
console.log(child.greet());
class Vehicle {
    constructor(brand, basePricePerDay) {
        this.brand = brand;
        this.basePricePerDay = basePricePerDay;
    }
    calculateRent(days) {
        return this.basePricePerDay * days;
    }
}
class LuxuryCar extends Vehicle {
    constructor(brand, basePricePerDay, hasDriver = false) {
        super(brand, basePricePerDay);
        this.brand = brand;
        this.basePricePerDay = basePricePerDay;
        this.hasDriver = hasDriver;
    }
    calculateRent(days) {
        const result = super.calculateRent(days);
        return this.hasDriver ? result : result + 100 * days;
    }
}
const vehicle = new Vehicle("Suzuki", 2303);
const luxuryCar = new LuxuryCar("Tesla", 102920, true);
console.log(vehicle.calculateRent(23));
console.log(luxuryCar.calculateRent(23));
export {};
//# sourceMappingURL=excercices.js.map