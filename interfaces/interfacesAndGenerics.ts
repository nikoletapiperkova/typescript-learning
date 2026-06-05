enum AutomobileTypes {
  car = "car",
  bus = "bus",
  van = "van",
  truck = "truck",
  bike = "bike",
}

enum AutomobileBrands {
  ferrari = "ferrari",
  honda = "honda",
  bmw = "bmw",
  toyota = "toyota",
}

enum AutomobileColors {
  red = "red",
  blue = "blue",
  white = "white",
  black = "black",
  silver = "silver",
}

interface Automobile<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

const ferrari: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> =
  {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.ferrari,
    colors: [AutomobileColors.red, AutomobileColors.silver],
    description: "luxury car",
  };

const honda: Automobile<string, string, string> = {
  type: "car",
  brand: "honda",
  colors: ["silver", "black"],
  description: "A simple Honda",
};

//by default the access modifier in the interface is public
//we cant add access modifiers to interface attributes
//we also cant add anything different than public
//to the class variables that are implemented

class Car implements Automobile<
  AutomobileTypes,
  AutomobileBrands,
  AutomobileColors
> {
  public type: AutomobileTypes = AutomobileTypes.car;
  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string,
  ) {}
}

//another class implementing the same interface
class Truck implements Automobile<string, AutomobileBrands, AutomobileColors> {
  public type: string = "truck";
  public description: string = "a big automobile for heavy load";
  public load: number = 100;
  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
  ) {}
}

const car: Car = new Car(
  AutomobileBrands.honda,
  [AutomobileColors.white, AutomobileColors.red],
  "very practical car",
);
console.log(car);
//I discovered that this is completely valid by copypasting
//because each class has the same methods and attributes
//if we add a new one we cant do this
/*
const truck: Truck = new Car(
  AutomobileBrands.honda,
  [AutomobileColors.white, AutomobileColors.red],
  "big car",
);
console.log(truck);
*/

const truck: Truck = new Truck(AutomobileBrands.honda, [
  AutomobileColors.white,
  AutomobileColors.red,
]);
console.log(truck);

interface CommercialVehicle {
  capacity: string;
  licenseRenewalDate: Date;
}
//another class implementing the same interface
class Pickup
  implements
    Automobile<string, AutomobileBrands, AutomobileColors>,
    CommercialVehicle
{
  public type: string = "pickup";
  public description: string = "a big automobile for heavy load";
  private load: number = 100;
  constructor(
    public capacity: string,
    public licenseRenewalDate: Date,
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
  ) {}
}

//Declaration Merging Interfaces
//this happens when interfaces have the same name
interface IUser {
  name: string;
}
interface IUser {
  age: number;
}
class UserExample implements IUser {
  constructor(
    public name: string,
    public age: number,
  ) {}

  hello() {
    console.log(`Hi my name is ${this.name}`);
  }
}

interface IUser {
  hello(): void;
}

//TYPES VS INTERFACES
//we can create intersection types and union types

type User = {
  name: string;
};

type AdminUser = {
  isAdmin: boolean;
};

const userAndAdmin: User & AdminUser = {
  name: "gosho",
  isAdmin: true,
};

//union types are not the exact same thing as interfaces extending eachother
const userOrAdmin: User | AdminUser = {
  name: "Mark",
};
//we can choose which one of the types has to be completely implemeted
//with extends we need to expand a certain interface
//we need to explicitly state it

//we can add primitive types and arrays of primitive types
//we can't do the same with interfaces
type Tuple = [string, number];
type MyNumber = number[];
type MyString = string;

//we CAN'T redeclare types

//interfaces can extend multiple interfaces
//in contrast to classes

interface A {
  var: string;
}

interface B {
  vararg: number;
}

const something: A = { var: "hi" };

//so if we have two interfaces with the same attribute name
//but different type
//we can't extend both of them at the same time!

interface C extends A, B {
  newvar: Date;
}

