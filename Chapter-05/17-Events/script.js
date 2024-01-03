let body = document.querySelector('body');
let buttonClass = document.querySelector('button');
let heading = document.querySelector('h1');



buttonClass.classList.add('clickMe');
buttonClass.style.padding = "0.5rem 2rem"
buttonClass.style.color = "black"
buttonClass.style.backgroundColor = "#F5B53F"

heading.style.backgroundColor = '#F5B53F'
heading.style.padding = "0.5rem 2rem"
heading.style.border = "2px solid black"
heading.style.boxShadow = "none"; // Remove the box shadow
heading.style.cursor = "pointer"; // Change the cursor to indicate interactivity
heading.style.display = "inline-block"; // Make it inline-block to allow width to be determined by content
heading.style.borderRadius = "4px"; // Optionally, add rounded corners for a button-like feel

// --------------------------------------------------------------------------------------------------------------------

// Events Basics (click Events)

// Event Bubbling and Delegation

let click = document.querySelector('.clickMe');

click.addEventListener('click', () => {
    console.log('Button Click')
})

let liElements = document.querySelectorAll('li');
console.log(liElements);

liElements.forEach(element =>  {
    element.addEventListener("click", function(){
        console.log("Item Clicked");
    })
})

// --------------------------------------------------


// Creating 

const ul  = document.querySelector('ul');
const button = document.querySelector('.clickMe');

button.textContent = "Add New Todo"

button.addEventListener('click', () => {
    let li = document.createElement('li')
    li.textContent = "Something New Added";
    ul.append(li);
    // ul.prepend(li)
})

// ----------------------------------------------------------

// Removing

// Yeh Parent ke har li ko target kar raha hai

// Bubbling Concept

// Child -> Parent -> Parent -> Parent -> ... -> root
// Event Start child se hota hai  


// is case mai yeh winner hai as compare to forEachMethod
// Bahut saari memory bachali , kyun ke aik addEventListener lagaya hai


ul.addEventListener('click', (e) => {
    if (e.target.nodeName === 'LI') {
        e.target.style.textDecoration = 'line-through'
        // e.target.remove();
    }
});

// -------------------------------------------------------------


// Yeh li ko target kar raha hai jo pehle se hon sirf unko
// Memory consuming , forEach ke liye alag alag addEventlistener banaya howa hai


// liElements.forEach(element =>  {
//     element.addEventListener("click", function(e){
//         console.log("Inside lI", element);
//         // e.target.style.textDecoration = 'line-through'
//         e.target.remove();
//     })  
// })

// ------------------------------------------------------
