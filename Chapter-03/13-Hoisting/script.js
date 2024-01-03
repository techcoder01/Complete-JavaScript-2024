// Hoisting 
// Variable "decleration" are 'hoisted' toward 'top' of their scope

test = 10
console.log(test)

// Strange : how can we use the test variable before the initialization 
var test;
// Not in case of Let and const


test1();
function test1(){
    console.log("Hello Programmers")
}


// Not in case of Function expression or arrow function

let text = (name = "Coder") => console.log("Hello",name);

let text1 = function(name="Programmer"){
    console.log("Hello",name)
}

text()
text1();