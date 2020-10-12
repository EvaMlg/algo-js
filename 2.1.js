const readlineSync = require("readline-sync");
let age = readlineSync.question('Quel âge as-tu? ');
if (age >= 18)
  { console.log("You are an adult");
  } else {(age <= 18)
console.log("You are a child");}

Ask the user to enter three numbers: min, max and current. Display if current is between min and max.

Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand anything then exit the program. (It must not ask any other question.)

Bonus 2: be polite in the error messages. (facultative)