// if , else , elseif statements

let budget = 5000;

if(budget > 6000){
    console.log("will do dinner in hotel , our budget is", budget);
}
else if(budget > 4500){
    console.log("will do dinner in 5 star hotel , our budget is", budget);
}
else if(budget > 3000){
    console.log("will do dinner in 3 star hotel");
}
else {
    console.log('Yaar Budget nahi ho pa raha , All Conditions are false')
}

console.log("I am outside of conditional block");

// Nested if Statements

// yeh majboori mai nested if else use karna hai

let num = 23;
if (num > 22){
    console.log('Run if 1st condition true');
    if (num >20){
        console.log('Run if both conditions true')
    }
        if(num > 20){
            console.log('Run if all conditions true')
        }
}

// Ternary Operator in Js


//  This is normal if else , without using ternary operator
let age1 = 17;

if (age1 > 18){
    console.log('Qualify')
} else {
    console.log('Fail')
}


// This is single line if else , using ternary operator

let age = 19;
let weight = 56;

let result = age > 18 ? "Qualify": "Fail"; 

result = age > 18 ? weight > 55 ? 'Qualify' : "weightIssue" : "ageIssues";

console.log(result);

//  Switch Case

let allowedAge = 16;

switch (allowedAge) {
    case 15:
        console.log('Allowed for 15 years old');
    case 16:
    case 17:
       result1 = "You are eligible for Sitting at Exams"
       break;

    default:
        result1 = "You are not eligible to sit at exams"
}

console.log(result1);

