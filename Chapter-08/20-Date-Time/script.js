// Date Object always Carry Both "Date" & "Time";

// Using Date Method

// Year , Month , Day

let currentDate = new Date(2024,2,1, 10,46,1); // 0 to 11 = Months 
console.log(currentDate);




// Using timestamp (integer number represent in "ms" from 1-1-1970);
let currentDate1 = new Date(0);// 0 is time in ms
currentDate1 = new Date(86400000);
currentDate1 = new Date(1704174415562);
// 1 day = 24 * 60 * 60 = 86400000ms;
console.log(currentDate1);

// Time Shuru howa tha Computer ki World mai , us waqt se pehle computer the nahi


// To get time in "ms"
let currentDate2 = new Date().getTime();
console.log(currentDate2)



// Date and time methods

let completedDateAndTime = new Date();
console.log('completedDateAndTime = ', completedDateAndTime)


// Get Full Year

console.log(completedDateAndTime.getFullYear());

// Get Full Month

console.log(completedDateAndTime.getMonth());

// Get Weak Dayys
// 0  - sunday, 1 - Monday and so on

console.log(completedDateAndTime.getDay());

// Get Month Date;

console.log(completedDateAndTime.getDate());

// Get Hours

console.log(completedDateAndTime.getHours());

// Get minutes

console.log(completedDateAndTime.getMinutes());

// GET Seconds 

console.log(completedDateAndTime.getSeconds());



// Digital Clock

let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let seconds = document.querySelector('.seconds');

let ticking = function(){

    let currentDate = new Date();
    // console.log(currentDate)

    let getHour = currentDate.getHours();
    let getMin = currentDate.getMinutes();
    let getSec = currentDate.getSeconds();

    hour.textContent = getHour;
    minute.textContent = getMin;
    seconds.textContent = getSec;

}

setInterval(ticking, 1000)