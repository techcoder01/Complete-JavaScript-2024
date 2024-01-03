// Loose Equality (==) Vs Strict Equality Operators

let age = 22;

// Loose Equality Operator == : !=

console.log(age == '22');  // Focus ONLY on Value But Not Type
console.log(age != '22');  // Focus ONLY on Value But Not Type


// Strict Equality Operator == : !==

console.log(age === '22');  // Focus on Both Value and its Type
console.log(age !== '22');  // Focus on Both Value and its Type

// Boolean Values And Comparison Operators

let booleanType = true;
let stringType = "true";

console.log(typeof stringType , typeof booleanType);

let email = 'techcoder@gmail.com'

let booleanValue = email.includes('@') 
console.log(booleanValue);


// Comparison Operators Always Returns Boolean Value
// == , === , != , !==
// > , >= , < , <=

//  Arithmatic Operations

let x = 5;

console.log(x++) // 8 - will not change directly into 6 
console.log(x+=2) // 8
console.log(x--) // 7 - will not directly change - 8
console.log(x-=2) // 5


// Logical operations

let a = true;
let b = false;

// OR

// aik bhi true hojai , returns true
console.log(a||b); // true

// AND

// DONO true hojai , returns true
console.log(a&&b); // FALSE

let status = 'low';
console.log(status == 'low')

let points = 45;
console.log(points == "45")
console.log(points === "45")
console.log(points != "45")
console.log(points !== "45");
console.log(points >= "40");
console.log(points <= "40");

// Returns BOOLEAN Values