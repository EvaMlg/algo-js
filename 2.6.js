const readlineSync = require("readline-sync");
let i = readlineSync.question('Pick a number between 1 and 7')
if (i == 1) {
    console.log("Lundi") 
}
else if (i == 2) {
    console.log("Mardi")
}
else if (i == 3) {
    console.log("Mercredi")
}
else if (i == 4) {
    console.log("Jeudi")
}
else if (i == 5) {
    console.log("Vendredi")
}
else if (i == 6) {
    console.log("Samedi")
}
else if (i == 7) {
    console.log("Dimanche")
}