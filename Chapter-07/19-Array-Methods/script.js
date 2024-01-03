// Working With Arrays (Simple Method)

let letters = ['a', 'b', 'c', 'd'];

// Reverse - (Mutate to Original Array); Mutating Method

let reverse = letters.reverse();

console.log(reverse)
console.log(letters)

// concat method

let nums = [1,2,3,4]

let concated = nums.concat(letters);

console.log(...nums, ...letters)
console.log(concated)


// Join

let joined = letters.join('-');
console.log(joined)


// Slice Method

// Used to Extract part of the array
// Array.slice(startIndex, lastIndex[excluded]);
// Return new Array of Extracted Elements

let num = [1,2,3,4,5];

let extractedArray = num.slice(1,4);

console.log('Original Array =', num);
console.log('Extracted Array =', extractedArray);

// Splice Method

// use to add new element's into the array
// Array.splice(index,deleteValue,valueTobeAdded)
// Return deleted items in the form of array


let spliced = num.splice(-1,0,6,10) // Mutated

console.log("Original array = ", num)
console.log("updated array = ", spliced)



// Simple Methods

let numX = [10,20,30,40,50];

// At Method

console.log(numX[0]) 
console.log(numX.at(0)) // iska faida , yeh negative index per bhi kaam karsakta

// Getting last element of the Array

console.log(numX[numX.length -1]);
// ------------  Or -------------------\
console.log(numX.slice(-1)[0]);
// ------------  Or -------------------\
console.log(Number(numX.slice(-1))) 
// ------------  Or -------------------\
console.log(numX.at(0))

// At Method in String

let name = "Abdul Hannan Irfan";
console.log(name.at(0))

// Js - Map method - Higher Order Function 

// Create New Array from Original Array by Applying
// Transformation function

let salaries = [3000,5000,6000,9000,16000];

let resultSalary = salaries.map((salary)=> {
    let increament = salary/2;
    return salary + increament ;
});

console.log("After 50% Increament, New Salaries are = " + resultSalary);

// Lenght of new array always 'equal' to the original Array


// filter Method (Used to Perform Filtration on Array);
// decide kare ga , konsa elements ko andar rehna hai , konse ko bahir


let gifts = [
    "Smartwatch",
    "watch",
    "ring",
    "Wireless Headphones",
    "Customized Gift Basket",
    "Tech Gadgets",
    "Books by Favorite Author",
    "Spa Day Voucher",
    "Gourmet Chocolate Set",
    "Outdoor Adventure Experience",
    "Personalized Artwork",
    "Cooking Class Certificate",
    "ring",
  ];

let filteredArray = gifts.filter(gift => {
    if(gift === "watch" || gift == "ring"){
        return gift;
    }
})

console.log(filteredArray)
console.log(gifts)

// imp Note:
// lenght of new Array may or may not be equal to original array;


// Reduce Method

// Run Reducer function for each array element;
// Reducer function takes two arguments : Array.reduce(function(accumulator, currentValue), InitialValue)
// It return single value

let numY = [1,2,3,4,5];

let sum = numY.reduce((total, currentValue) => {
    return total + currentValue;
},0 )  

console.log(sum)


// fInd Method
// it return the first elemet we are looking for ...

let students = [
    {id:1, name:"Abdul Hannan"},
    {id:2, name:"abdul Rehman"},
]

let result = students.find(student => {
    return student.id === 1;
})

console.log(result) // false will be undefined


// Findindex Method

// Execute function for each array element
// It return "index" of that array element who "first" pass the test "Otherwise" -1

let ages = [19,20,21,22,23,24,25,26];

let result1 = ages.findIndex(age => {
    return age > 30; // -1
}) 

console.log(result1)

// indexOf , not passing condition
// findIndex , pass the condition in it


//  "some" and "every" method

// some method return "true" if "any" array element pass the test

// every method return "true" if "all" array element pass the test

// simmilar to || , &&

let scores = [10,20,30,40,50,60,80,90,100];

let result2 = scores.some(score => {
    return score> 50;
});

let result3 = scores.every(score => {
    return score> 9;
});


console.log(result2,'\n', result3)

// flat method

// it creates a new array with the elements of the subarrays
// concatenated into it
let arr = [[1,2],[3,[4,5]],[[6],7]];

console.log(arr);

let result4 = arr.flat(2); //by default 1 (dept value) value

console.log(result4)


// flatMap Method

// it is the combination of the "map()" method
// followed by the flat() method of depth "1"

let cart = [{
    name : 'apple iPhone',
    qty: 2,
    price: 100000,
}, 
{
    name : 'Tablet',
    qty: 2,
    price: 50000,
}, 
]

let newCart = cart.flatMap(item => {
    if(item.name === "apple iPhone"){
        return [item, {
            name: "Screen Protector",
            qty: 1,
            price: 0,
        }]
    } else {
        return [item];
    }
})

console.log(newCart)

// sorting array using sort method

// By default sort method is used to sort strings
// It firstly convert evertything into string and than ....

let letterX = ["a","e","i","I","o","u","b"];

console.log(letterX.sort());

let nums1 =  [2,5,7,-1,-22,-43];

console.log("Unsorted",nums1.sort()); // Unexpected - Can't deal with negative number

// if a-b < 0 => a < b => A,B (Keep Order same);
// if a-b > 0 => a > b => B,A (Swith the order)

// Ascending 

nums1.sort((a,b) => {
    return a-b;
    // if (a < b){
    //     return -1; //Any Num less than 0
    // }
    // if (a > b){
    //     return 1;  // Any Num Greater than 0
    // }
})

// Descending

nums1.sort((a,b) => {
    // return b-a;
    if (b < a){
        return -1; //Any Num less than 0
    }
    if (b < a){
        return 1;  // Any Num Greater than 0
    }
})

console.log(nums1)

const array = ['March','Jan', 'Feb', 'Dec'];
let sorted = array.sort( compareFn )

function compareFn (a,b){
    if (a < b) {
        return -1;
    }
    if( a > b) {
        return 1;
    }
    return 0;
}

console.log("Hello",sorted)
// Chain of Methods

let num2 = [1,2,3,4,5,6];

let result5 = num2.slice(0,3).splice(2,1,7).push(88,90); 

// slice is not mutating , so you can more .slice().slice()
// splice() and push() are mutating , you can't add more repeatedly
// if first method is not mutating , the array will not change

console.log(result5 , num2) // Give lenght

// Map 

let myName = "Abdul Hannan";

let names = myName.split();

