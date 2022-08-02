/*

JavaScript is the most commonly used client-side (front-end) scripting language. 

It is a high level, multi-paradigm, interpreted language. 
And it's used to create dynamic web pages. JS asdds functionality to our 
otherwise static html documents. 

When the browser loads a webpage, the browser interprets the JavaScript code and executes it. 
*JavaScript runs in the browser and not on a server* 
    - (we do now have the ability to execute JS in a server environment using Node.js). 


High Level: when we say high level, we mean that JS abstracts away many implementation
    details that relate to computer hardware - memory allocation, garbage collection.
    (and also that it's human readable)

Multi-paradigm: JS supports many different coding paradigms:
    - i.e. functional programming, procedural programming, and oop

Interpeted: the browser interprets our JS code
    - our browser will execute our scripts line by line - top to bottom. 

ECMAScript - is the official name for JavaScript
    - it's used for language specification and standardization
    - They are versioned - ES5, ES6, ES7, ...
*/

// two forward slashes to writes comments

// Data Types
/*

JavaScript has both primitive datatypes and objects

Primitive Data Types

 - primitive data types are a single value

 - string
 - number
 - boolean
 - null
 - undefined
 - BigInt (introduced with ES6) 
 - Symbol (introduced with ES6)

 Reference Data Types (Objects)

 - object
 - array
 - functions 
 - a lot more...


*/
// declare variables like so: <some keyword> <variable name> = <value to be stored>

// Java - String myName = "Dan";

// javascript is not type safe
let myName = "Dan"; // the l in 'let' is lowercase
myName = 99;
myName = false;

let x; //declaring a variable but we have not assigned a value.
// this is a print statement -> Java System.out.println(x);
console.log(x); // undefined

// Semi-colons in JS are not required - but I suggest you put them.

let myVariable;

console.log(myVariable);
console.log(typeof myVariable); // what datatype ? 
console.log("---------------------------------------");

myVariable = 100; 
console.log(myVariable);
console.log(typeof myVariable);
console.log("---------------------------------------");

myVariable = 'one hundred'; // strings in JS can have a single quotation mark or double
console.log(myVariable);
console.log(typeof myVariable);
console.log("---------------------------------------");

myVariable = true; // just like in Java, these booleans are lowercase
console.log(myVariable);
console.log(typeof myVariable);
console.log("---------------------------------------");

myVariable = null; 
console.log(myVariable);
console.log(typeof myVariable); // this will print out 'object' - but null is a primitive datatype
console.log("---------------------------------------");


typeof(myVariable);