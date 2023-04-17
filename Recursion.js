/*
Recursion
- power
- factorial
- productOfArray
- recursiveRange
- fib
*/

//power
function power(base, exponent){
    if(exponent===0) return 1;
    return base * power(base,exponent-1);
}

//factorial
function factorial(num){
   if(num===0) return 1;
   return num * factorial(num-1);
}

//productOfArray
function productOfArray(arr){
    if(arr.length===0) return 1;
    return arr[0]*productOfArray(arr.slice(1));
}

//recursiveRange
function recursiveRange(num){
   if(num===1) return 1;
   return num + recursiveRange(num-1);
}

//fib
function fib(num){
  // add whatever parameters you deem necessary - good luck!
  if(num<=2) return 1;
  return fib(num-2)+fib(num-1);
}
