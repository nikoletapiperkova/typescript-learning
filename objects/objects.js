"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let person = {
    name: "ivan",
    age: 14,
};
//typescript inferes type 
//{name:string, age:number}
//but if we use object it becomes more vague 
person = [];
let student = {
    name: "petar",
    fn: 331,
};
let press = {
    title: "Little Women",
    wordCount: 123n,
    author: {
        name: "Jane Austen",
        age: 100,
        species: "human"
    },
    awards: {
        firstAward: {
            name: "Grammy",
            date: new Date("19:01:2026"),
        },
        secondAward: {
            name: "Emmy",
            date: new Date("26:05:2022"),
        }
    }
};
console.log(press);
console.log(press.author.species);
let random = Symbol();
//всички различни атрибути по веднъж - кара се, ако е нещо различно 
let catAndDog = {
    name: "Kitty",
    isCute: true,
    meaow: 10000,
    barks: false,
    sleeps: {
        [random]: true,
    }
};
let catOrDog = {
    name: "Kote",
    isCute: true,
    meaow: 1000,
    barks: false,
    //name: "George",
    //we cannot do that
};
console.log(catOrDog);
function logger(state) {
    switch (state.state) {
        case "loading":
            return "Loading";
        case "failed":
            return `Error ${state.code} downloading`;
        case "success":
            return `Downloaded ${state.response.title} - ${state.response.summary}`;
    }
}
let myNetwork = {
    state: "failed",
    code: 1,
};
console.log(logger(myNetwork));
//Всичко, което сложиш вътре в ${ }, се изпълнява като жив код.
let airplane = {
    model: "Airbus A380",
    flightNumber: "A2201",
    timeOfDeparture: new Date(),
    timeOfArrival: new Date(),
    caterer: {
        name: "Special Food Ltd",
        address: "484, Some Street, New York",
        phone: 7867856751,
    },
    seats: {
        A1: "John Doe",
        A2: "Mark Doe",
        A3: "Sam Doe",
    },
};
//# sourceMappingURL=objects.js.map