const A = loadInitialCount() > 6 ? 7 : 5;
class Counter {
  static count = 0;
  private static count2 = 0;
  public canNonStaticBeAccessed: boolean = false;
  //constructor runs at instance level
  //executed multiple times - each instance
  constructor(public id: number) {
    this.id = Counter.count;
    Counter.count++;
  }
  //the static block runs at class level
  //it is executed once - when we initialize the class
  //when the class is loaded in the memory
  //before constructor
  static {
    console.log("Initializing Counter Class");
    Counter.count = A;
    //this.canNonStaticBeAccessed; //no
  }
  decrement() {
    //this.count--; //we can't do this
    //Counter.count--;
    Counter.count2; //ok
  }
  static increment() {
    this.count++; //or Counter.count++
    //в случая при декларирането на this
    //this сочи към Counter
    //this.canNonStaticBeAccessed
  }
}

function loadInitialCount() {
  return 10;
}
//we can add access modifier to static attributes
//console.log(Counter.count2);

let instance = new Counter(10);
console.log(instance.id);
//instance.count;
//Property 'count' does not exist on type 'Counter'.
//  Did you mean to access the static member 'Counter.count' instead?

console.log(Counter.count);
//we access the static members of the class
//by class name - not by instantiating an object
//they belong to the class - not to the instances of the class
Counter.increment();
console.log(Counter.count);

//static blocks are loaded whenever you initialize a class
//you try to access anything from it
