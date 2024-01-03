// Html DOM

// document : 
        // Html

        // Head(elememt)
        // Title(element)
        // sitename(text)

        // Body(element)
        // Div(element) - #myDiv | id | attribute
        // p (element) - .bold | class | attribute
        // hello (text)

// DOM Tree

// JavaScript DOM (Document Object Model)

// Created by browser as the html load into the browser.

// Browser create object of html called "document object".

// In Document Object there is model of complete html in tree like structure.

console.log(document);
console.log(document.URL);

// Getting Html element's using querySelectorAll

// querySelector returns "first element" that match Css Selector

// To Get all matched elements , we use querySelectorAll

// 1 step - Selection

let resultedElement = document.querySelector('p')
let resultedElementAll = document.querySelectorAll('p')

// console.log(resultedElement)
console.log(resultedElementAll) // Node List

resultedElementAll.forEach(element => {
    console.log(element);
})

// forEach Method works for Node List , but not work on Html Collections
// Hence QuerySelector is the latest features in javascript so it works like a charm.

// Access Element by ID
let resultedElementclass = document.querySelector('#techcoder');
console.log(resultedElementclass);


// Access Element by Class
let resultedElementID = document.querySelector('.coders')
console.log(resultedElementID); 


// querySelectorAll - preferable
// but in the old times , many methods were used instead like below



// getElementsByTagName

let tagNameElements = document.getElementsByTagName('p');
console.log(tagNameElements); // HTMl Collection 

// Error - For Each Not worked on html COllections . 
// getElementsByTagName these are outdated , not works perfect

// tagNameElements.forEach(element => {
//     console.log(tagNameElements);
// });



// getElementsByclassName

let classNameElements = document.getElementsByClassName('coders');
console.log(classNameElements); // HTMl Collection 

// getElementsById

let idElements = document.getElementById('techcoder')
console.log(idElements)



// step 2 - Modification

// Updating and Changing Context


// InnerText
// ignore spaces

let heading = document.querySelector('h1');
let content = document.querySelector('.content')

console.log(heading.innerText);

console.log(content.innerText);
content.innerText = "<p>Hey! You are doing great;</p>"

console.log('------------------------------------')

// InnerHtml
// it does not ignore spaces
// Retrieve and set content in Html Format

console.log(heading.innerHTML)
console.log(content.innerHTML)
content.innerHTML += "<p>Hey! You are doing great;</p>"; //update

// Example

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Generate an array of 100 random colors
const colorsArray = Array.from({ length: 100 }, getRandomColor);

for (let i =0 ; i <= colorsArray.length; i++){
    let content = document.querySelector('.content');
    content.innerHTML +=  `<h1 style="color:${colorsArray[i]}; text-align:center;">Hey! You are doing great <span style="color:white";>- ${colorsArray[i]} </span></h1>`;
}


// Getting and Setting Attribute of Element

// https://www.youtube.com/watch?v=lGmRnu--iU8&t=7441s


// Get the link

let techCoderLink = document.querySelector('a');
console.log(techCoderLink.getAttribute('href'))

// Set the Link

techCoderLink.setAttribute('href', 'https://www.youtube.com/watch?v=lGmRnu--iU8&t=7441s');
techCoderLink.innerText = "Master Class of JavaScript "
console.log(techCoderLink.getAttribute('href'));


// Adding the Style

// Inline Style

heading.style.color = "black";
heading.style.backgroundColor = "#F5B53F";


// Add , Remove and Replace Class of ELement

let heading1 = document.querySelector('h1');

// Add the Class

heading1.classList.add('newClass');

// Remove Class

heading1.classList.remove('newClass');
console.log(heading1)

// Replace Class

heading1.classList.replace('main', "newClass");

console.log(heading1)



// Parent , Children and Sibling Elements


let parentElement = document.querySelector('.content1');

// All Children of Parent
console.log(parentElement.children)

// As we know that we can't run forEach on Htmlcollection
// So, We need to convert it into Array using Array.from() method
let converter = Array.from(parentElement.children)

converter.forEach(element => element.classList.add('tech-coder'))

// // Child Element

let childElement = document.querySelector('h2');
console.log(childElement); 

// find the parent of it 
console.log(childElement.parentElement);


// Find Next/previous Sibling of Child

console.log(childElement.nextElementSibling)
console.log(childElement.previousElementSibling)

// React library bhi internall Dom ko hi use karti hai , backend per
