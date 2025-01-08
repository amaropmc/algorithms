//Given a string, return true if it is a palindrome, false if not

const someStr = "Money";
console.log(`Is "${someStr}" palindrome? ${isPalindrome(someStr)}!`);

function isPalindrome(str) {
    if(str.length == 1) {
        return true;
    }

    str = str.toUpperCase(); //To add case insensivity
    let lastCharIndex = str.length - 1;

    for(let i = 0; i < str.length; i++) {
        if(i == lastCharIndex) {
            return true;
        }

        if(str[i] == str[lastCharIndex]) {
            lastCharIndex--;
        } else { //if a mismatch is found, we exit the loop and return false
            return false;
        }
    }

    return true;
}