// Ternary Operator Example
// Syntax: condition ? value_if_true : value_if_false

// let age = 20;
// let result = age > 18 ? 'Adult' : 'Kid';
// console.log(result);

// OR (||) Operator Example
// Returns the first truthy value

// let age = 0;
// let finalAge = age || 18;
// console.log(age);       // 0
// console.log(finalAge);  // 18

// Nullish Coalescing (??) Operator Example
// Returns the right value only if left value is null or undefined

let age;
let finalAge = age ?? 18;

console.log(age);       // undefined
console.log(finalAge);  // 18