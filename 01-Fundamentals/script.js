let js = "Amazing";

// if (js === "Amazing") alert("Javascrit is Fun!");

/*  ----------------------  String Template / Template Literals  ----------------------  */
// const firstName = "Saurav";
// const job = "Frontend Developer";
// const birthYear = 1998;

// const saurav =
//   "I'm " + firstName + ", a " + (2024 - birthYear) + " old " + job + ".";

// const saurav2 = `I'm ${firstName}, a ${2024 - birthYear} old ${job}.`;

// console.log(saurav);
// console.log(saurav2);

/*  ----------------------  Basic Operators  ----------------------  */

// Addition + , Subtraction - , multiple * , division / , modulus % , power **
// typeof Operator - type of the value
// Assignemnt operatos -> = , += , -= , *=, /* , ++, --
// Comparison Operatos - (Produce Boolean Values) <, >, <=, >=, !, ==, ===, !=, !== etc.
// Operator Precedence - Paranthesis, Exponents, Division, Multiple, Addition, Subtraction

/*  ----------------------  Data Types  ----------------------  */

// The 7 Primitive Data Types

//  1. Number
//  2. String
//  3. Boolean
//  4. Undefined
//  5. Null
//  6. Symbol
//  7. BigInt

//  Javascript has Dynamic Typing.

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// console.log(typeof true);
// console.log(typeof 23);
// console.log(typeof "Saurav");

// javascriptIsFun = "Absolutely";
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

/*  ----------------------  Values and Variables  ----------------------  */

/*
let firstName = "Saurav";
let lastName = "Verma";

console.log(firstName + " " + lastName);

firstName = "Superstar";
console.log(firstName + " " + lastName);

// Naming Conventions

// 1. camelCase to write variable Names.
// 2. Variable Names can not start with a number (Digit), but it may contain a number in the name.
// 3. Reserved Words can not be used as a Variable name (for ex - new, class, break etc).
// 4. Constant values are name in all Caps.
// 5. Give your variables a clear and descriptive variable names (Clean Code).


*/
/*  ----------------------  Console Method ----------------------  */

/* 

console.time("myTimer");
console.log(48 + 89 - 52 / 6);

console.log(
  "%cHello, %cWorld!",
  "color: #DCF2B0; font-size: 25px; font-weight: bold;",
  "color: #CD533B; font-size: 20px;"
);

console.group("Group 1");
console.log("Message 1");
console.log("Message 2");
console.log("Message 3");

console.group("Nested Group 2");
console.log("Nested Message 1");
console.log("Nested Message 2");
console.log("Nested Message 3");
console.groupEnd();
console.log("Message final");

console.groupEnd();

console.groupCollapsed("Collapsed Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();

console.error("Something Went Wrong");
console.warn("Somethin might go wrong!!!");
console.info("This is an Informational Message!");
console.debug("This is a debug message.");

const users = [
  { name: "John Doe", age: 30 },
  { name: "Jane Smith", age: 25 },
  { name: "Bob Johnson", age: 35 },
];

console.table(users);
console.timeEnd("myTimer");
console.trace("This is a trace message.");

*/
