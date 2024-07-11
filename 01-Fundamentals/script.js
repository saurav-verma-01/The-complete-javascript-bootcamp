let js = "Amazing";

// if (js === "Amazing") alert("Javascrit is Fun!");
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
