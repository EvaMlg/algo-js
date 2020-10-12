const readlineSync = require("readline-sync");
let firstName = readlineSync.question('First Name?');
console.log("Hello " + firstName);