//  Control Flow

// for loops

// Run the specific tasks 5 times

// without for loop

console.log("Run")
console.log("Run")
console.log("Run")
console.log("Run")
console.log("Run")

// with for loops

for (let i = 0; i<=1001; i++){ // Infinite Loop In case we miss conditional statements
    console.log("Run the Task ", i)
}

// Uncase of for loopa

let dishes = ['Biryani','Pizza', "Burger",'Pani-poori']

// Access the array values

console.log(dishes[0]);

for (let i = 0; i < dishes.length; i++) {
   console.log(dishes[i]);
}

for (let i = 0; i<=5; i++){
    console.log("For Loops ", i)
}

console.log('*********************');

// While Loops
let j=1;

while(j<=5){
    console.log('while loop ',j);
    j++
}

let dishex = ['Biryani','Pizza', "Burger",'Pani-poori'];

let x = 0;

while (x<dishex.length){
    console.log("My Favourite dish is ",dishex[x]);
    //x++ //without this statement we will get infinite loop
    x = x+1
}

// Do While Loops

// yeh kahi bhi use nahi hota , only knowledge

let y = 1;

do{
    // TASK here
    console.log("At lease Run Time = " , y);
    y++;
}while(false)

// Break and Continue Statement

// Inka maqsad control flow ko break karna hota hai

// Also called Jump Statements

//loop ko tor kar kahi aur ja sakte hon

// Continue Statement

// loop ko khatam karo bas is waale iteration ko run karo

// aik tariqe se skip karo loop ko

// aik playlist ki video ko continue  karo , phir woh sirf us dosri video ko run kare ga , aur baaki ko skip kare ga

for (let i = 0; i <=10 ; i++){

    if(i == 2){
        continue; // skip kare ga 2 
    }
    console.log('Value of i = ', i);
}

// Break Statement

// used to terminate the loop and control transfer from outside the loop

// aik playlist mai aik gaane ke baad koi aur song dekhna hi nahi hai , toh break statement lagado

for(let i = 0; i<=10; i++){

    if(i== 5){
        console.log('Our desired value is = ' , i);
        break
    }
    console.log("value of i = ", i);
}

console.log("i am outside the loop statement")

