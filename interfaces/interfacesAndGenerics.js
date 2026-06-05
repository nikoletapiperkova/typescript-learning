var AutomobileTypes;
(function (AutomobileTypes) {
    AutomobileTypes["car"] = "car";
    AutomobileTypes["bus"] = "bus";
    AutomobileTypes["van"] = "van";
    AutomobileTypes["truck"] = "truck";
    AutomobileTypes["bike"] = "bike";
})(AutomobileTypes || (AutomobileTypes = {}));
var AutomobileBrands;
(function (AutomobileBrands) {
    AutomobileBrands["ferrari"] = "ferrari";
    AutomobileBrands["honda"] = "honda";
    AutomobileBrands["bmw"] = "bmw";
    AutomobileBrands["toyota"] = "toyota";
})(AutomobileBrands || (AutomobileBrands = {}));
var AutomobileColors;
(function (AutomobileColors) {
    AutomobileColors["red"] = "red";
    AutomobileColors["blue"] = "blue";
    AutomobileColors["white"] = "white";
    AutomobileColors["black"] = "black";
    AutomobileColors["silver"] = "silver";
})(AutomobileColors || (AutomobileColors = {}));
const ferrari = {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.ferrari,
    colors: [AutomobileColors.red, AutomobileColors.silver],
    description: "luxury car",
};
const honda = {
    type: "car",
    brand: "honda",
    colors: ["silver", "black"],
    description: "A simple Honda",
};
//by default the access modifier in the interface is public
//we cant add access modifiers to interface attributes
//we also cant add anything different than public
//to the class variables that are implemented
class Car {
    constructor(brand, colors, description) {
        this.brand = brand;
        this.colors = colors;
        this.description = description;
        this.type = AutomobileTypes.car;
    }
}
//another class implementing the same interface
class Truck {
    constructor(brand, colors) {
        this.brand = brand;
        this.colors = colors;
        this.type = "truck";
        this.description = "a big automobile for heavy load";
        this.load = 100;
    }
}
const car = new Car(AutomobileBrands.honda, [AutomobileColors.white, AutomobileColors.red], "very practical car");
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
const truck = new Truck(AutomobileBrands.honda, [
    AutomobileColors.white,
    AutomobileColors.red,
]);
console.log(truck);
//another class implementing the same interface
class Pickup {
    constructor(capacity, licenseRenewalDate, brand, colors) {
        this.capacity = capacity;
        this.licenseRenewalDate = licenseRenewalDate;
        this.brand = brand;
        this.colors = colors;
        this.type = "pickup";
        this.description = "a big automobile for heavy load";
        this.load = 100;
    }
}
class UserExample {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log(`Hi my name is ${this.name}`);
    }
}
const userAndAdmin = {
    name: "gosho",
    isAdmin: true,
};
//union types are not the exact same thing as interfaces extending eachother
const userOrAdmin = {
    name: "Mark",
};
class RegisteredUser {
    constructor(
    //public static example:string, //we cant do this
    name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greeting() {
        console.log(`Hello ${this.name}`);
    }
}
RegisteredUser.lastName = "ivailov";
class Person {
    greeting() {
        console.log(`Hello ${this.name}`);
    }
    static nameClass() {
        return "Class name is Person";
    }
}
class RegisteredPerson extends Person {
    constructor(name, email, phone) {
        super();
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
class AB {
    constructor() {
        this.name = "one";
    }
    // greet(){
    //   console.log(" ");
    // }
    greet(str) {
        return 5;
    }
}
//singleton
//animals that can walk, swin, fly
//each action is done exactly the same way (don't override)
//animal that can walk and swim, walk and fly
//first way i can think of
var Actions;
(function (Actions) {
    Actions["fly"] = "fly";
    Actions["walk"] = "walk";
    Actions["swim"] = "swim";
})(Actions || (Actions = {}));
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
    constructor(species, actions) {
        this.species = species;
        this.actions = actions;
    }
    performAction(action) {
        if (this.actions.includes(action)) {
            ActionBehaviors[action]();
        }
        else {
            console.log(`Can't ${action}`);
        }
    }
}
let bird = new Animal("bird", [Actions.walk, Actions.fly]);
bird.performAction(Actions.fly);
function Flying(Base) {
    return class {
        fly() {
            console.log("I am flying");
        }
    };
}
function Swimming(Base) {
    return class extends Base {
        swim() {
            console.log("I am swimming");
        }
    };
}
function Walking(Base) {
    return class extends Base {
        walk() {
            console.log("I am walking");
        }
    };
}
class AnimalBase {
    constructor(species) {
        this.species = species;
    }
}
class Otter extends Walking(Swimming(AnimalBase)) {
}
const otter = new Otter("mammal");
otter.walk();
export {};
//# sourceMappingURL=interfacesAndGenerics.js.map