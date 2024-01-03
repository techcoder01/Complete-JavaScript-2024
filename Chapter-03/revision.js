//-------  1st parameter , 2nd Parameter
function move(direction , steps){
    return direction, steps;
}

//1st Argument,2nd argument 
move("right" , 10);

function sum(a,b,c){
    console.log(a+b+c)
}

sum(2,3,4);

// Functions

// Good for multi-line logic
// Creates a new "this" context

// Arrow Functions

// Good for single line returns
// Does'nt create a "this" context;

// Higher Order FUnctions

// Functions which contain other function to do some task

// other function can be argument (CallBack Function)
// other function can be inner return value ( closure)

// 1. Callback Functions

var talk = function(fx){
    fx();
}

var sayHi = function(){
    console.log("hi")
}

talk(sayHi);

let newTalk = fx => fx();
let sayHello = () => console.log('Hello');

newTalk(sayHello);

// -------------------------------------------------

let calc = (fx , a,b) => fx(a,b)

let plus = (x,y) => x + y;
let diff = (x,y) => x - y;
let multiply = (x,y) => x * y;

console.log(calc(plus, 4, 5))
console.log(calc(diff, 4, 5))
console.log(calc(multiply, 4, 5))

// ----------------------------------------------------

// 2. Function returning function
// Also Example of "closure"

function makeFunc(){
    const name = "Google";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();