//differences between abstract classes and interfaces

//interfaces can only have call signatures that describe their methods
//classes can have abstract methods that need to be implemented
//but they can also have fully implemented methods that are inherited as they are

//when classes inherit the methods of interfaces they implement them
//when classes do the same with abstract classes they extend them
//one class can only extend one class
//but it can implement multiple interfaces

//we dont have static memebers within the interfaces

interface UserUser {
  name: string;
  email: string;
  phone: number;
  // greeting: () => void;
}

interface Greeting {
  //'static' modifier cannot appear on a type member
  greeting: () => void;
}

class RegisteredUser implements UserUser, Greeting {
  private static lastName = "ivailov";
  constructor(
    //public static example:string, //we cant do this
    public name: string,
    public email: string,
    public phone: number,
  ) {}

  public greeting() {
    console.log(`Hello ${this.name}`);
  }
}

abstract class Person {
  public abstract name: string;
  public abstract email: string;
  public abstract phone: number;

  public greeting() {
    console.log(`Hello ${this.name}`);
  }

  public static nameClass() {
    return "Class name is Person";
  }
}

class RegisteredPerson extends Person {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
  ) {
    super();
  }
}

//if we need certain implementations abstract classes are the way to go
//if we need just a contract of the way a class behaves
//then we can use interfaces

interface A1 {
  name: string;
  greet(str: number): number;
}

interface B1 {
  name: string;
  greet(): void;
}

class AB implements A1, B1 {
  public name: string = "one";
  // greet(){
  //   console.log(" ");
  // }

  greet(str?: number): number {
    return 5;
  }
}

//singleton
//animals that can walk, swin, fly
//each action is done exactly the same way (don't override)
//animal that can walk and swim, walk and fly
//first way i can think of

//this is okay but we determine what we can do by instantiating the object
//not by a fixed class definition
//we also cant call methods directly by their names

enum Actions {
  fly = "fly",
  walk = "walk",
  swim = "swim",
}

const ActionBehaviors = {
  [Actions.fly]: () => {
    console.log("Flying.");
  },
  [Actions.walk]: () => {
    console.log("Walking.");
  },
  [Actions.swim]: () => {
    console.log("Swiiming.");
  },
};

class Animal {
  constructor(
    private species: string,
    private actions: Actions[],
  ) {}

  performAction(action: Actions) {
    if (this.actions.includes(action)) {
      ActionBehaviors[action]();
    } else {
      console.log(`Can't ${action}`);
    }
  }
}

//let bird = new Animal<string>("bird", [Actions.walk, Actions.fly]);
//bird.performAction(Actions.fly);

//we can achieve a good result with mixins
type Constructor = new (...args: any[]) => {};

function Flying<T extends Constructor>(Base: T) {
  return class {
    fly() {
      console.log("I am flying");
    }
  };
}

function Swimming<T extends Constructor>(Base: T) {
  return class extends Base {
    swim() {
      console.log("I am swimming");
    }
  };
}

function Walking<T extends Constructor>(Base: T) {
  return class extends Base {
    walk() {
      console.log("I am walking");
    }
  };
}

class AnimalBase {
  constructor(private species: string) {}
}

class Otter extends Walking(Swimming(AnimalBase)) {}
const otter: Otter = new Otter("mammal");
otter.walk();

//another way to determine what an instance can do
//after constructor call

//my third idea - we declare the methods as protected
//the child classes just override the ones they need
//but not by rewriting the function but by changing the access
//modifiers
//that way we extend only one class with all functionalities

class Animal3 {
  protected walk() {
    console.log("Walking 3");
  }
  protected fly() {
    console.log("Flying 3");
  }
  protected swim() {
    console.log("Swimming 3");
  }
}

class Dolphin extends Animal3 {
  public override swim() {
    super.swim();
  }
}

let dolphin = new Dolphin();
dolphin.swim();
