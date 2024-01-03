// Functions 

// It is simply a piece of code which we can use in 
// our program many times .

// It is just like a variable holding some piece of code

// Declaration

function nameOfFunction(){
    // Code goes here
    console.log('You are running code present inside the function');

}

// Call the Function
nameOfFunction();
nameOfFunction();
nameOfFunction();

// Function Expression
// Isme ham cheezo ko variable ki tarah put kare ge

let sayHi = function someName() {
    console.log( "Hello" );
  }; //This is function expression but with name and function can be called either way like sayHi() or someName().
  

// Anonymous Function

  var anon = function() {
    console.log('I am anonymous');
  }
  anon(); //This is also function expression but without name to the function hence it is anonymous function.

let fun = function(){
    console.log('This is an example of function expression')
}

fun();

// Real Example

let invitation = function(name = "defaultValue" ,time = "night"){ // local variable to this function | Parameters | Yeh variable bahir exist nahi kare ga 
    console.log(`Welcome! ${name} You are invited on our event and time will be ${time}`);
}

// console.log(name); // Exist nahi kare ga function ke bahir

invitation("marie", "morning"); // Arguments
invitation("harry"); // Arguments
invitation() // Undifined , to remove that use default value


// Returning Values (How to return value from the function)

let ageCalculation = function(birthYear , currentYear = 2023){
    let age = currentYear - birthYear;
    return age;
    // After return no line of code will execute , return is the last statement
}

console.log(ageCalculation(2005));

// OR

let age = ageCalculation(2005);
console.log(`Your age is = ${age}`)

// Arrow Functions (ES6)

// Special Form of Function Expression.
// It allows us to write function more fast because
// NO need to use function keyword.
// No need to use parenthesis () in case of single parameter.
// No need to use curly {} if single line code in function.
// No need to use return statement if single line code in function.

// Anonymous Function / Function Expression

let invite = function(name){
    console.log(`Welcome ${name} to this event`);
}
invitation('coders')

// Arrow Function

let newInvitation = name => `Welcome ${name} to this event`;

let firstInvitation = name => {
      return `Welcome ${name} to this event`;
}

let finalInvitation = (name = "Guest") => `Welcome ${name} to this event`;

console.log(newInvitation('Abdul Hannan'));

console.log(finalInvitation());

// Passing Function as an Argument (Higher Order Function Example)

let upperCase = str => str.toUpperCase();
let lowerCase = str => str.toLowerCase();

let transformer = (str='coders',fun=upperCase) => fun(str);

console.log(transformer(undefined,upperCase)); // Passing Function as an Argument
console.log(transformer("coding")); // Passing Function as an Argument // By Default UpperCase


// Function Returning Another Function

let compliment = function(){
    return function(msg, name){
        console.log(`${msg} ${name}`);
    }
}

compliment()('You are a Good Programmer',"Abdul Hannan");

let myCompliment = function(msg){
    return function(name){
        console.log(`${msg} ${name}`);
    }
}

myCompliment('You are a Good Programmer')("Abdul Hannan");


// 2nd Method

let complimented = myCompliment('You are a Good Programmer');

complimented("Abdul Rehman");

// compliment , myCompliment both are high order function


// Immediately invoked Function Expression // IIFE
// Executed Only Once

// Now this is expression also in ()();
// Function ka naam hi nahi hai , reuse nahi karsakte 
// kabhi hum kuch libraries ko initialize karne ke liye yeh use karte hai

(function(name){
    console.log('This function will never execute again',name)
})("IIFE");

// setTimeOut and setInterval

// setTimeOut => Run Function "once" after "interval" of time
// setTimeOut: 2 second baad ya function chal jaye 

// setInterval => Run Function repeatedly, Starting after the interval of time , then repeating.......
// setInterval : aapko har 2 second ke baad function chalana hon , toh setInterval

// setTimeOut

// Async functions - aik dam se execute nahi hote , thora time laga kar execute karte hai

// setTimeout(func|code, delay, arg1, arg2, ...);

// CallBack Functions

function greeting(){
    console.log('Welcome to our tech coder family')
}

setTimeout(function greeting(name){
    console.log('Welcome to our tech coder family')
},1000 , "Neha") //5000ms = 5sec

setTimeout(greeting,1000 , "Neha") //5000ms = 5sec


// setInterval(func|code, delay, arg1, arg2, ...);

// setInterval(greeting, 5000 , "Abdul Hannan");