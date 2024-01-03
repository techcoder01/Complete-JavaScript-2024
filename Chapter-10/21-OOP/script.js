// OOP (Object Oriented Programming)

//  Constructor function and the "new" Operator

// We can not use "arrow" function as constructor

// Call "constructor" function using "new" keyword

// 1 - new {object} Created empty initially
// 2 - "this" = {object}
// 3 - object linked to prototype
// 4 - functional automatically return {object}

let Car = function(color, model){
    // console.log(this)
    
    // instance properties
    this.color = color;
    this.model = model;

    // this.x = color;
    // this.y = model;

    // Methods - Not a Good Practice - Make Prototype instead
    this.login = function() {
        console.log("Login MEthod")
    }
}


// Prototype :
console.log(Car.prototype) //empty

// Method
Car.prototype.startEngine = function(){
    console.log("This is start engine method")
}


// We can also set "properties" to ProtoType
Car.prototype.company = "Honda";

// Prototype mai chala gaya , startEngine har instance mai add hota jaiga
console.log(Car.prototype)

// Yeh Properties "Prototype" ki 
// object ke andar accessible rahe ge , 
// isi ko "prototype Inheritence"


// Har function constructor hi hota hai , bas us new karke call karna hota hai
let instanceOfCar = new Car("Black", 2023);
let instance = new Car("Blue", 2013);
console.log(instanceOfCar, instance);
console.log(instanceOfCar instanceof Car );
console.log(instance instanceof Car );

instanceOfCar.startEngine()
// Array mai push , pop , array ke prototype se hi banti hai


//  Prototypal Inheritence on built In Object (arrays)
console.log(instance  .__proto__)
console.log(Car.prototype) // Both are same

// Instance uses .__proto__ 
// Constructor uses .prototype

console.log(Car.prototype.isPrototypeOf(Car))


// Car.prototype is prototype of all objects created through 
// the Car Constructor

let arr = [2,3,5,7,8];

console.log(arr.__proto__.__proto__) // Chaining of prototype
console.log(Array.prototype) 

// JavaScript mai zyada cheeze Object ke Prototype se bani howi hai
console.log(Object.prototype) // last level of javascript , null se just upper


// ES6 Classes (They still implement prototypal inheritence (behind the scene))

// Getter & Setter Methods 
// allow you to define Object Accessors (Computed Properties)

// Static Method (method which is not present on constructor "prototype" property but "constructor" itself)



// class declaration

class MyCar {
    constructor(color , model){
        this.color = color;
        this.model = model;
    }
    startEngine(){
        console.log("This is start engine method oF Car Class")
    }

    get _startEngone(){
        console.log("This is start Engine MEthod using getter")
     }

     get description(){
        return `Color of Bike is ${this.color} and it's model is ${this.model}`;      
     }

     set changeColor(color){
        console.log(this.color = color)
     }
}

// MyCar.prototype.breakMethod = function(){
//     console.log('Break Method of Car')
// }


let honda  = new MyCar("Red", 2023)

console.log(honda.__proto__) 
console.log(MyCar.prototype)


honda.startEngine(); // accessing as function
honda._startEngone; // Accessing as Property 

honda.changeColor = "Black";
console.log(honda)

// honda.breakMethod();

// Important Points
// Classes are not Hoisted - Declared karne se pehle kahi use nahi karsakte
// Classes are also first class citizens (Pass as an argument or return);
// -- function ki tarah argument mai pass kar sakte hon
// Classes are executed in Strict Mode 

// Introduced in Es5 (2009);



//  static Method
// Can Never Inherit

Car.breakMethod = function(){
    console.log('This is a break method of car');
}


Car.breakMethod();
// honda.breakMethod(); // error , 



// Class inheritence (sub class)

// class declearation

// Parent Class

class Tesla {
    constructor(color , model){
        this.color = color;
        this.model = model;
    }
    startEngine(){
        console.log("This is start engine method");
    }
}

// Child Class

class Bike extends Tesla {
    // Add some new properties and method as well
    constructor(color, model , engineCapacity){
        // super method to call things from parent
        super(color, model);
        this.engineCapacity = engineCapacity;
    }

    bikeMethod(){
        console.log('This iss the Method of Bike Class')
    }
}


let teslaBike = new Bike('black', 2023, "125CC");
console.log(teslaBike, teslaBike.__proto__)

let modelX = new Tesla('red', 2023);
console.log(modelX)


// Prototypal Inderitence (using constructor function)

// parent class 

let Bugatti = function(color , model){
    this.color = color;
    this.model = model;
}

Bugatti.prototype.startEngine = function(){
    console.log("Starting Bugatti Engine")
}

let bugatti = new Bugatti('blue', 2021)
console.log(bugatti)


// child Class



let NewBike = function(color,model, engineCapacity){
    Car.call(color,model);
    this.engineCapacity = engineCapacity;
}

NewBike.prototype = Object.create(Car.prototype);

// NewBike.prototype !== Car.prototype
// NewBike.prototype aik object ke bababar hai us object ka prototype aik Car hai

NewBike.prototype.ownBike = function(){
    console.log("tHIS IS Our own Bike")
}

NewBike.__proto__.ownBike = function(){
    console.log("tHIS IS Our own Bike")
}

let bike1 = new NewBike("Green", 2022, "200CC")
console.log(bike1)
console.log(NewBike.prototype)
console.log("==============================")
console.log(bike1)  


// Chaining Method

class bankAccount {
    constructor (owner, pin){
        this.owner = owner;
        this.pin = pin;
        this.movements = [];
    }   

    getMovements(){
            return this.movements
    }

    deposit(val){
        this.movements.push(val)
        return this;
    }

    withdraw(val){
        this.deposit(-val);
        return this;
    }
}


let account = new bankAccount("Zach", 1000);

account.deposit(20).withdraw(40).deposit(100)

console.log(account.getMovements());
console.log(account)