// Introduction to objects In Js
"use strict"

let car = {
    color: "black",
    model: "2023",
    company: "Honda",
}

// Array mai sequence se hota hai sabb cheeze car[0] , car[1] ,...
// Object mai labels hai , car ki company , color , keys se aap yeb sab access karte hon

console.log(car)

// Accessing te Javascript Properties

console.log(car['color']);
console.log(car['model']);
console.log(car['company']);

console.log(car.color)
console.log(car.model)
console.log(car.company)

// What's the Difference (.  [])

let propertyColor = "color"

// [] is ka faida yeh hai ke variable aap isko pass karsakte hon , dynamically bhi change hosakta hai
console.log(car[propertyColor]); //black - computed 

console.log(car.propertyColor) // undifined - use direct property name


// Modify the Object property

car.color = 'brown';
console.log(car.color)

car['color'] = 'brown';
console.log(car.color)


// Delete Properties of Object

let obj = {
    prop1 : "value1",
    prop2 : "value2",
    prop3 : "value3",
}

delete obj.prop1;
delete obj['prop1'];

console.log(obj)

let returnValue = delete obj.prop2

console.log(obj.prop2, returnValue)

console.log(obj)

// Function vs Method

let ageCalculator = birthyear => {
    let age = 2023 - birthyear;
    console.log('Current age is =',age);
} 

ageCalculator(1998);

// Method >--- It is nothing but object property (Key) holding Function as "Value"

let person = {

    // This is called Method , Object ke context ke andar function ko method hi bole ge
    ageCalculate : (birthyear = 2005) => {
        let age = 2023 - birthyear;
        return age;
    }
}

console.log(person.ageCalculate('2023'))

// this Keyword

// In Each Method we have an access of special keyword called "this"

// "this" keyword represent the object. "Calling" the "method" In which "this" is present

// Example

let newPerson = {
    firstName : "Abdul",
    lastName : "Hannan",
    city : "Karachi",
    education : "Full Stack Web Developer",
    birthYear : 2005,
    getSummary : ( ) => {
        // return `${this.firstName} ${this.lastName} lived in ${this.city}. He has master in ${this.education} and his birthDate is ${this.birthYear}`
        return this;
        // in console , in this , you will find prototype , aik special cheez jis ke wajah se array mai lenght aur baaki properties exist karti hai
    } 
}

console.log(newPerson.getSummary());

// Objects inside Array

let blockList = [{userName:"John", reason: "Abusive content"}, {userName: "Paul", reason: "copyright"}];

console.log(blockList);

for(let i = 0; i < blockList.length; i++){
    console.log(`User ${blockList[i].userName} Blocked Due to this Reason ${blockList[i].reason} `)
}

// Math Object built in object in Javascript

console.log(Math)

let number = -7.4;

console.log(Math.abs(number)) // 7.4 . turn into positive

console.log(Math.pow(2,3)) // EXPONENTIonal 2*2*2

console.log(Math.sqrt(4)) 

console.log(Math.max(4,5,190,0,12)) // 100

console.log(Math.min(4,5,190,0,12)) // 0

console.log(Math.round(number)) // Round to Nearest Integer

console.log(Math.floor(number)) // Round to Down

console.log(Math.ceil(number)) // Round to Up

console.log(Math.trunc(number)) //remove decimal points

let random = Math.random();

console.log(random*100); // yeh maximum mai 100 tak jaiga
console.log(Math.round(random * 100)); // yeh maximum 99 jaiga , round ki wajah se


// call and apply metho
// We can manually set the value of 'this' keyword using 'call and apply'

let mainPlane = {
    airline: "PIA",
    iatacode: "FI",
    bookings: [],
    flights: function(flightNum , name) {
        console.log(`${name} booked Flight on ${this.airline} with Flight Number ${this.iatacode}${flightNum}`)
        this.bookings.push({flightName: `${this.airline}`, name: name, flightNum, flightNum})
    }
}


mainPlane.flights(553, "Abdul Hannan")
mainPlane.flights(434, "Abdul Rehman")

console.log(mainPlane)

let childPlane = {
    airline : "Jet Airways",
    iatacode: "JT",
    bookings : [],
}

let book = mainPlane.flights;

// book(655,"Arisha") // This is a regular function
// 'this' value is undifined at least in strict mode

// Solution using "Call Method"

book.call(childPlane, 689, "Abdul Hannan");
book.call(mainPlane, 790, "Abdul Hannan");

console.log(childPlane)
console.log(mainPlane)

// Solution using "Apply Method"

book.apply(childPlane, [689, "Abdul Hannan"]);
book.apply(mainPlane, [790, "Abdul Hannan"]);


// "Bind" Method

function greet(){
    console.log(`Welcome ${this.firstName} ${this.lastName} on tech coder`)
}

let user = {
    firstName: "Neha",
    lastName: "Sharma",
}

let greets = greet.bind(user);

greets();


// "Object/Arrays" how "reference are passed to variable"

let array = [1,2,3,4,5];

let getReference = array;

getReference[5]= 6
getReference.shift();

// if you only add 6 to getReference , then why original array changed
console.log('Original Array', array); // also changed 
console.log('get Reference Array', getReference);

console.log('------------------------------------------')

// Solution , "Spread Operator";

let getRef = [...array];

getRef[5] = 7
getRef.pop();
getRef.shift();

console.log('Original Array', array); 
console.log('get Ref Array', getRef);

console.log('------------------------------------------')

// for-in Loop (Each Iteration return a "Key" of object);
// this loop is made for objects specifically

let car1 = {
    model: 2022,
    color: "Black",
    company: "Toyota",
}

console.log(car1)

let x = " ";
for (let key in car1){
    x = x  + " , " + car1[key]
}

console.log(x)

// -------------------------------------------------------

const object = { a:1 , b:2 , c:3};

for (const property in object){
    console.log(`${property}: ${object[property]}`)
    //               ||
    //           these properties are called enumerable
}