class User {
    constructor(user, admin, lastName) {
        this.user = user;
        this.admin = admin;
        if (lastName !== undefined) {
            this.lastName = lastName;
        }
    }
    greet() {
        console.log(this.user);
    }
}
//let user:User = new User(true, "ivan");
//console.log(user);
class UserWithEmail extends User {
    constructor(user, admin, email, lastName) {
        super(user, admin, lastName);
        this.email = "default@gmail.com";
        this.email = email;
    }
    greetEmail() {
        super.greet();
        console.log("in email");
    }
}
const a = [1, 2, 3];
a.push(2);
//a = [2,3,4];
let b = ["one", "two"];
b = ["five"];
//b.push("eight");
let aConstantNumber = 2;
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
    constructor(title, author, ISBN, yearPublished) {
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
function logBookDetails(book) {
    if (book.yearPublished !== undefined) {
        console.log(`Title: ${book.title}, author:${book.author}, ISBN:${book.ISBN}, yearPublished:${book.yearPublished}`);
    }
    else {
        console.log(`Title: ${book.title}, author:${book.author}, ISBN:${book.ISBN}`);
    }
}
class EBook extends Book {
    constructor(title, author, ISBN, fileSize, format, yearPublished) {
        super(title, author, ISBN, yearPublished);
        this.fileSize = fileSize;
        this.format = format;
    }
}
export {};
//# sourceMappingURL=index.js.map