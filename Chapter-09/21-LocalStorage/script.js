// Local Storage

// In Previous todo list task when we refresh the browser 
// we lose our current state data

// Store and retrieve date from database

// For now our focus is on local storage

// Store and retrieve date from local storage

// Is an api provided by browser to store date inside the browser

console.log(window);
console.log(localStorage);


// Set Item
// GET Item
// Update Item


// Set Item

localStorage.setItem('passion', 'programming')
localStorage.setItem("age",24);
console.log(localStorage)


// Get item

console.log(localStorage.getItem('age'));

// Update

localStorage.setItem('age', 26);
localStorage.setItem('', 23);
console.log(localStorage);

// Remove Item

localStorage.removeItem("") // pass key
console.log(localStorage)

// Remove All Item

localStorage.clear()
console.log(localStorage)


// How to store complex data structure like array of objects

let vehicles = [
    {
        company: "Honda",
        model: "2009",
    },
        {
        company: "Toyota",
        model: "2010",
    },
]

console.log( typeof vehicles);

let stringOfVehicles = JSON.stringify(vehicles);
console.log(stringOfVehicles)

localStorage.setItem("vehicles", stringOfVehicles);
console.log(localStorage)


// Get stored item again in Object formate

let storeData = localStorage.getItem('vehicles');

let objectFormate = JSON.parse(storeData);

console.log( typeof objectFormate);


