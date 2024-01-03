// Variables and Block scope

// scope => Area where variable is defined or accessible

// Global Scope

let score = 90;

if (true){
    console.log(score) // error : cannot call function , decleration se pehle

    let score = 50;  // Will print nearest value , like outside the block , it dont matter
    
    console.log(score)
}

console.log(score); // 90

// Let and Const both are block scope 
// Var is Global Scope 