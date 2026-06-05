export {}; // Този празен експорт казва на TS: "Това ТРЯБВА да е ES Module!"
class User {
  user: string;
  readonly admin: boolean;
  lastName?: string;

  constructor(user: string, admin: boolean, lastName?: string) {
    this.user = user;
    this.admin = admin;
    if (lastName !== undefined) {
      this.lastName = lastName;
    }
  }
  greet(): void {
    console.log(this.user);
  }
}
//let user:User = new User(true, "ivan");
//console.log(user);

class UserWithEmail extends User {
  email: string = "default@gmail.com";
  constructor(user: string, admin: boolean, email: string, lastName?: string) {
    super(user, admin, lastName);
    this.email = email;
  }

  greetEmail(): void {
    super.greet();
    console.log("in email");
  }
}
const a: number[] = [1, 2, 3];
a.push(2);
//a = [2,3,4];

let b: readonly string[] = ["one", "two"];
b = ["five"];
//b.push("eight");
let aConstantNumber: number = 2;
const anotherConstant = 2;
console.log(anotherConstant);
//by nature its a static class
//it never changes

//we can use default constructor?
//no we can't - same as C++
let user1 = new User("one", false);
//user1.user = "two";
let user2 = new User("ivan", true);
let user3 = new User("petra", false, "ivanova");

let user4 = new UserWithEmail("gosho", true, "gosho@gmail.com");
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user4.greetEmail());

//task from Udemy

class Book {
  title: string;
  author: string;
  yearPublished?: number;
  readonly ISBN: string;

  constructor(
    title: string,
    author: string,
    ISBN: string,
    yearPublished?: number,
  ) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    if (yearPublished !== undefined) {
      this.yearPublished = yearPublished;
    }
  }
}

let book = new Book("the tales of typescript", "undemy", "92837", 2026);
console.log(book);

function logBookDetails(book: Book): void {
  if (book.yearPublished !== undefined) {
    console.log(
      `Title: ${book.title}, author:${book.author}, ISBN:${book.ISBN}, yearPublished:${book.yearPublished}`,
    );
  } else {
    console.log(
      `Title: ${book.title}, author:${book.author}, ISBN:${book.ISBN}`,
    );
  }
}

class EBook extends Book {
  fileSize: number;
  format: string;

  constructor(
    title: string,
    author: string,
    ISBN: string,
    fileSize: number,
    format: string,
    yearPublished?: number,
  ) {
    super(title, author, ISBN, yearPublished);
    this.fileSize = fileSize;
    this.format = format;
  }
}
