// Destructuring the Arrays

let hotels = {
    name: 'Hotel Paradise',
    location : "Street No. Xyz Karachi",
    categories : ["Chinese","Italian", "English"]
}

// Single Example

// without it

let items = [2,3,6,8];

let a = items[0];
let b = items[1];
let c = items[2];
let d = items[3];

console.log(a,b,c,d)


// with destructuring

let [w,x,y,z] = items

console.log(a,b,c,d)

// Example 2

let [first, , third] = hotels.categories;
console.log(first,third)


// Switch the Category (UseCase) // Swap

// Without destructuring


let temp = first;
first = third;
third = temp;
console.log(first, third);


// With destructuring

[first,third] = [third, first];
console.log(first, third)


// Nested Array Destructuring

let nums = [2,3, [6,9]];
let [a1, ,[b1, c1]] = nums;
console.log(a1,b1, c1)


// Destructing of Object;

let hotel = {
    name: "Anarkali Hotel",
    location: "Street Anarkali Lahore",
    categories: ['English', "Chinese", "Italian"],
    mainMenu: ["FoodA", "FoodB", 'FoodC'],
    starterMenu: ["Special Food 1", "Special Food 2"],
    openingHours : {
        sunday: {open: "09:00AM", close: "11:00PM"},
        monday: {open: "10:00AM", close: "10:00PM"},
        tuesday: {open: "10:00AM", close: "10:00PM"},
    }
}


// let {name1, location1, mainMenu} = hotel;
// console.log(name1,location1,mainMenu);

// let {name:hotelName , location:hotelLocation, mainMenu:Menu} = hotel;
// console.log(hotelName, hotelLocation, Menu);

let { Menu = [] , categories} = hotel
console.log( Menu , categories)

// Destructing of Nested Objects

let {name , openingHours} = hotel;
console.log(name , openingHours);

let {sunday:{open,close}} = openingHours;
console.log( open, close)


// Spread Operator

let nums1 = [4,5,6,7];
console.log(nums1) // Return Array
console.log(...nums1) // Har Number Alag ALag Print Hoga

// UseCase

let newArray = [1,2,3, ...nums1];
console.log("ney aRRAY IS", newArray);

let updatedMenu = [...hotel.mainMenu , "Food D", "Food E"]
console.log(updatedMenu);

let menuConcat = ["Food E", "food F"]
console.log(menuConcat.concat(hotel.mainMenu))


// Join 2 Arrays

let joinedArray = [...nums1, ...newArray]
console.log(joinedArray)


// Create Shallow Copy Using Spread Operator
// Shallow Reference ko Copy nahi karte

let copyArray = [...updatedMenu];
copyArray[1] = "UpdatedFood";

console.log(copyArray)
console.log(updatedMenu)


// We can also use Spread Operator on Strings

let passion = "Programming";
console.log(...passion)


// Rest (Spread Ka Ulta)

// Spread(...) operator . It is Present in the RHS of -
let nums2 = [2,3,4,5];
let newArray2 = [1, ...nums2];
console.log(newArray2);

// Syntax OF REST(...) Get elements and packed them into array
// Use in LHS


let myName = "Abdul Hannan";
let [a3,b3,...bhai] = myName;
console.log(bhai);

let [a2,b2, ...rest] = nums2;
console.log(rest)

// Objects 

let {sunday , ...weekdays} = hotel.openingHours;
console.log(sunday , weekdays)

//  Short Circuiting ( && , || )

// falsy values

// false
// 0 
// ""
// undefined
// null
// NaN

// AND (&&) operator ( Output true if all input true )

// if true last value will come
// if false then 1st value will come
// Not Move Towards  Next , if not true

let result = 5000 &&  "HELLO"; 
console.log(result); // last value "Hello"

let result1 = "" &&  "HELLO"; 
console.log(result1); // last value "Hello"


// OR ( || )


// if true in first , first value will come
// if false then short circuiting (will run the true one)
// not Move Towards ,  if find the true value

