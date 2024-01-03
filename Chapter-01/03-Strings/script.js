// Strings

let firstName = "Tech";
let lastName = "Coder";

console.log(firstName,lastName);

// String Concatenation

// Method 1 USING + Operators
let fullName = firstName + " " + lastName;
console.log(fullName);

// Method 2 using Template Litterals
fullName = `I want to Become ${firstName} ${lastName}`;
console.log(fullName);

// Getting the first characters - INDEX - start from 0
console.log(firstName[0]);

// String Methods

// toLocaleLowerCase - USED IN Other languages
// toLowerCase - used in javascript

//Both are same

// 1 - lowercase , UPPERCASE
console.log(firstName.toLocaleLowerCase())
console.log(firstName.toLowerCase())

console.log(firstName.toUpperCase())
console.log(firstName.toLocaleUpperCase())

// 2 - indexOF
console.log(lastName.indexOf('r'));

// Case Sensitive - OR NOT FOUND will give you -1
console.log(lastName.lastIndexOf('c'))

// 3 - TRIM
let hobbies = '  coding reading running       ';
let result = hobbies.trim()
console.log(result)

//  4 - Includes Methods

// Case Sensitive and NOT FOUND will give you false
console.log(result.includes('Reading'));

// 5- Slice Methods

let name = "TechCoder";

// It excludes the last index 0-3 => 0-4
let result1 = name.slice(0,4);
result1 = name.slice(-1);
result1 = name.slice(1);

// Imp Note ; does not mutate ORIGINAL Array

// We made a copy of it , then apply slice on that copy , original remains same

console.log(`Original ${name}`)
console.log(`Slice ${result}`)

// 6 - Split Methods

let favColor =  "Brown,Red,Blue,Yellow,Black"

let arrColors = favColor.split(',')
console.log(arrColors)

let favColor1 =  "Brown Red Blue Yellow Black"

let arrColors1 = favColor.split(' ')
console.log(arrColors)

// Strings are Immutable

let str = "Hello";

str[0] = 'p'
str[1] = 'a'

// New Memory Allocation , Previous str will not be overwrite
// But we can not modify string by this 

str = str + "Programmers"
console.log(str)