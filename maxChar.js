//Given a string, return the character that is most commonly used 
const someStr = "apple 1211111p";
console.log(`Most used char in "${someStr}" is: ${maxChar(someStr)}`);


function maxChar(str) {
    const arr = str.split('');
    let maxValue = 0;
    let maxChar = '';

    let result = new Map();

    for(let i = 0; i < arr.length; i++) {
        let count = 0;

        if(result.has(arr[i])){
            continue;
        }

        for(let j = i; j < arr.length; j++) {
            
            if(arr[i] === arr[j]) {
                count ++;
            } 
        }

        result.set(arr[i], count);
    }

    for(let [char, count] of result.entries()) { //result.entries gives an array of key value pairs like this ['a', 1] and ['b', 1]...
        if (count > maxValue) {
            maxValue = count;
            maxChar = char;
        }
    }

    return maxChar;
}


/*
//Proposed implementation from FreeCodeCamp:
function maxChar(str) {
    let result = {}
    let maxValue = 0;
    let maxChar = '';

    for(let char of str) {
        if(result[char]) {
            result[char] += 1;
        } else {
            result[char] = 1;
        }
    }

    for(let key in result) {
        if(result[key] > maxValue) {
            maxValue = result[key];
            maxChar = key;
        }
    }

    return maxChar;
}
*/