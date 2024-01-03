// More Events

// copy event

let copyrightElement = document.querySelector('.copy');
let link = document.querySelector('a')

link.setAttribute('href', 'https://newlink.com');

copyrightElement.addEventListener('click', ()=> {
    link.setAttribute('href', 'https://newlink.com');
})

copyrightElement.addEventListener('copy', (e)=> {    
    
    // Prevent the default copy behavior
    e.preventDefault();
    
    // Get the selected text
    const selectedText = window.getSelection().toString();

    // Create a new string with the desired link or content
    const newContent = `Modified Text: ${selectedText} - New Link: https://example.com`;


    // Replace the clipboard data with the new content
    e.clipboardData.setData('text/plain', newContent);

    console.log('OOOI , You can copy this CopyRight Material')
})


// Mouse Move Event

let box = document.querySelector('.box');

box.addEventListener('mousemove', (e)=> {
    
    console.log(e.offsetX, e.offsetY);

})

// Forms Element (Submit Form);

// Regular Expression (Regex)

// It is a pattern of Characters used to do pattern matching
// Or we can say for "Data Validation"

// Inplementation of password validation

// Lenght At least - 8
// At least Contain one UpperCase letter
// At least Contain one LowerCase letter
// At least Contain one 0 - 9

let form = document.querySelector('.sign-up-Form');
let user = document.querySelector('#name');
let password = document.querySelector('#password');

let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,15}$";

// start-tag -  ^()
// condtionCheck - ?=
// .*? - Aik ya aik se zyada exist karti hai ya nahi
// [A-Z] - atleast one upperCase Letter
// [a-z] - atleast one lowerCase Letter
// .{8, } - atleast one lowerCase Letter
// end-tag - $


// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let passwordValue = password.value;
//     console.log(passwordValue);

//     let result = passwordValue.match(passwordPattern);
//     console.log(result);

//     if(result){
//         console.log("Your Password is Strong");
//     }
//     else {
//         console.log('Try Again')
//     }
    
//     // console.log(email.value , password.value) 
//     // console.log(form.email.value , form.password.value) 
     
//     // // Below is the standard way
//     // console.log(form.userEmail.value , form.userPassword.value) 
//     // console.log("Submit the Form Successfully")
// })

// Regex Part 2

// Implement username Validation

// username can only consist of A-Z or a-z
// Lenght of username between 6 to 12

let userNamePattern = /^[A-Za-z]{6,12}$/

form.addEventListener('submit', e => {
    e.preventDefault()

    let username = user.value;
    console.log(username)
    
    let result = userNamePattern.test(username);

    if(result == true){
        console.log('Username is Valid')
    }else {
        console.log('Sorry , try again')
    }
})

// Keyboard Event - Live Feedback

user.addEventListener('keyup' , e => {

    if(userNamePattern.test(e.target.value)){ // true
        user.setAttribute('class', 'success')
    } else {
        user.setAttribute('class', 'error')
    }
})

// BOM - Browser Object Model - Window

// Sab ke Top Par - Dom ka bhi Parent

// location
// document - Dom
// alert 
// confirm
// scrollX
// scrollY
// innerWidth
// innerHeight
// open
// close
// scrollTo

// 100 -more

// Page level cheezen Document Object Model

// Browser Level cheezen Browser Object Model - WIndow
