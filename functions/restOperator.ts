function multiplyBy (by:number, ...nums:number[]){
    return nums.map(number => number * by);
}
//we dont have a return statement - it's going to e undefined 
const arrayOfNums:number[] = [1, 2, 3];
console.log(multiplyBy(4, ...arrayOfNums));
console.log(arrayOfNums);


function multiplyBy2(by: number, ...numbers: number[]) {
  return numbers.map((eachNumber) => by * eachNumber);
}
//the return is implicitely called 

// Calling the function
console.log(multiplyBy(2, 3, 4, 5));
console.log(multiplyBy(2, 3, 4));



let args: [number, number]= [2, 5];
const args2 = [2, 5];
args2.push(4);

let args3:readonly number[]  = [1, 3, 5];
args3 = [2,4, 6]; //completely legal
// args3.push(2); //not okay

let args4 = [2,4] as const;
//args4 = [5, 6];

//we can do it with const, but we CAN'T do it with readonly
//with readonly we can reassign the reference 

//when we cast as const
//the type turns from number[] to readonly tuple [2, 5] with 2 and 5 as fixed constants


//now that its cast as const it becomes a tuple
//without it it doesnt work
const angle = Math.atan2(...args4);

///ARGUMENT DESTRUCTURING

type NumbersObject = {
    a: number;
    b: number;
    c:number;
}

const numObj = {
    a:2,
    b:3,
    c:4,
}


function destructure ({a, b, c} : NumbersObject):number {
    return a + b + c;
}

console.log(destructure(numObj));