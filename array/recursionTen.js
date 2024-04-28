// Recursion (Data Structure) (Ten Number)
// A function that calls itself


// factorial Problem
const factorial = (x) => {
    if(x==0 || x ==1){
        return 1;
    }

    return x*factorial(x-1);
};


let data = 5;
let fact = factorial(data);
console.log(fact);



// fibonacci problem
// Fibonacci(n) = Fibonacci(n - 1) + Fibonacci(n - 2)
const fibonacci=(n)=>{
    if (n===0) {
        return 0
    }
    else if(n===1){
        return 1
    }
    else{
        let x = fibonacci(n - 1) + fibonacci(n-2);
        return x;
    }
};

const number=6;
let fibo=fibonacci(number);
console.log(fibo);
