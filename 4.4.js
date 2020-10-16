const readlineSync = require("readline-sync");
let n = readlineSync.question('Combien de nombres aléatoires voulez-vous générez ?');
let arr = [];
let sum = 0;

function rand10() { // function rand10 returns a random integer between 1 and 10.
 return Math.ceil(Math.random() * 10)
}

function multirand(n) { // function multirand(n) returns an array of n numbers between 1 and 10.
    for (let i=0; i<n; i++){
       arr.push(rand10())
    }
}

// function average(arr) returns the average of numbers
function average(arr){ 
    for (let i=0; i<n; i++){
        sum = sum + arr[i]
   }
   return (sum / n);
}

//function min(arr) takes an array min(arr)of numbers as argument and returns the minimum element.
function min(arr){
return Math.min(...arr)
}  

function max(arr){
return Math.max(...arr)
}

multirand(n)
console.log(arr);
console.log("La moyenne de ces nombres est : " + average(arr));
console.log("Le plus petit de ces nombres est : " + min(arr));
console.log("Le plus grand de ces nombres est : " + max(arr));
