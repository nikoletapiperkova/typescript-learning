//to write only js files use no emit
//it disables the creation of other files

//the this keyword - it. always leads to the
//object that is executing the function

//if we call this in an ordinary function that is not
//a method we get the main object
//in the browser this is window
//if. we use "use strict" this will be undefined

function showMe() {
  console.log(this);
}
showMe();
//undefined because we use strict
//the module structure is also strict by defauld
//in the html we need to remove <type = "module">
//if we run in nodejs we get object global
//not the same as browser

//this in methods of objects
const user = {
  name: "niki",
  authors: ["John", "Mark", "Rob"],
  greet() {
    console.log(this);
  },
  //anonymous function -- we dont call it through the object
  //object.anonymous function (like that)
  //therefore it refers to the global object
  printAuthors() {
    let i = 0;
    this.authors.forEach(function (author) {
      console.log(this.authors[i]);
      i++;
    }, this);
  },
  printAuthors2() {
    let i = 0;
    this.authors.forEach((author) => {
      console.log(this.authors[i]);
      i++;
    });
  },
};
//we can also add this as a parameter to functions
//this refers to its surrounding scope
//the scope of the object

//-------------------
//what is happening?
//we call printAuthors throught the current object
//this refers to the object
//we pass it as argument INSIDE the foreach

user.printAuthors();
user.printAuthors2();

//Normal function have a this parameter
//if we call it through an object this -> object
//if we DONT call it through an object -> global scope/Window

//Arrow functions
//doenst matter where it is called or by whom
//it takes this from the local environment where it has
//been declared

user.greet();

//we can also do that
user.sayHello = function () {
  console.log(this);
};

user.sayHello();

//but if we do this ->
user.sayNothing = () => {
  console.log(this);
};

user.sayNothing();
//arrow functions inherit this from the local environment
//where they have been created

//the main rule
//THIS dynamically binds itself to the object that calls the method at runtime
//arrow functions are exceptions to that rule
//they ignore who calls them at runtime

//-------CONSTRUCTOR FUNCTIONS---------------

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
  }

  login() {
    console.log(this.name, "has logged in");
  }

  logout() {
    console.log(this.name, "has logged out");
  }

  addPoint() {
    this.points++;
    console.log("total points", this.points);
  }
}

const user1 = new User("John", "john@mail.com");
const user2 = new User("Mark", "mark@mail.com");

console.log(user1);
user2.addPoint();

//the constructor function is responsible for taking the
//values from the function itself and then assigning them
//to the properties

//the methods of the class including
//the constructor are added to the prototype

function User2(name, email) {
  this.name = name;
  this.email = email;

  this.login = function () {
    console.log(this.name, "has logged in");
  };

  this.logout = () => {
    console.log(this.name, "has logged out");
  };

  this.addPoint = () => {
    this.points++;
    console.log("total points", this.points);
  };
}

//if we want to use this constructer function we would have to
//use the new operator

let user3 = new User2("John3", "john@mail.com");
let user4 = User2("John4", "john@mail.com");

console.log(user4);
//undefined

//constructor functions always generate an empty object first
console.log(user3);
user3.login();

//----------INFO--------------
/* As we have previously stated functions this refers to the global scope
if not invoked through an object

this is where the new operator comes in
behind the curtains the new operator 
1.creates an empty object
2.refers this inside the constructor to this object
3.executes the code of the constructor

now when we declare properties to the new object they get binded to it

seeing as we have used arrow functions and not 
the function keyword 

the arrow functions are going to refer to the current object

1.where is the arrow function written (inside the constructor)
2.what is this in the constructor(new object)
3.it binds itself to the surrounding environment
*/

/* 1. Какво става при user.sayHello()? (Обикновената функция)
Тъй като е обикновена функция, тя има собствен динамичен this.

Извикване: Викаш я като user.sayHello().

Резултат: Има точка пред нея, JavaScript поглежда наляво и this става самият обект user. Конзолата отпечатва обекта user.

2. Какво става при user.sayNothing()? (Стрелковата функция)
Кодът работи, защото стрелковата функция не хвърля грешка, когато няма собствено this – тя просто взима това на средата (скоупа), в която е написана.

В случая, ти добавяш метода sayNothing директно на най-горно ниво във файла (глобалния скоуп). */
