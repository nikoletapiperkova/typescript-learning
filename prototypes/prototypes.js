/* All objects in javascript have a hidden
connection to another object called a prototype

when you instantiate an object it automatically gets this connection

if you try accessing a method or property that is not in the current object 
javascript tries to look for it in the prototype

PROTOTYPE CHAIN-----------------

case:we want the name of the object

1.check if name is in obj
2.check obj prototype
3.checks the prototype of the prototype
4.goes along the chain until the end ->
object.prototype === null
if we get to null and nothing is found -> return undefined 

Why they exist? -----------------------
to not reuse code 
if we copy each method in the copy of an object
the memory will be overfilled with redundant functions

----------------what happens within classes??
*/

class Users {
  constructor(name) {
    this.name = name; //property
  }
  //(*)
  login() {
    //method
    console.log(this.name + "has logged in");
  }
}

//the properties this.name go to the instance
//the methods go to the class prototype

const users1 = new Users("dari");
const users2 = new Users("jana");

console.log(users1);
console.log(users2);

//we can add it directly to the prototype as well
//this is the same thing as (*)
Users.prototype.logout = function () {
  console.log(this.name + "has logged out");
};
//we are accessing the prototype through the class name - not the instance

//we can use function keyword seeingas we are going
//to call it through an object
//we want to be able to access the name of the object

function Example(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Example.prototype.showProduct = function () {
  console.log(this.a * this.b * this.c);
};

let example = new Example(1, 2, 3);
console.log(example);
console.log(Example);

/*Every function has the following 
secret reference __proto__ that leads to Function.prototype
and a property .prototype (that is just an empty object {})
this poperty is used ONLY when the function is called through the operator new


when we call new an empty object is created 
connects the prototype __proto__ leads to Example.prototype
refers this to the object address
calls Example function which creates this.a = a
returns the object

protoype is a property of functions - its a pattern they give to the objects created y them

__proto__ is property of the instances(objects) -> its the map to look into the hierarchy for objects

The __proto__ property exists in every single object in JavaScript.
 It is a hidden reference (link) that points directly to the prototype of the function that created this object. 
 The prototype chain we talked about is built through __proto__.

 */

//we cant call constructor like that it is being protected
//instead we will access a constructor fuction
function User2(name, email) {
  this.name = name;
  this.email = email;
}
User2.prototype.func = function () {
  console.log("some func");
};
AdminUser.prototype = Object.create(User2.prototype);
//if this was User it would throw error
function AdminUser(name, email, peopleReporting) {
  User2.apply(this, [name, email]);
  //we only copy the properties directly on top
  //not the methods in the prototype
  this.peopleReporting = peopleReporting;
  //we apply the function in a different environment
  //we explicitly pass the this reference
}

///inheriting the User prototypes
AdminUser.prototype = Object.create(User2.prototype);
//the User prototype becomes nested inside the AdminUser prototype
//thats not the same thing

AdminUser.prototype.anotherFunc = function () {
  console.log("another func");
};

const admin = new AdminUser("ivan", "ivan@mail.com", 12);
admin.func();
//it has access to it but its not in its prototype
console.log(admin);

/*JavaScript classes are considered "syntactic sugar" 
because they do not introduce a new object-oriented inheritance model, 
but instead provide a cleaner, more familiar syntax mimicking traditional class-based languages. 
Under the hood, the `class` engine continues to use the exact same mechanisms of function constructors 
and the `prototype` object to manage shared methods. 
Ultimately, keywords like `class` and `extends` 
simply map directly to `Object.create()` and prototype chain linking,
masking the language's native prototypical behavior without changing how the memory is handled.
 */

function func() {
  console.log("try");
}

const a = new func();
console.log(a);

class B {
  constructor(hi) {
    this.hi = hi;
  }
  hello() {
    console.log(this.hi);
  }
}
class A extends B {
  solve() {
    console.log("solving");
  }
}
const aa = new A();
console.log(aa);

//we nest the prototype B inside the A prototype
//this is the exact same thing
//thats why we can say that classes are syntactic sugar for ptototypical inheritance
//in reality everything that is inherited operates on prototypes

//ALTERNATE METHODS TO CREATING OBJECTS
//literal syntax
const book = {
  title: "book",
  pages: 300,
  author: "John",
};

const book2 = new Object();
book2.title = "book2 title";
book2.pages = 320;

console.log(book2);

//we are looking into property descriptors
//DESCRIPTORS
//value -> the value of the property
//writable(boolean)
//ennumerable -> if we can loop over it or can enumerate it
//configurabel - if we can set the previous descriptors can be changed or not

//we are using the global object
//this is a static method that need the object to be passed as argument
console.log(Object.getOwnPropertyDescriptors(book));

//how to define them
const book3 = new Object();
Object.defineProperty(book3, "loan", {
  value: "1000 dollars",
  writable: true,
  enumerable: false, //this becomes hidden in for loops
  configurable: false, //if we change enum and writ throws error
});
//Object.defineProperty(book3, "author", { writable: false });
book3.loan = "bravo";
Object.defineProperty(book3, "author", {
  value: "J R.",
  writable: false,
  enumerable: true,
  configurable: true,
});
book.author = "Mark";
//not overriding it
console.log(book3);
//this doesnt show the flag descriptors
//when we look at the log it is not a the standard way objects display

//if we define writable as false it becomes a readonly property
//IN RESUME:
//this is what happens under the surface
//same thing
//as i said
