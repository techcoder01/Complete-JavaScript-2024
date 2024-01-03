console.log('Exporting Modules')

export let order = function(buyer , item){
    console.log(`${buyer} ordered this ${item}`);
}


// Muliple Value ;

let LaptopPrice = 50000;
let quantity = 25;

// export {LaptopPrice , quantity as qty};

// export default

// Aik hi cheez export default hosakti hai
// Koi aesi cheez jo file mai aik hi hon 
// Module , Component , Class , Main Function
export default order; 