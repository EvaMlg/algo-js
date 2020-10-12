const readlineSync = require("readline-sync");
let nombre1 = readlineSync.question('Donnez-moi un nombre avec une partie décimale? ');
let nombre2 = readlineSync.question('Un deuxième ? ');
console.log(nombre1 * Math.trunc(nombre2) );
