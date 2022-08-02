// declare an array

let ray = [1, 2, 3, 4, 5, 6];

console.log(ray);

ray[0] = 10;

console.log(ray);
console.log(ray[3]);

ray[2] = 'three';

console.log(ray);

let messyRay = ['dan', true, [1, 2, 3], {name: 'dan'}];

console.log(messyRay);


console.log('*******************************************')

let ray2 = ['dan', 'jess', 'matt', 'david', 'karen'];
console.log(ray2);
console.log(ray2.length);

// pop
console.log(ray2.pop());
console.log(ray2);

// push
ray2.push("chloe");
console.log(ray2)

// shift
ray2.shift();
console.log(ray2)

// unshift
ray2.unshift('Insert an element at the beginning of an array!');
console.log(ray2)