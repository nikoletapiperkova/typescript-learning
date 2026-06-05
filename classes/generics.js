class Box {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
    }
}
let box = new Box("one");
console.log(box.value);
class Repository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getById(id) {
        return this.items.find((item) => id !== item.id);
    }
    getAll() {
        return this.items;
    }
    removeById(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }
}
class Something {
    constructor(name, email, id, title, ISBN) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
    }
    hello() {
        console.log("hi");
    }
}
/*class AA implements Numbers{

}*/
const userRepository = new Repository();
const bookRepository = new Repository();
bookRepository.add({
    id: 2,
    title: "Harry Potter",
    ISBN: 123456,
});
//this is done when we want to add the same properties to many classes
//and we dont want to redeclare them
//we can't extend multiple classes
//this solves the problem
function TimeStamp(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            this.timestamp = new Date();
        }
        getTimestamp() {
            return this.timestamp;
        }
    };
}
class User2 {
    constructor(name) {
        this.name = name;
    }
}
class UserWithTimestamp extends TimeStamp(User2) {
    constructor(name, age, timestamp) {
        super(name);
        this.age = age;
        this.timestamp = timestamp;
    }
    displayInfo() {
        console.log(`Name ${this.name}, Age: ${this.age}`);
        // console.log(`Timestamp: ${this.getTimestamp()}`);
    }
}
const user = new UserWithTimestamp("Alice", 30, new Date());
user.displayInfo();
function Loggable(Base) {
    return class extends Base {
        log(message) {
            console.log(`${message}`);
        }
    };
}
function Activatable(Base) {
    return class extends Base {
        //A mixin class must have a constructor with
        // a single rest parameter of type 'any[]'.
        constructor(...args) {
            //we cant add more parameters
            super(...args);
            //we can implement our logic here
            this._isActive = false;
        }
        setupConfig(name) {
            this.configName = name;
            return this;
        }
        activate() {
            this._isActive = true;
        }
        deactivate() {
            this._isActive = false;
        }
        get isActive() {
            return this._isActive;
        }
    };
}
class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
//if there are collisions we overwrite them with the last
//call to the mixin
class SmartProduct extends Loggable(Activatable(Product)) {
    constructor(title, price) {
        super(title, price);
    }
}
const item = new SmartProduct("Laptop", 1500);
item.activate();
item.log(`Laptop is active? ${item.isActive}`);
//exrecice from udemy
class Employee {
    constructor(name, age, _salary, id) {
        this.name = name;
        this.age = age;
        this._salary = _salary;
        this.id = id;
    }
    get salary() {
        return this._salary;
    }
    set salary(newSalary) {
        if (newSalary > 0) {
            this._salary = newSalary;
        }
        else {
            throw new Error("Salary must be a positive number");
        }
    }
    static getCompanyName() {
        return Employee.companyName;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
    }
}
Employee.companyName = "Tech Solutions Inc.";
class Manager extends Employee {
    constructor(name, age, salary, id, department) {
        super(name, age, salary, id);
        this.department = department;
    }
    getDetails() {
        return `${super.getDetails()}, Department: ${this.department}`;
    }
}
export {};
//# sourceMappingURL=generics.js.map