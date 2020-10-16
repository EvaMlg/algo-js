const readlineSync = require("readline-sync");
let n = readlineSync.question('Combien de nombres aléatoires voulez-vous générez ?');
let finalArray = []


function rand10() { // function rand10 returns a random integer between 1 and 10.
 return Math.ceil(Math.random() * 10)
}

function multirand(n) { // function multirand(n) returns an array of n numbers between 1 and 10.
    // return array=[n*rand10()]
    for (let i=0; i<n; i++){
       finalArray.push(rand10())

    }
}

multirand(n)
console.log(finalArray)

