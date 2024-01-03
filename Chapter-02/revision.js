// Scope of Var

var count = 1; // this coumt is same in if block

// Only Function Blocks creates new Scope With Var

function sum (a,b,c){
    var count = 0; // this count is different
    return a + b + c;
}

if (age > 18){
    var count = 2; // THIS count is same.
    console.log(count);
}

// NO Block {} scope is created .
// Can be redeclared

// Scope of Let

let count = 1; // this coumt is different 

function sum (a,b,c){
    let count = 0; // this count is different
    return a + b + c;
}

if (age > 18){
    let count = 2; // THIS count is different too.
    console.log(count);
}

//  In Let All Blocks Variables are Different
// All Block {} have separate scope
// Only declared once in scope


// Quick Revise

// Iteration 1

let array = [1,2,3];

// ----------------- 0 - true ---- 3 -------- i++ will not work
for (let index = 0; index < array.length; index++){
//    iterator init --- condition -----  Step Change

    let element = array[index]; // 0 index - print 1

    console.log(element);
}

// Iteration 2

// ----------------- 1 - true ---- 3 -------- i++ will work in 2nd iteration
for (let index = 1; index < array.length; index++){
    
    let element = array[index]; // 1 index - print 2

    console.log(element);
}

// Iteration 3

// ----------------- 2 - true ---- 3 -------- i++ will work 
for (let index = 2; index < array.length; index++){
    
    let element = array[index]; // 1 index - print 3

    console.log(element);
}

// Iteration 4

// ----------------- 3 - false ---- 3 -------- i++ will work 
for (let index = 3; index < array.length; index++){
    
    let element = array[index]; // will Not work , failed , loop end

    console.log(element);
}

let i = 0;

while (i < 6){
    if (i == 3) {
        break;
    }
    i = i + 1;
}

console.log(i)

let text = '';

for (i = 0; i < 10; i++){
    if (i == 3){
        continue;
    }
    text = text + i;

    console.log(text);
}

let code = "PK"
switch (code) {
    case "PK":
        console.log("Pakistan");
        break;
    case "US":
        console.log("United States")
        break;
    case "IN":
        console.log("India")
        break;
    default:
        console.log("Not Matched")
}

// Truthy / Falsy Values

age = 20;

if (-1) { // by default true age > 18 is also true
    console.log('Adult')
} else {
    console.log("kid")
}

// truthy values

// true
// "0"
// "a"
// 10 // positive number
// "hello"
// []
// {}
// -1

// falsy values

// false
// 0 
// ""
// undefined
// null
// NaN

// Not Operator ! true to false , false to true

let status = true;

if (!status){
    console.log('Your Status is = ' , status)
}

// Priorities

// NOT
// And , OR , left to right

// Example

let result = true && true || false && !false
result = true && true || false && true
result = true || false && true
result = true && true
result = true