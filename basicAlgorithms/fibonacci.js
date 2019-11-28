// Fibonacci Algorithm

function fibonacci(number){
    if(number <= 1){
        return 1;
    }
    var result = fibonacci(number - 1) + fibonacci(number - 2);
    return result;
}
console.log(fibonacci(5));