// Create a function factorial(a) that returns the factorial of a number.

//That function must be recursive.

function factorial(a){
    if(a == 0 || a == 1){
        return 1;
    }else{
        return a * factorial(a-1);
    }
}
let a = 4;
answer = factorial(a)
console.log("The factorial of " + a + " is " + answer);

