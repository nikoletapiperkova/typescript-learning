class Box<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    this._value = value;
  }
}

let box = new Box<string>("one");
console.log(box.value);
//box.value = 123; //not okay

type Identifiable = {
  id: number;
};

class Repository<T extends Identifiable> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getById(id: number): T | undefined {
    return this.items.find((item) => id !== item.id);
  }

  getAll(): T[] {
    return this.items;
  }

  removeById(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}

type User11 = Identifiable & {
  name: string;
  email: string;
  hello(): void;
};
type Book = Identifiable & {
  title: string;
  ISBN: number;
};

class Something implements User11, Book {
  constructor(
    public name: string,
    public email: string,
    public id: number,
    public title: string,
    public ISBN: number,
  ) {}

  hello() {
    console.log("hi");
  }
}

type Numbers = 1 | 2;
/*class AA implements Numbers{

}*/

const userRepository = new Repository<User11>();
const bookRepository = new Repository<Book>();

bookRepository.add({
  id: 2,
  title: "Harry Potter",
  ISBN: 123456,
});
/*
userRepository.add({
  id: 1,
  name: "John",
  email: "john@email.com",
}); */

//mixins
//we are accepting a class
//that we want to extend

//T extends a constructor
type Constructor = new (...args: any[]) => {};

//this is done when we want to add the same properties to many classes
//and we dont want to redeclare them
//we can't extend multiple classes
//this solves the problem
function TimeStamp<T extends Constructor>(Base: T) {
  return class extends Base {
    protected timestamp: Date = new Date();

    getTimestamp() {
      return this.timestamp;
    }
  };
}
class User2 {
  constructor(public name: string) {}
}

class UserWithTimestamp extends TimeStamp(User2) {
  constructor(
    name: string,
    public age: number,
    timestamp: Date,
  ) {
    super(name);
    this.timestamp = timestamp;
  }

  displayInfo() {
    console.log(`Name ${this.name}, Age: ${this.age}`);
    // console.log(`Timestamp: ${this.getTimestamp()}`);
  }
}

const user: UserWithTimestamp = new UserWithTimestamp("Alice", 30, new Date());
user.displayInfo();

function Loggable<T extends Constructor>(Base: T) {
  return class extends Base {
    log(message: string) {
      console.log(`${message}`);
    }
  };
}

function Activatable<T extends Constructor>(Base: T) {
  return class extends Base {
    private _isActive: boolean;
    private configName: string;
    //A mixin class must have a constructor with
    // a single rest parameter of type 'any[]'.
    constructor(...args: any[]) {
      //we cant add more parameters
      super(...args);
      //we can implement our logic here
      this._isActive = false;
    }

    setupConfig(name: string) {
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
  constructor(
    public title: string,
    public price: number,
  ) {}
}

//if there are collisions we overwrite them with the last
//call to the mixin
class SmartProduct extends Loggable(Activatable(Product)) {
  constructor(title: string, price: number) {
    super(title, price);
  }
}

const item = new SmartProduct("Laptop", 1500);
item.activate();
item.log(`Laptop is active? ${item.isActive}`);

//exrecice from udemy
class Employee {
  static companyName: string = "Tech Solutions Inc.";

  constructor(
    public name: string,
    public age: number,
    private _salary: number,
    protected id: number,
  ) {}

  get salary(): number {
    return this._salary;
  }

  set salary(newSalary: number) {
    if (newSalary > 0) {
      this._salary = newSalary;
    } else {
      throw new Error("Salary must be a positive number");
    }
  }

  static getCompanyName(): string {
    return Employee.companyName;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    age: number,
    salary: number,
    id: number,
    public department: string,
  ) {
    super(name, age, salary, id);
  }

  override getDetails(): string {
    return `${super.getDetails()}, Department: ${this.department}`;
  }
}
