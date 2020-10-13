// Create a function named average(arr) that takes an array of numbers as argument and returns the average.

// Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

// Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

// Create a program that asks a number to the user then generate that same amount of random numbers but also displays their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) function created in Exercise 3.

// Write a documentation for all the functions you created.


const readlineSync = require("readline-sync");
let n = readlineSync.question('Combien de nombres aléatoires voulez-vous générez ?');
let finalArray = []

function average(arr){
        var sum = n;
        for (i = 0; i <n; i++){
            finalArray.push()
        }
        return (sum / n);
    }

    //const avg = array.reduce((a, b) => a + b) / array.length

function min(arr)

function max(arr)

function rand10() { // function rand10 returns a random integer between 1 and 10.
 return Math.ceil(Math.random() * 10)
}




function multirand(n) { // function multirand(n) returns an array of n numbers between 1 and 10.
    // return array=[n*rand10()]
    for (let i=0; i<n; i++){
       finalArray.push(rand10())

    }
}
average(arr)

console.log(average(arr))