// Type: any
// - The any type is the most flexible type in TypeScript.
// - It essentially tells the compiler to skip type checking for a particular variable.

// - While this can be useful in certain situations, it should be used sparingly as
//     it bypasses TypeScript's type safety features.

// When to use any:
// - When migrating JavaScript code to TypeScript
// - When working with dynamic content where the type is unknown
// - When you need to opt out of type checking for a specific case

let v: any = true;
console.log(v);

v = "string";
console.log(v);

console.log(Math.round(v));

// Type: unknown
// The unknown type is a type-safe counterpart of any.

// When to use unknown:
// - When working with data from external sources (APIs, user input, etc.)
// - When you want to ensure type safety while still allowing flexibility
// - When migrating from JavaScript to TypeScript in a type-safe way
function processValue(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (Array.isArray(value)) {
    console.log(value.length);
  }
}

processValue("sohel");
processValue(["sohel", "fahim", "sabit"]);
