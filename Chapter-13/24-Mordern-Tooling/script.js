// Mordern JavaScript , Modules , and "Tooling";

// // "Exporting" and "Importing" ES6 Modules

// // Export ka Import

// // import {LaptopPrice, order, quantity} from './Product.js';
// // import * as hannan from "./Product.js"


// // Export Default ka Import;

// import koibhinaam from "./Product.js";

// console.log('importing Modules');

// koibhinaam('Jack', "Laptop")
 
// // console.log("Laptop Price is ", hannan.LaptopPrice);
// // console.log('Quantity is', hannan.qty);

// // console.log(hannan)


// //  Top Level Await ES2022

// // Before ES2022 we can use await only inside async function

// // But Mow Es2022 introduced  top level "await";

// // It means now we can use "await" outside the async function





// console.log('Start using top level await')

// let response = await fetch("https://jsonplaceholder.typicode.com/todos");
// let data = await response.json();

// console.log(data)
 
// console.log("Finish ......")

// console.log('Start using normal')

// let getTodos = async() => {

//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await response.json();
    
//     console.log(data)

// }

// getTodos();

// console.log("Finish ......");


// // Top Level await block the execution of next code part


// // Module Pattern
// // Modular code
// // Modular Pattern

// // IIFE

// let resultIIFE = (() => {
//         let orders= [];
//         let addToCart = (product,quantity) => {
//             console.log(`${product} ordered ${quantity}`);
//             orders.push({product, quantity})
//         }
//         return{
//             orders,
//             addToCart,
//         }
// })();

// resultIIFE.addToCart("Burger", 30)
// resultIIFE.addToCart("Biryani", 30)
// console.log(resultIIFE.orders)


console.log("hello")