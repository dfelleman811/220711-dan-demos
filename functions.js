/**
 * 
 *  function name(param1, param2) {
 *      code
 * }
 * 
 */

// defined/declared a function
function add(num1, num2) {
    return num1 + num2;
}

let result = add(4, 5);
console.log(result);

let result2 = add("hello", "world"); // this is resulting in string concatenation
console.log(result2);

function multiply(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 * num2;
    }
    console.log("those aren't numbers!!! what are you doing?!");
    return 0;
}

console.log(multiply(5, 5));

console.log(multiply(5, "hello")); // -> NaN = not a number
console.log(multiply("Hello", "World")); // -> NaN 




/**
 * 
 * Anonymous Functions
 * - a function that is declared without an identifier (without a name)
 * - also can be an expression where we store a function in a variable
 */
 let anon = function() {
    console.log("I'm an anonymous function!");
}

anon();


let funRay = [
    function(param) {
        console.log('I\'m also an anonymous function!');
        console.log(`I was invoked with the parameter: ${param}`); // "I was invoked with the parameter: " + param;
    },

    {function: function() {console.log("Another anon function!")}}
];

funRay[0](1000);
funRay[1].function();



// IIFEs a.k.a Self Invoking Functions
// - these are anonymous functions that are immediately invoked after they're defined
(function() {console.log("I'm immediately invoked!")})();

/* Callback Functions
 - a callback function is a function that gets executed after another function completes
      it's execution
 - most comomnly we see callback functions when we are passing a function as a parameter
      to another function
      - we use callback functions commonly with things like setTimeout...and event triggers
*/

console.log("*****************CALLBACK**************")

function myFunction(param1) {
    console.log(`param1=${param1}`);
}

function anotherFunction(param, funParam) {
    funParam(param);
}

anotherFunction(555, myFunction); // myFunction(555);


anotherFunction(555, function(param) {
    console.log(`param=${param}`);
});


// Template Literal - use back ticks '`'
// anything inside of the backticks is a string - and we can easily include variables