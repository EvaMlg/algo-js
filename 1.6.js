const readlineSync = require("readline-sync");
let nombre1 = readlineSync.question('Donnez-moi un nombre entier? ');
let nombre2 = readlineSync.question('Un deuxième ? ');
console.log("Voici le reste de la division des deux nombres que vous m'avez donné : " + nombre1 % nombre2 );
