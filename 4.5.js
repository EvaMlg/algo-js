const readlineSync = require("readline-sync");
let x1 = readlineSync.question('Quelle est le x du premier point ?');
let y1 = readlineSync.question('Quelle est le y du premier point ?');
let x2 = readlineSync.question('Quelle est le x du deuxième point ?');
let y2 = readlineSync.question('Quelle est le y du deuxième point ?');

// La fonction calcDistance permet de calculer la distance entre deux points.
function calcDistance(){
    return Math.round (Math.pow(x1, x2) + Math.pow(y1, y2));
  }

console.log(calcDistance())



