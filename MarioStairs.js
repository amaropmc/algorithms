/*
Write a code that prints the following to the console:
      #
     ##
    ###
   ####
  #####
 ######
#######
*/

const size = 7;

for (let i = 1; i <= size; i++) {
    let row = "";  

    for(let j = 0; j < size - i; j++) {
      row += " ";  
    }

    for (let k = 0; k < i; k++) {
      row += "#"; 
    }

    console.log(row);
}
    