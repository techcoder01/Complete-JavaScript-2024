// forEach Method of array

// its another type of loop which we use to traverse over the array

let dishes = ['Biryani', "Pizza", "Salad", "Noodles"];

// using for loop

for (let i = 0; i< dishes.length; i++){
    console.log(dishes[i]);
}

// using forEach

let upperCase = str => str.toUpperCase();

dishes.forEach(function(element){
    console.log(element)
})

