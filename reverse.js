//Given a string, return a new string with the reverse order of characters

const stringToReverse = "Hello";
console.log(`String to reverse is: ${stringToReverse}`);
console.log(`Result: ${reverseString(stringToReverse)}`);

function reverseString(str) {

    if(str.length == 0) {
        return "Empty string!";
    }

    //If string is only 1 character, no need to enter the for loop
    if(str.length == 1) { 
        return str;
    }

    let arr = str.split('');
    let result = "";

    for(let i = arr.length - 1; i >= 0; i--) {
        result += arr[i];
    }
   
    return result;
}

//If using the reverse method
function reverseStringWithMethod(str) {
    return str.split('').reverse().join('');
}

/*INTEGER REVERSE*/
//Given an Integer, return a new Integer with the reverse order of numbers

const intToReverse = 1234;
console.log(`Integer to be reversed: ${intToReverse}`);
console.log(`Result: ${reverseInteger(intToReverse)}`);

function reverseInteger(num) {
    const isNegative = num < 0; //We could also use the Math*sign(num) after parseInt

    let result = parseInt(reverseStringWithMethod(num.toString()), 10);

    return result = isNegative ? -result : result;
}
