//exercices for access mofifiers, shorthand constructors and overriding
//----the hungry robot-----

class Robot {
  constructor(
    public name: string,
    protected batteryLevel: number,
  ) {}

  work() {
    this.batteryLevel -= 10;
    console.log(`This battery level is ${this.batteryLevel}%`);
  }
}

class CookingRobot extends Robot {
  constructor(
    name: string,
    batteryLevel: number,
    public specialty: string,
  ) {
    super(name, batteryLevel);
    if (specialty.length === 0) {
      throw new Error("no specialty");
    }
  }

  cook(): void {
    if (this.batteryLevel >= 20) {
      this.work();
      console.log("I am cooking");
    } else {
      console.log("There is not enough battery");
    }
  }
}

let cookingRobot: CookingRobot = new CookingRobot("alphie", 76, "chef");
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
  constructor(
    id: number,
    public name: string,
  ) {}
}

let test: Test = new Test(12, "toshko");
console.log(test.name);
//console.log(test.id); //Property 'id' does not exist on type 'Test'

//Optional parameters?
class User {
  constructor(
    public name: string,
    public bio?: string,
    public role: string = "guest",
  ) {
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
  constructor(
    public name: string,
    private readonly id: number,
    protected maxSpeed: number = 1000,
  ) {}

  launch() {
    console.log(
      `The ship with name ${this.name} and ${this.id} has speed ${this.maxSpeed}`,
    );
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
  protected greet(): string | undefined {
    return "Hello from the parent";
  }
}

class Child extends Parent {
  public override greet(): string {
    return "Hello from the child";
  }
}
//we can add keyword override if we want for good readability

const parent = new Parent();
const child = new Child();
//console.log(parent.greet());
console.log(child.greet());

class Vehicle {
  constructor(
    public brand: string,
    protected basePricePerDay: number,
  ) {}

  calculateRent(days: number): number {
    return this.basePricePerDay * days;
  }
}

class LuxuryCar extends Vehicle {
  constructor(
    public brand: string,
    protected basePricePerDay: number,
    public hasDriver: boolean = false,
  ) {
    super(brand, basePricePerDay);
  }

  override calculateRent(days: number): number {
    const result = super.calculateRent(days);
    return this.hasDriver ? result : result + 100 * days;
  }
}

const vehicle = new Vehicle("Suzuki", 2303);
const luxuryCar = new LuxuryCar("Tesla", 102920, true);

console.log(vehicle.calculateRent(23));
console.log(luxuryCar.calculateRent(23));
