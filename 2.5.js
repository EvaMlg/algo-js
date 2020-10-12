const readlineSync = require("readline-sync");
let number = readlineSync.question('What is your favorite number? ');
while (number !== 42)
if(number == 42) {
    console.log("Yes, finally!");
  }
else{
    console.log("Are you sure?");
} ;
