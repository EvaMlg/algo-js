const readlineSync = require("readline-sync");
let min = readlineSync.question('Un nombre? ');
let max = readlineSync.question('Un deuxième? ');
let current = readlineSync.question('Un troisième? ');
if ( min > current > max)
  { console.log(current)} 
else if (min > max)
{console.log("Error Message : Tu ne comprends rien.");}