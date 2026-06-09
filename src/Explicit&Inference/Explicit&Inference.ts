// Explicit type annotations
// String
let greeting: string = "Hello! Typescript";

// Number
let userCount: number = 42;

// Boolean
let isLoadint: boolean = true;

// Array of numbers
let scores: number[] = [90, 94, 70];

// output the values
console.log(greeting);
console.log(userCount);
console.log(isLoadint);
console.log(scores);

// Best Practice: Use explicit types for function parameters and return types to
// make your code more maintainable and self - documenting.
function greet(name: string): string {
  return `Hello ${name}`;
}

console.log(greet("Sohel"));

// Type Inference
// TypeScript can automatically determine (infer) the type of a variable based on its initial value:

// TypeScript infers 'string'
let name = "Sohel";

// TypeScript infers 'number'
let age = 27;

// TypeScript infers 'boolean[]'
let flags = [true, false, true];

// TypeScript infers return type as 'number'
function add(a: number, b: number) {
  return a + b;
}

console.log(name);
console.log(age);
console.log(flags);
console.log(add(5, 8));

// Object Literal Inference
// TypeScript infers the shape of the object
const user = {
  name: "Sohel",
  age: 26,
  isAdmin: true,
};

console.log(user.name); //Ok
// console.log(user.email); //Property 'email' does not exist on type

// When TypeScript Can't Infer Types
// 1. JSON.parse returns 'any' because the structure isn't known at compile time
const data = JSON.parse('{"name": "Sohel", "age": 27}');
console.log(data);

// 2. Variables declared without initialization
let somethings;
somethings = "Hello";
somethings = 43;
console.log(somethings);

// Avoid any When Possible
// Using any disables TypeScript's type checking.
