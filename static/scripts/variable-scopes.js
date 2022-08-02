/**
 * 
 * Scopes
 * 
 * Global
 * 
 * Function Scope
 * 
 * Block Scope
 * 
 * 
 */


// global scope uses no keywork
globalVar = "global scope"; // this variable has global 

// block scope - anything contained inside {}
// we use the keywords let and const - introduced with ES6. 
if (true) {
    let username = "dan";
    const c = 155; // this is still block scope - but it creates a constant. 
    // we cannot change this value once initialized
    // and we can't declare a constant variable without initializing it. 
    //const c2;
    console.log(globalVar);
}

//console.log(username); // we cannot access a block scope variable outside of its block
//console.log(c);
let someVar; // still block scope - but block is entire script
console.log(enemy); // instead of a ReferenceError - we get undefined.
// function scope has some special features
// we use the 'var' keyword 
// when we declare somethign with the var keyword - that variable is "hoisted"
// the browser scans our documents for functions and var keywords
// before it starts interpreting the script

var enemy = 'hoisting';

console.log(`after initialization of var enemy = ${enemy}`)