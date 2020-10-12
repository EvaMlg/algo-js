const readlineSync = require("readline-sync");
let lastName = readlineSync.question('What is your last name? ');
let firstName = readlineSync.question('What is your first name? ');
let city = readlineSync.question('Where do you live? ');
console.log("Your name is " + firstName + (" ")+ lastName  + " and you live in " + city );