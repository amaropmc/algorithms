/*
Write a program that prints all the numbers from 1 to 100, with two exceptions:
    - For numbers divisible by 3, print "Fizz" instead of the number
    - For numbers divisible by 5 (and not 3), print "Buzz" instead
    - For numbers that are divisible by both 3 and 5, print "FizzBuzz" instead.
*/

for(let i = 1; i <= 100; i++) {
    let numberToPrint = "";
  
    if(i % 3 == 0) {
      numberToPrint += "Fizz";
    }
  
    if(i % 5 == 0) {
      numberToPrint += "Buzz";
    }
  
    if(numberToPrint == "") {
      numberToPrint = i;
    }
  
    console.log(numberToPrint);
  }
