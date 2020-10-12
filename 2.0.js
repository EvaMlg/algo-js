const readlineSync = require("readline-sync");
let age = readlineSync.question('Quel âge as-tu? ');
if (age >= 18)
  { console.log("You are an adult");
  } else {(age <= 18)
console.log("You are a child");}