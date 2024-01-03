// Type Conversion

let stringType = "54";

console.log(stringType, typeof stringType);

// Number Method

let numberType = Number(stringType);

console.log(numberType, typeof numberType);

// Imp Note
// In Number method passing String Must be of numeric values

// String Method

let numberType1 = 54

console.log(typeof numberType1)

let stringType1 = String(numberType);

console.log(stringType1 , typeof stringType1);

// Koi bhi number ko String banaya Ja sakta hai
// Lekin Har String ko number nahi banaya jasakta


// Boolean Method True / False

let age1 = ""; // empty string
let age2 = " "; // space is true
let age3 = "23abdul"; // any value is true
let booleanValueOfAge1 = Boolean(age1);
let booleanValueOfAge2 = Boolean(age2);
let booleanValueOfAge3 = Boolean(age3);

console.log("Boolean Value of age is ", booleanValueOfAge1);
console.log("Boolean Value of age is ", booleanValueOfAge2);
console.log("Boolean Value of age is ", booleanValueOfAge3);