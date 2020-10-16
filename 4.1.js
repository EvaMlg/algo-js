const readlineSync = require("readline-sync");
let largeur = readlineSync.question('Quelle est la hauteur ? ');
let hauteur = readlineSync.question('Quelle est la largeur ? ');

function calcSurface(largeur, hauteur) {
    return largeur * hauteur; 
}
console.log(calcSurface(largeur, hauteur))

// La fonction calcSurface permet de calculer la surface d'un rectangle.