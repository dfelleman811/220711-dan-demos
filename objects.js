/*
Objects in JS consist of a set of "key: value" pairs

let obj = {key: value, key2: value2}
*/
// declaring an object literal
let dan = {
    firstName: 'dan',
    lastName: 'felleman',
    profession: 'Trainer', 
    age: 5000
};
console.log(dan);


// to reference properties of an object
// dot notation
console.log(dan.firstName);
console.log(dan['firstName']);

// same thing for changing properties
dan.firstName = 'daniel';
dan['firstName'] = 'Daniel';

console.log(dan);

// something to notice
dan.pets = ['xander', 'xena', 'bean'];

console.log(dan);


console.log("Normal For Loop")
for (let i = 0; i < dan.pets.length; i ++) {
    console.log(dan.pets[i]);
}

console.log("For...of");

for (pet of dan.pets) {     // for (String s : myStringList)
    console.log(pet);
}

console.log("For...in");

for (pet in dan.pets) {
    console.log(dan.pets[pet]);
}






console.log("For...in loop");