let result2 = null || "hello";
console.log(result2)


// for nullish coalesting operator (??) only "null" and "undeifned"
// are falsy values

let newGuest;
let result3 =  newGuest ?? 10;

console.log(result3);


// Enhanced Object litterals

// Before ES6 and After ES6
let openingHours1 = {
    sunday: {open: "09:00AM", close: "11:00PM"},
    monday: {open: "10:00AM", close: "10:00PM"},
    tuesday: {open: "10:00AM", close: "10:00PM"},
}

let menuType = 'platinumMenu';

let hotel1 = {
    name: "Anarkali Hotel",
    location: "Street Anarkali Lahore",
    categories: ['English', "Chinese", "Italian"],
    mainMenu: ["FoodA", "FoodB", 'FoodC'],
    starterMenu: ["Special Food 1", "Special Food 2"],
    // openingHours : openingHours1
    openingHours1,
    // order: function() {
        
    // }
    order(){

    },
    [menuType]: ["Hello Foood 1"]
}

// Let Suppose We want to check this hotel open on saturday or not
// If open then at what time

// console.log(hotel1.openingHours1.saturday.open);

// To Avoid this error : two methods

// Without Optional Chaining

if (hotel1.openingHours1 && hotel1.openingHours1.saturday){
    console.log(hotel1.openingHours1.saturday.open)
}

// With Optional Chaining

// Check previous vlaue of the operator => null or undefined
console.log(hotel1.openingHours1.saturday?.open)



// For of loop

// let menu = [...hotel1.mainMenu , ...hotel1.starterMenu];
// console.log(menu)

// for (let elem of menu) console.log(elem);
// for (let item of menu.entries()) console.log(`${item[0]+ 1} : ${item[1]}`);

// // if you want both index as wwell as value
// for (let [i, item] of menu.entries()) console.log(`${i + 1} : ${item}`);



// Looping Objects (Object_keys , values , entries);

// Before ES6 and After ES6
let openingHours2 = {
    sunday: {open: "09:00AM", close: "11:00PM"},
    monday: {open: "10:00AM", close: "10:00PM"},
    tuesday: {open: "10:00AM", close: "10:00PM"},
}

let menuType1 = 'platinumMenu';

let hotel2 = {
    name: "Anarkali Hotel",
    location: "Street Anarkali Lahore",
    categories: ['English', "Chinese", "Italian"],
    mainMenu: ["FoodA", "FoodB", 'FoodC'],
    starterMenu: ["Special Food 1", "Special Food 2"],
    // openingHours : openingHours1
    openingHours2,
    // order: function() {
        
    // }
    order(){

    },
    [menuType1]: ["Hello Foood 1"]
}


// Keys(Properties)

let properties = Object.keys(hotel2);
console.log(properties)


// Values

let values = Object.values(hotel2);
console.log(values )


let entries = Object.entries(openingHours2);

for(let [day , {open,close}] of entries){
    console.log(`On ${day} We Open at ${open} and Close at ${close}`)
}


// Set - Existing values ko remove

let itemSet = new Set([1,2,3,4,5,6,5,4]);
console.log(itemSet);
console.log(itemSet.size); // Lenght
console.log(itemSet.has(8)); // Lenght

itemSet.add(5);
itemSet.delete(5);
console.log(itemSet);

console.log(itemSet[0]); // Not Allowed

for(let i of itemSet){
    console.log(i);
}

// Map (Object)

let restaurentMap = new Map();

// Adding Values into the map

restaurentMap.set('name', "Anarkali Hotel 2.0")
restaurentMap.set('1', "Anarkali Adress 1")
restaurentMap.set('2', "Anarkali Adress 2").set(true, "We are open today").set(false, "We are close Today");

console.log(restaurentMap)

// Strict Mapping , checking Data Types
console.log(restaurentMap.get("2"))
console.log(restaurentMap.get(true))


 