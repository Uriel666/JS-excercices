/**
 * FIZZBUZZ
 * 
 * Write a program that uses console.log to print all the numbers form 1 to 100,
 * with two exceptions. For numbers divisible by 3, print "Fizz" instead of the 
 * number, and for numbers divisible by 5(and no 3), print "Buzz", instead of the
 * number.
 * 
 * When you have that working, modify your program to print "FizzBuzz" instead 
 * for numbers that are divisible by both 3 and 5 (and still print "Fizz" or 
 * "Buzz" for numbers divisible by only one of those)
 */

for(let i = 1; i<=30;i++){

    if(i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz");
        continue;
    }

    if(i%5 !== 0 && i%3 === 0){
        console.log("Fizz")
        continue;
    }

    
    if(i%3 !== 0 && i%5 === 0){
        console.log("Buzz")
        continue;
    }

    console.log(i);
}