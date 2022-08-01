/*

Type Coercion is the automatic (aka implicit) conversion of values from one datatype 
to another
- this defaults to numeric conversion

i.e. true -> 1 

i.e. "true" -> NaN

*/

// we CAN do this explicitly
let number =25;
console.log(`number is ${number} and of type ${typeof number}`);

number = String(number);
console.log(`number is ${number} and of type ${typeof number}`);


// type coercion happens automatically if you are comparing
// two variables with the '==' double equals operator

console.log(`123 =='123' ${123 == '123'}`); // evaluates to true
console.log(`123 === '123' ${123 === '123'}`);


console.log(`true == 'true' ${true == 'true'}`); //i.e. true -> 1 or i.e. "true" -> NaN


console.log("*******************TRUTHY FALSY**************************")
/**
 *  Truthy / Falsy Values
 *  in JS - some values evaluate to either true or false in certain contexts
 */


if ("non-empty string") {
    console.log('"non-empty string" evaluates to true');
}

if ({}) {
    console.log("{} does this print");
}

if ([]) {
    console.log("[] does this print");
}

if (5) {
    console.log('positive number');
}

if (-2) {
    console.log('negative number')
}

// falsy values 
if (!0) {
    console.log('0 is a falsy value')
}

if (!undefined) {
    console.log("Undefined is a falsy value")
}

if (!null) {
    console.log("null is a falsy value")
}

if (!NaN) {
    console.log("NaN is a falsy value")
}

if (!-0) {
    console.log("-0 is a falsy value")
}

if (!"") {
    console.log("empty string '' is falsy");
}