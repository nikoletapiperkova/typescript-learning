let person :Object = {
    name : "ivan",
    age: 14,
}

//typescript inferes type 
//{name:string, age:number}
//but if we use object it becomes more vague 
person = []


let student:{
    name:string;
    fn:number; //semi-colon
}= {
    name : "petar",
    fn:331,
}

type Press = {
    title:string;
    wordCount:bigint;
    author:{
        name:string;
        age:number;
        readonly species: "human" | "ai";
    }
    awards:{
        [name:string]:{
            name:string;
            date:Date;
        }
    }
    category?:string;
    
}

let press:Press = {
    title:"Little Women",
    wordCount:123n,
    author:{
        name:"Jane Austen",
        age:100,
        species: "human"
    },
    awards:{
        firstAward:{
            name:"Grammy",
            date:new Date("19:01:2026"),
        },
        secondAward:{
            name:"Emmy",
            date:new Date("26:05:2022"),
        }
    }

}

console.log(press);
console.log(press.author.species);

//press.author.species = "ai";
//cannot asign species because its a read- only property


//unions
type Dog = {
    name: string;
    barks: boolean;
    sleeps:{};
}

type Cat = {
    name:string;
    isCute:boolean;
    meaow:number;
}

let random:symbol = Symbol();

type CatAndDog = Cat & Dog;
//всички различни атрибути по веднъж - кара се, ако е нещо различно 
let catAndDog:CatAndDog = {
    name: "Kitty",
    isCute:true,
    meaow:10000,
    barks:false,
    sleeps:{
      [random]:true,
    }

}


type CatOrDog = Cat | Dog;
let catOrDog:CatOrDog = {
    name:"Kote",
    isCute: true,
    meaow:1000,
    barks: false,
    //name: "George",
    //we cannot do that
}
console.log(catOrDog);

//we have to have AT LEAST One COMPLETE object of the two

type NetworkLoadingState = {
    state:"loading";
};

type NetworkFailedState = {
    state: "failed";
    code: number;
};

type NetworkSuccessState = {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
    };
};

type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState;

function logger(state:NetworkState){
    switch(state.state){
        case "loading":
            return "Loading";
        case "failed":
            return `Error ${state.code} downloading`;
        case "success":
        return `Downloaded ${state.response.title} - ${state.response.summary}`;
    }
}

let myNetwork:NetworkState = {
    state:"failed",
    code:1,
} 

console.log(logger(myNetwork));
//Всичко, което сложиш вътре в ${ }, се изпълнява като жив код.

let airplane:Airplane = {
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

type Airplane = {
    
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: {
    name: string;
    address: string;
    phone: number;
  },
  seats:{
    [randomName: string]:string;
  }
    
  
};

