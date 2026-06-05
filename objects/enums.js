"use strict";
//we don't have enums in javascript
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//console.log(Direction.Down);
//console.log(Direction[1]);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 0] = "Up";
    Direction2[Direction2["Down"] = 1] = "Down";
    //Left = "one",
    Direction2[Direction2["Left"] = 2] = "Left";
    Direction2[Direction2["Right"] = 3] = "Right";
})(Direction2 || (Direction2 = {}));
//ординати
//цифрите
//start from 1, 2,3, 4
//but if we add this Left = "one" it stops working
//when we declare enums we use this 
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["author"] = "author";
    Roles["editor"] = "editor";
})(Roles || (Roles = {}));
const person = {
    name: "John",
    email: "john@email.com",
    password: "password",
    role: Roles.admin,
};
//console.log(Direction2.Down);
var Lectures;
(function (Lectures) {
    Lectures["FIRST"] = "philosophy";
    Lectures["SECOND"] = "history";
    Lectures["THIRD"] = "science";
})(Lectures || (Lectures = {}));
var TRY;
(function (TRY) {
    TRY[TRY["ONE"] = 0] = "ONE";
    TRY[TRY["TWO"] = 1] = "TWO";
    TRY[TRY["THREE"] = 2] = "THREE";
})(TRY || (TRY = {}));
var Access;
(function (Access) {
    Access[Access["READ"] = 1] = "READ";
    Access[Access["WRITE"] = 2] = "WRITE";
    Access[Access["READWRITE"] = 3] = "READWRITE";
    Access[Access["DELETE"] = 4] = "DELETE";
    Access[Access["ALL"] = 7] = "ALL";
})(Access || (Access = {}));
console.log(Access.READWRITE);
console.log(Access.ALL);
//excercices 
let arrayOfNumbers;
let arrayOfStrings;
let person2 = ["georgi", 12];
let colors = ["red", "blue", "gray"];
let point = [1, 4.5];
//point.push(2);
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status["INACTIVE"] = "inactive";
    Status["PENDING"] = "pending";
})(Status || (Status = {}));
const StatusConst = {
    ACTIVE: "active",
    INACTIVE: "inactive",
    PENDING: "pending",
};
//behaves as enum 
//# sourceMappingURL=enums.js.map