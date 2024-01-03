// Asynchrounous Js

// Async Code Example

console.log(1)
console.log(2)

// Async Code
setTimeout(()=> {
 console.log("Callback Function called after 3 seconds   ")
}, 3000)

console.log(3)
console.log(4)

// HTTP response status codes

// Informational responses (100 - 199)
// Successful responses (200 - 299)
// Redirection responses (300 - 399)
// Client error responses (400 - 499)
// Server error responses (500 - 599)


// Promise Generel Example (TO Avoid Call Back HEll)

let getsomething = () => {
    // Define Your Code Here
    return new Promise((resolve, reject) => {

        // resolve('Your Data Here') // dUMMY
        reject('Some Error Here') // error

    })    

}

// Then (ya phir success chale ga ya fail , dono nahi chale ge aik saath is liye then)
// Catch (ya phir success chale ga ya error , dono nahi chale ge aik saath is liye catch)

// Execute your Code Here
getsomething().then((data) => {
    console.log(data)
}).catch(err => {
    console.log(err)
})



let todos = (resource, callback) => {
    return new Promise((resolve , reject) => {
            // Making HTTP Request (Example);

    let request = new XMLHttpRequest();

    // console.log(request, request.readyState)

    request.addEventListener('readystatechange', ()=> {
        // console.log(request,request.readyState)
        if (request.readyState === 4 && request.status == 200 ){
            // console.log(request.responseText);
            let data =JSON.parse(request.responseText)
            // callback(undefined, request.responseText);
            resolve(data);
        } else if (request.readyState === 4){
            // console.log('Data could not reach')
            reject("Data Could Not Fetch from the server"); 
        }
    })

     
    // Set up the request
    // request.open("Get", 'https://jsonplaceholder.typicode.com/todos');
    request.open("Get", resource);

    // Sending the request
    request.send();
    })
}

console.log(1)
console.log(2)


// Chaining of Promises
// Yeh bhi best tariqa nahi hai

todos("data.json").then((data) => {
    console.log("Promise 1 resolved",data);
    return todos('data-hannan.json');
}).then(data => {
    console.log("Promise 2 resolved",data);
    return todos('data-rehman.json')
}).then(data => {
    console.log("Promise 3 resolved",data);
}).catch(err => {
    console.log(err);
})


// Async Code Example - Function Call
// Chain of Todos Function(callback) => CallBack Hell
todos("data-hannan.json",(error , Data) => { // will take some time
    if(error){ 
        console.log(error)
    } else {
        console.log(Data) 
    }
    todos("data.json",(error , Data) => { // will take some time
        if(error){ 
            console.log(error)
        } else {
            console.log(Data) 
        }
        todos("data-rehman.json",(error , Data) => { // will take some time
            if(error){ 
                console.log(error)
            } else {
                console.log(Data) 
            }
        
        });
    
    });
});

console.log(4)
console.log(3)

// Network call are asynchrounous

// value    state                 Description
// 0        UNSENT                Client has been created. open() not called yet.
// 1        OPENED                open() has been called.
// 2        HEADERS_RECIEVED      send() has been called, and headers
// 3        LOADING Downloading;  responseText holds partial data.
// 4        DONE                  The operation is complete.



// Abhi tak humne jitna bhi kiya hai , woh sab ajax call , xmlHttpRequest ka dekha tha , 
// Aur woh complex bhi hai


// fetch API 
// Auto Promise (In Built) // Make it Ease

fetch('data.json').then((response) => {
    console.log("Promise Resolved", response );
    return response.json() // return promise - Asynchrounous
}).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})


// Async Await
// "Async" Auto Create a "Promise" 
// Await "then" ki tarah kaam karta hai


let getTodos = async() => {
    let response = await fetch('data.json');
    if(response.status !== 200){
        throw new Error(`Custom Error in fetching the Data`);
    }
    let data = await response.json();
    return data;
}


setTimeout(() => {
    getTodos().then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}, 3000)


// Async Await without return Statement

// Let suppose we want to get more than one one data

// It is very easy in js FOR Multi



// Error handling using Try Catch Method
// then , catch keyword nahi use karna pare ga


let multiData = async() => {

    try{

    let response = await fetch("data.json");
    let data = await response.json();

    let response1 = await fetch('data-hannan.json');
    let data1 = await response1.json();

    console.log(data , data1)

    }

    catch(error) {
        console.log(error.message)
    }

}

setTimeout(() => {
    multiData();
}, 4000)


// Try Catch

try {
    let x = 4;
    const y = 6;
    y = x
}
catch(error){
    console.log(error.message);
}