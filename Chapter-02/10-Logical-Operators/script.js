// Logical Operators

// And && , or || , Not !

// Example

let password = 'qwerty@';

if (password.lenght > 5 || password.includes('@')){
    console.log("Password Strenght is Strong");
}else{
    console.log("Change Your Password");
}

// Strict && , Check both
if (password.lenght > 5 && password.includes('@')){
    console.log("Password Strenght is Strong");
}else{
    console.log("Change Your Password");
}

