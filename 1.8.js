const readlineSync = require("readline-sync");
let animal = readlineSync.question('Quel est ton animal préféré? ');
let color = readlineSync.question('Quelle est ta couleur preférée? ');
let dreamingplace = readlineSync.question('Quel est ton lieu révé? ');
let beverage = readlineSync.question('Quelle est ta boisson préférée? ');
let question = readlineSync.question('Voulez vous savoir en quoi vous serez réincarné? ');
console.log("Vous serez incarné en un " + animal + (" ") + color + " se la coulant douce à/dans" + dreamingplace + "en buvant du/des" + beverage);