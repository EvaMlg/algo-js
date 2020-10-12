const readlineSync = require("readline-sync");
let n = readlineSync.question('Choose a number')
let answer = 0

    for (let i = 1; i <= n; i += 1) {
        let x = readlineSync.question('Choose another number')
        answer = answer + x;
      }
console.log(answer)