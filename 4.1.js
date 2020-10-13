const readlineSync = require("readline-sync");
let largeur = readlineSync.question('Quelle est la hauteur ? ');
let hauteur = readlineSync.question('Quelle est la largeur ? ');

function calculeSurface(largeur, hauteur) {
    return largeur * hauteur; 
}
console.log(calculeSurface(largeur, hauteur))