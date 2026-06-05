//interfaces are a contract
//for the classes and objects
//interfaces cannot contain real logic
//they are simply a contract for the way something must behave
//they can be used as type aliases
//it means the same thing
const person = {
    name: "John",
    email: "john@gmail.com",
    age: 23,
    greet2(name) {
        return name.length;
    },
};
//let user = new User();
//we cant do that
const u = { name: "Niki", age: 24 };
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    startEngine() {
        console.log("Vroom vroom");
    }
}
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    log() {
        console.log("Hi from customer");
    }
}
class Contractor {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    log() {
        console.log("Hi from contractor");
    }
}
class Autheticate {
    static login(buyer) {
        buyer.log();
    }
}
const customer = new Customer("niki", "niki.gmail.com");
const contractor = new Contractor("viki", "viki.gmail.com");
Autheticate.login(customer);
Autheticate.login(contractor);
const student = {
    name: "john",
    email: "john@gmail.com",
    phone: 1234,
    gender: "M",
};
const studentWithAddress = {
    name: "john",
    email: "john@gmail.com",
    phone: 1234,
    gender: "M",
    address: "Varna",
};
console.log(student);
console.log(studentWithAddress);
//we can inherit multiple interfaces as well
var Permission;
(function (Permission) {
    Permission["read"] = "read";
    Permission["write"] = "write";
    Permission["execute"] = "execute";
})(Permission || (Permission = {}));
const complicatedStudent = {
    name: "petar",
    email: "john@gmail.com",
    phone: 1234,
    gender: "M",
    address: "Varna",
    permissions: [Permission.read, Permission.write],
    IPAddr: "383646",
};
console.log(complicatedStudent);
const c = {
    time: 123,
    name: "pesho",
    age: 345,
};
export {};
//# sourceMappingURL=interfaces.js.map