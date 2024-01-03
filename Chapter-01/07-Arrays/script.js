// Special Data Types IN jS

// Arrays


// More than one same things , you can make a collection of them instead
let dish1 = 'Biryani'
let dish2 = 'Chaat'

let dishes =  ['Biryani', "Chaat", "Parathay"];

console.log(dishes) 
console.log(dishes[0])
console.log(dishes[1])
console.log(dishes[2])

// Undefined
console.log(dishes[3])


// You Can't Modiy the String , But you can MODIFY array

dishes[0] = "Pizza";

// Array Method

// Join Methods

console.log(dishes.join(" "))
console.log(dishes.join("-"))

// by default => ,

console.log(dishes.join())

// indexOF

// Case Sensitive - false will be => -1

console.log(dishes.indexOf('pizza'))

// Concat Method

let newDishes = ['Sweet Dishes' , "Pani Poori"];
let updatedDishes = dishes.concat(newDishes);

// Abhi tak koi bhi method modify nahi karsakta array ko , bus use jor kar aik naya array dedeta hai
// Abhi tak NON mutating methods the

// Lenght Method

console.log(updatedDishes.length);



// Mututator METHOD  , Will modify Array
// Push Method

// returns new lenght of array
console.log(updatedDishes.push("Dahi Bally"));
console.log(updatedDishes);

// Pop Method

// Remove the last 
console.log(updatedDishes.pop())



